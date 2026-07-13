const notice = document.querySelector("#adminNotice");
const totalUsers = document.querySelector("#totalUsers");
const activeToday = document.querySelector("#activeToday");
const totalLogins = document.querySelector("#totalLogins");
const storageMode = document.querySelector("#storageMode");
const loadedAt = document.querySelector("#adminLoadedAt");
const tableBody = document.querySelector("#usersTableBody");
const refreshButton = document.querySelector("#refreshUsers");
const adminLock = document.querySelector("#adminLock");
const passwordForm = document.querySelector("#adminPasswordForm");
const passwordInput = document.querySelector("#adminPasswordInput");
const protectedContent = Array.from(document.querySelectorAll("[data-admin-content]"));

const auth = window.VibeAuth;
const ACCESS_TOKEN_KEY = "vibe-star-map-admin-access-token";

function showNotice(message) {
  notice.hidden = false;
  notice.textContent = message;
}

function hideNotice() {
  notice.hidden = true;
  notice.textContent = "";
}

function adminAccessToken() {
  try {
    return window.sessionStorage.getItem(ACCESS_TOKEN_KEY) || "";
  } catch {
    return "";
  }
}

function saveAdminAccessToken(token) {
  try {
    window.sessionStorage.setItem(ACCESS_TOKEN_KEY, token);
  } catch {}
}

function clearAdminAccessToken() {
  try {
    window.sessionStorage.removeItem(ACCESS_TOKEN_KEY);
  } catch {}
}

function setLocked(locked) {
  adminLock.hidden = !locked;
  refreshButton.hidden = locked;
  protectedContent.forEach((element) => {
    element.hidden = locked;
  });
  if (locked) {
    passwordInput.focus();
  }
}

function formatDate(value) {
  if (!value) return "--";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "--";
  return new Intl.DateTimeFormat("zh-TW", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

function isToday(value) {
  if (!value) return false;
  const date = new Date(value);
  const now = new Date();
  return date.toDateString() === now.toDateString();
}

function modeLabel(mode) {
  if (mode === "mysql") return "MySQL";
  if (mode === "kv") return "Vercel KV";
  if (mode === "local") return "本機 JSON";
  if (mode === "missing") return "尚未設定";
  return mode || "--";
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderStats(users, mode) {
  totalUsers.textContent = String(users.length);
  activeToday.textContent = String(users.filter((user) => isToday(user.lastSeenAt)).length);
  totalLogins.textContent = String(users.reduce((sum, user) => sum + Number(user.loginCount || 0), 0));
  storageMode.textContent = modeLabel(mode);
  loadedAt.textContent = `更新於 ${formatDate(new Date().toISOString())}`;
}

function renderUsers(users) {
  if (!users.length) {
    tableBody.innerHTML = `<tr><td colspan="6">目前還沒有使用者紀錄。</td></tr>`;
    return;
  }

  tableBody.innerHTML = users
    .map(
      (user) => `
        <tr>
          <td>
            <div class="user-cell">
              <strong>${escapeHtml(user.name || user.email || "--")}</strong>
              <span>${escapeHtml(user.email || "--")}</span>
            </div>
          </td>
          <td>${escapeHtml(user.portalName || user.portalId || "--")}</td>
          <td><span class="status-pill">${escapeHtml(user.status || "active")}</span></td>
          <td class="metric-cell">
            <strong>${Number(user.loginCount || 0)} 次登入</strong>
            <div class="muted">${Number(user.pageViewCount || 0)} 次瀏覽</div>
            <div class="muted">最近登入 ${formatDate(user.lastLoginAt)}</div>
          </td>
          <td class="metric-cell">
            <strong>${formatDate(user.firstSeenAt)}</strong>
            <div class="muted">最後活動 ${formatDate(user.lastSeenAt)}</div>
          </td>
          <td class="path-cell">${escapeHtml(user.lastPath || "--")}</td>
        </tr>
      `
    )
    .join("");
}

async function loadUsers() {
  hideNotice();
  refreshButton.disabled = true;
  refreshButton.textContent = "載入中";

  const credential = auth.sessionCredential();
  if (!credential) {
    setLocked(true);
    showNotice("目前登入憑證已過期，請登出後重新使用 Google 登入。");
    tableBody.innerHTML = `<tr><td colspan="6">無法讀取後台資料。</td></tr>`;
    refreshButton.disabled = false;
    refreshButton.textContent = "重新整理";
    return;
  }

  const accessToken = adminAccessToken();
  if (!accessToken) {
    setLocked(true);
    refreshButton.disabled = false;
    refreshButton.textContent = "重新整理";
    return;
  }

  try {
    setLocked(false);
    const response = await fetch("/api/admin/users", {
      headers: {
        Authorization: `Bearer ${credential}`,
        "X-Admin-Access-Token": accessToken,
      },
    });
    const payload = await response.json();
    if (!response.ok || !payload.ok) {
      throw payload;
    }
    renderStats(payload.users || [], payload.storageMode);
    renderUsers(payload.users || []);
  } catch (error) {
    if (["ADMIN_PASSWORD_REQUIRED", "ADMIN_ACCESS_INVALID", "ADMIN_ACCESS_EXPIRED"].includes(error.code)) {
      clearAdminAccessToken();
      setLocked(true);
    }
    const message =
      error.code === "MISSING_STORAGE"
        ? "正式站尚未設定資料庫環境變數，後台頁已建立，但還不能長期保存使用者紀錄。請在 Vercel 加入 MySQL 連線設定。"
        : error.message || "後台資料讀取失敗，請稍後再試。";
    showNotice(message);
    renderStats([], error.code === "MISSING_STORAGE" ? "missing" : "--");
    tableBody.innerHTML = `<tr><td colspan="6">無法讀取後台資料。</td></tr>`;
  } finally {
    refreshButton.disabled = false;
    refreshButton.textContent = "重新整理";
  }
}

async function unlockAdmin(event) {
  event.preventDefault();
  hideNotice();

  const credential = auth.sessionCredential();
  if (!credential) {
    showNotice("目前登入憑證已過期，請登出後重新使用 Google 登入。");
    return;
  }

  const password = passwordInput.value;
  passwordForm.querySelector("button").disabled = true;
  passwordForm.querySelector("button").textContent = "驗證中";

  try {
    const response = await fetch("/api/admin/unlock", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${credential}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password }),
    });
    const payload = await response.json();
    if (!response.ok || !payload.ok) {
      throw payload;
    }
    saveAdminAccessToken(payload.accessToken);
    passwordInput.value = "";
    setLocked(false);
    await loadUsers();
  } catch (error) {
    clearAdminAccessToken();
    setLocked(true);
    showNotice(error.message || "後台密碼驗證失敗，請再試一次。");
  } finally {
    passwordForm.querySelector("button").disabled = false;
    passwordForm.querySelector("button").textContent = "解鎖後台";
  }
}

passwordForm.addEventListener("submit", unlockAdmin);
refreshButton.addEventListener("click", loadUsers);
if (adminAccessToken()) {
  loadUsers();
} else {
  setLocked(true);
}

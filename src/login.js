const portalCards = Array.from(document.querySelectorAll("[data-portal]"));
const selectedPortalName = document.querySelector("#selectedPortalName");
const selectedPortalDescription = document.querySelector("#selectedPortalDescription");
const selectedPortalTag = document.querySelector("#selectedPortalTag");
const portalDomainHint = document.querySelector("#portalDomainHint");
const googleButtonMount = document.querySelector("#googleButtonMount");
const authStatus = document.querySelector("#authStatus");
const authConfigHint = document.querySelector("#authConfigHint");

const auth = window.VibeAuth;
const config = auth.getConfig();
const portals = auth.getPortals();
const params = new URLSearchParams(window.location.search);
const currentSession = auth.getSession();

let selectedPortalId = params.get("portal") || currentSession?.portalId || "zhihe";

function setStatus(text, tone = "info") {
  authStatus.textContent = text;
  authStatus.dataset.tone = tone;
}

function selectedPortal() {
  return auth.getPortal(selectedPortalId);
}

function allowedDomainsForPortal(portalId) {
  return config.allowedDomains?.[portalId] || [];
}

function updatePortalSummary() {
  const portal = selectedPortal();
  const allowedDomains = allowedDomainsForPortal(portal.id);

  selectedPortalName.textContent = portal.label;
  selectedPortalDescription.textContent = portal.description;
  selectedPortalTag.textContent = "使用 Google 帳號註冊 / 登入";
  portalDomainHint.textContent = allowedDomains.length
    ? `限定網域：${allowedDomains.join(" / ")}`
    : "目前未限制公司網域";

  portalCards.forEach((card) => {
    const active = card.dataset.portal === portal.id;
    card.classList.toggle("is-active", active);
    card.setAttribute("aria-pressed", String(active));
  });
}

function choosePortal(portalId) {
  selectedPortalId = auth.getPortal(portalId).id;
  updatePortalSummary();
  if (auth.configuredClientId()) {
    setStatus(`目前將以「${selectedPortal().label}」完成 Google 登入。`);
  }
}

function safeReturnTo() {
  return auth.normalizeReturnTo(params.get("returnTo")) || config.defaultReturnTo;
}

function redirectAfterLogin() {
  window.location.assign(safeReturnTo());
}

function handleCredentialResponse(response) {
  const profile = auth.decodeCredential(response.credential);
  const portal = selectedPortal();
  const allowedDomains = allowedDomainsForPortal(portal.id);

  if (!profile?.email) {
    setStatus("Google 回傳的帳號資料不完整，請再試一次。", "error");
    return;
  }

  if (!auth.matchesAllowedDomain(profile.email, allowedDomains)) {
    setStatus(`這個 Google 帳號不在 ${portal.label} 允許的公司網域內。`, "error");
    return;
  }

  auth.saveSession({
    portalId: portal.id,
    name: profile.name || profile.given_name || profile.email,
    email: profile.email,
    picture: profile.picture || "",
    emailVerified: Boolean(profile.email_verified),
    googleSub: profile.sub || "",
    idToken: response.credential,
  });

  auth.recordActivity("login", {
    portalId: portal.id,
    portalName: portal.label,
    path: safeReturnTo(),
  });

  setStatus(`登入成功，正在帶你進入「${portal.label}」…`, "success");
  window.setTimeout(redirectAfterLogin, 320);
}

function waitForGoogle(timeoutMs = 12000) {
  return new Promise((resolve, reject) => {
    const start = window.performance.now();

    function check() {
      if (window.google?.accounts?.id) {
        resolve(window.google.accounts.id);
        return;
      }

      if (window.performance.now() - start > timeoutMs) {
        reject(new Error("Google Identity Services 載入逾時"));
        return;
      }

      window.setTimeout(check, 80);
    }

    check();
  });
}

function initGoogleButton() {
  const clientId = auth.configuredClientId();
  if (!clientId) {
    authConfigHint.hidden = false;
    googleButtonMount.hidden = true;
    setStatus("Google Client ID 尚未設定，先填入設定值後即可啟用登入。", "error");
    return;
  }

  waitForGoogle()
    .then((googleId) => {
      googleId.initialize({
        client_id: clientId,
        callback: handleCredentialResponse,
        auto_select: false,
        cancel_on_tap_outside: true,
        context: "signin",
      });

      googleButtonMount.innerHTML = "";
      googleButtonMount.hidden = false;
      googleId.renderButton(googleButtonMount, {
        type: "standard",
        theme: "outline",
        shape: "pill",
        size: "large",
        text: "signin_with",
        logo_alignment: "left",
        width: 320,
      });

      setStatus(`目前將以「${selectedPortal().label}」完成 Google 登入。`);
    })
    .catch(() => {
      setStatus("Google 登入元件目前沒有成功載入，請重新整理頁面。", "error");
    });
}

function bindPortalCards() {
  portalCards.forEach((card) => {
    card.addEventListener("click", () => choosePortal(card.dataset.portal));
  });
}

function maybeRedirectExistingSession() {
  if (!currentSession || params.get("switchPortal") === "1") return;
  if (currentSession.portalId) {
    selectedPortalId = auth.getPortal(currentSession.portalId).id;
    updatePortalSummary();
  }
  setStatus(`目前已登入「${currentSession.portalName}」。若要換入口可直接重選，再按 Google 登入。`, "success");
}

bindPortalCards();
updatePortalSummary();
maybeRedirectExistingSession();
initGoogleButton();

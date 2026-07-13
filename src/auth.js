(function () {
  const DEFAULT_PORTALS = {
    zhihe: {
      id: "zhihe",
      label: "智合科技入口",
      shortLabel: "智合科技",
      description: "適合進入智合科技的專案協作、知識整理與日常工作流程。",
      accent: "#7d88c6",
    },
    qianghe: {
      id: "qianghe",
      label: "強合智慧入口",
      shortLabel: "強合智慧",
      description: "適合進入強合智慧的營運協作、任務節點與流程追蹤環境。",
      accent: "#d48e68",
    },
    panjit: {
      id: "panjit",
      label: "強茂集團入口",
      shortLabel: "強茂集團",
      description: "適合進入強茂集團的跨公司資源、集團資訊與協作管理環境。",
      accent: "#b84c42",
    },
  };

  const STYLE_ID = "vibe-auth-chrome-style";
  const BRAND_STYLE_ID = "vibe-brand-constellation-style";
  const AUTHOR_STYLE_ID = "vibe-author-signature-style";
  const BRAND_ITEMS = [
    {
      name: "智合科技",
      note: "智能解決方案專家",
      href: "https://www.zh-aoi.com/",
      logo: "/src/assets/logos/zhihe-logo.png",
      logoClass: "is-mark",
    },
    {
      name: "強合智慧",
      note: "JVision AI Solutions",
      href: "https://www.jvision-ai.com/src/landing.html",
      logo: "/src/assets/logos/jvision-logo-wordmark.png",
      logoClass: "is-wide",
    },
    {
      name: "強茂集團",
      note: "PANJIT Group",
      href: "https://www.panjit.com.tw/tw",
      logo: "/src/assets/logos/panjit-logo-mark.png",
      logoClass: "is-wide is-panjit",
    },
  ];

  function latin1StringToBytes(value) {
    return Uint8Array.from(Array.from(value), (char) => char.charCodeAt(0) & 0xff);
  }

  function decodeUtf8Bytes(bytes) {
    if (typeof TextDecoder !== "undefined") {
      return new TextDecoder("utf-8").decode(bytes);
    }

    let encoded = "";
    bytes.forEach((byte) => {
      encoded += `%${byte.toString(16).padStart(2, "0")}`;
    });
    return decodeURIComponent(encoded);
  }

  function repairLikelyMojibake(value) {
    if (typeof value !== "string" || !value || !/[\u00c0-\u00ff]/.test(value)) {
      return value;
    }

    try {
      const decoded = decodeUtf8Bytes(latin1StringToBytes(value));
      if (decoded === value) return value;

      if (/[\u4e00-\u9fff\u3040-\u30ff\uac00-\ud7af]/.test(decoded)) {
        return decoded;
      }

      if (/[^\u0000-\u007f]/.test(decoded) && !/[\u00c0-\u00ff]/.test(decoded)) {
        return decoded;
      }
    } catch {}

    return value;
  }

  function normalizeSession(session) {
    if (!session || typeof session !== "object") return session;
    return {
      ...session,
      name: repairLikelyMojibake(session.name || ""),
    };
  }

  function getConfig() {
    const raw = window.APP_AUTH || {};
    return {
      googleClientId: raw.googleClientId || "",
      sessionKey: raw.sessionKey || "vibe-star-map-auth-session",
      loginPath: raw.loginPath || "/login.html",
      defaultReturnTo: raw.defaultReturnTo || "/?track=stars",
      adminEmails: Array.isArray(raw.adminEmails) ? raw.adminEmails : ["aken1023@gmail.com"],
      allowedDomains: raw.allowedDomains || {},
      portals: raw.portals || DEFAULT_PORTALS,
    };
  }

  function getPortals() {
    return getConfig().portals;
  }

  function getPortal(id) {
    return getPortals()[id] || getPortals().zhihe;
  }

  function getSession() {
    try {
      const raw = window.localStorage.getItem(getConfig().sessionKey);
      if (!raw) return null;
      const original = JSON.parse(raw);
      const parsed = normalizeSession(original);
      if (!parsed || !parsed.portalId || !parsed.email) return null;
      if (JSON.stringify(parsed) !== JSON.stringify(original)) {
        window.localStorage.setItem(getConfig().sessionKey, JSON.stringify(parsed));
      }
      return parsed;
    } catch {
      return null;
    }
  }

  function saveSession(session) {
    const portal = getPortal(session.portalId);
    const payload = normalizeSession({
      ...session,
      portalName: portal.label,
      portalShortName: portal.shortLabel,
      savedAt: new Date().toISOString(),
    });
    window.localStorage.setItem(getConfig().sessionKey, JSON.stringify(payload));
    return payload;
  }

  function sessionCredential(session = getSession()) {
    return session?.idToken || "";
  }

  function recordActivity(event = "page_view", details = {}) {
    const session = getSession();
    const credential = sessionCredential(session);
    if (!credential) return Promise.resolve(null);

    const body = JSON.stringify({
      credential,
      event,
      portalId: details.portalId || session.portalId || "",
      portalName: details.portalName || session.portalName || "",
      path: details.path || currentPathWithQuery(),
    });

    return fetch("/api/session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
      keepalive: true,
    }).catch(() => null);
  }

  function clearSession() {
    window.localStorage.removeItem(getConfig().sessionKey);
  }

  function currentPathWithQuery() {
    return `${window.location.pathname}${window.location.search}${window.location.hash}`;
  }

  function normalizeReturnTo(value) {
    if (!value || typeof value !== "string") return null;
    if (!value.startsWith("/")) return null;
    if (value.startsWith("//")) return null;
    return value;
  }

  function redirectToLogin(reason) {
    const config = getConfig();
    const target = new URL(config.loginPath, window.location.origin);
    target.searchParams.set("returnTo", currentPathWithQuery());
    if (reason) target.searchParams.set("reason", reason);
    window.location.replace(`${target.pathname}${target.search}`);
  }

  function requireAuth() {
    const config = getConfig();
    if (window.location.pathname === config.loginPath) return true;
    const session = getSession();
    if (session) return true;
    redirectToLogin("missing-session");
    return false;
  }

  function decodeCredential(credential) {
    if (!credential) return null;
    const segments = credential.split(".");
    if (segments.length < 2) return null;
    const base64 = segments[1].replace(/-/g, "+").replace(/_/g, "/");
    const padded = `${base64}${"=".repeat((4 - (base64.length % 4)) % 4)}`;
    return JSON.parse(decodeUtf8Bytes(latin1StringToBytes(window.atob(padded))));
  }

  function configuredClientId() {
    const clientId = getConfig().googleClientId.trim();
    if (!clientId) return "";
    if (clientId.includes("YOUR_GOOGLE_CLIENT_ID")) return "";
    return clientId;
  }

  function matchesAllowedDomain(email, allowedDomains) {
    if (!Array.isArray(allowedDomains) || !allowedDomains.length) return true;
    const domain = String(email || "")
      .split("@")
      .pop()
      .toLowerCase();
    return allowedDomains.some((allowed) => String(allowed).toLowerCase() === domain);
  }

  function isAdminSession(session = getSession()) {
    const email = String(session?.email || "").toLowerCase();
    if (!email) return false;
    return getConfig().adminEmails.some((adminEmail) => String(adminEmail).toLowerCase() === email);
  }

  function ensureChromeStyles() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
      .auth-chrome {
        position: fixed !important;
        inset: 18px 18px auto auto !important;
        right: 18px !important;
        top: 18px !important;
        bottom: auto !important;
        left: auto !important;
        z-index: 90;
        display: flex;
        align-items: center;
        gap: 10px;
        width: auto !important;
        max-width: calc(100vw - 36px);
        margin: 0 !important;
        transform: none !important;
        border: 0;
        background: transparent;
        color: #2d2734;
        box-shadow: none;
        backdrop-filter: none;
        overflow: visible;
      }

      .auth-chrome::before {
        display: none;
      }

      .auth-logout-button {
        appearance: none;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 42px;
        border: 1px solid rgba(157, 129, 78, 0.28);
        border-radius: 999px;
        padding: 0 18px;
        background: #243454;
        color: #fffdf7;
        cursor: pointer;
        box-shadow: 0 12px 24px rgba(36, 52, 84, 0.2);
        font: 800 14px/1 "Noto Sans TC", "Microsoft JhengHei", sans-serif;
      }

      .auth-admin-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 42px;
        border: 1px solid rgba(157, 129, 78, 0.28);
        border-radius: 999px;
        padding: 0 18px;
        background: rgba(255, 252, 246, 0.92);
        color: #243454;
        box-shadow: 0 12px 24px rgba(36, 52, 84, 0.1);
        text-decoration: none;
        font: 800 14px/1 "Noto Sans TC", "Microsoft JhengHei", sans-serif;
      }

      .auth-logout-button:hover,
      .auth-logout-button:focus-visible,
      .auth-admin-button:hover,
      .auth-admin-button:focus-visible {
        transform: translateY(-1px);
        outline: 2px solid rgba(242, 212, 145, 0.48);
        outline-offset: 3px;
      }

      .auth-chrome-inner {
        display: grid;
        gap: 14px;
        padding: 14px 14px 16px;
      }

      .auth-chrome-top {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 12px;
        align-items: center;
      }

      .auth-chrome-avatar {
        width: 42px;
        height: 42px;
        border-radius: 50%;
        overflow: hidden;
        border: 1px solid rgba(157, 129, 78, 0.28);
        background: linear-gradient(135deg, rgba(129, 155, 200, 0.18), rgba(242, 212, 145, 0.36));
      }

      .auth-chrome-avatar img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }

      .auth-chrome-avatar span {
        display: grid;
        width: 100%;
        height: 100%;
        place-items: center;
        font: 700 15px/1 "Noto Sans TC", "Microsoft JhengHei", sans-serif;
        color: #2d2734;
      }

      .auth-chrome-copy {
        min-width: 0;
      }

      .auth-chrome-kicker {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        margin-bottom: 6px;
        border: 1px solid rgba(157, 129, 78, 0.22);
        border-radius: 999px;
        padding: 3px 8px;
        background: rgba(255, 247, 232, 0.92);
        color: #7a6454;
        font: 700 11px/1 "Noto Sans TC", "Microsoft JhengHei", sans-serif;
      }

      .auth-chrome-name {
        display: block;
        margin: 0 0 2px;
        font: 800 15px/1.3 "Noto Sans TC", "Microsoft JhengHei", sans-serif;
      }

      .auth-chrome-email {
        margin: 0;
        color: #6c6372;
        font: 500 12px/1.45 "Noto Sans TC", "Microsoft JhengHei", sans-serif;
        overflow-wrap: anywhere;
      }

      .auth-chrome-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }

      .auth-chrome-actions button,
      .auth-chrome-actions a {
        appearance: none;
        border: 1px solid rgba(157, 129, 78, 0.22);
        border-radius: 999px;
        padding: 8px 12px;
        background: rgba(255, 252, 246, 0.92);
        color: #2d2734;
        text-decoration: none;
        cursor: pointer;
        font: 700 12px/1 "Noto Sans TC", "Microsoft JhengHei", sans-serif;
      }

      .auth-chrome-actions button:hover,
      .auth-chrome-actions a:hover {
        transform: translateY(-1px);
      }

      .auth-chrome-actions .auth-chrome-primary {
        background: #243454;
        border-color: #243454;
        color: #fffdf7;
      }

      .auth-chrome.is-nav-aligned {
        inset: var(--auth-anchor-top, 18px) auto auto var(--auth-anchor-left, auto) !important;
        right: auto !important;
        top: var(--auth-anchor-top, 18px) !important;
        left: var(--auth-anchor-left, auto) !important;
        width: min(200px, calc(100vw - 24px)) !important;
        max-width: calc(100vw - 24px);
        border-color: rgba(157, 129, 78, 0.3);
        box-shadow: 0 14px 26px rgba(78, 66, 56, 0.14);
      }

      .auth-chrome.is-nav-aligned::before {
        height: 3px;
      }

      .auth-chrome.is-nav-aligned .auth-chrome-inner {
        gap: 8px;
        padding: 8px 9px 9px;
      }

      .auth-chrome.is-nav-aligned .auth-chrome-top {
        grid-template-columns: 30px minmax(0, 1fr);
        gap: 8px;
      }

      .auth-chrome.is-nav-aligned .auth-chrome-avatar {
        width: 30px;
        height: 30px;
      }

      .auth-chrome.is-nav-aligned .auth-chrome-kicker {
        margin-bottom: 3px;
        padding: 2px 6px;
        font-size: 10px;
      }

      .auth-chrome.is-nav-aligned .auth-chrome-name {
        font-size: 13px;
        line-height: 1.25;
      }

      .auth-chrome.is-nav-aligned .auth-chrome-email {
        display: none;
      }

      .auth-chrome.is-nav-aligned .auth-chrome-actions {
        flex-wrap: nowrap;
        gap: 7px;
      }

      .auth-chrome.is-nav-aligned .auth-chrome-actions button,
      .auth-chrome.is-nav-aligned .auth-chrome-actions a {
        min-height: 28px;
        padding: 0 8px;
        font-size: 11px;
      }

      @media (max-width: 720px) {
        .auth-chrome {
          inset: 12px 12px auto auto !important;
          right: 12px !important;
          top: 12px !important;
          bottom: auto !important;
          left: auto !important;
          width: auto !important;
          max-width: calc(100vw - 24px);
        }

        .auth-logout-button {
          min-height: 40px;
          padding: 0 16px;
        }

        .auth-admin-button {
          min-height: 40px;
          padding: 0 16px;
        }
      }
    `;
    document.head.append(style);
  }

  function ensureBrandStyles() {
    if (document.getElementById(BRAND_STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = BRAND_STYLE_ID;
    style.textContent = `
      .brand-constellation {
        position: relative;
        width: min(1180px, calc(100vw - 40px));
        margin: 18px auto 0;
        border: 1px solid rgba(157, 129, 78, 0.2);
        border-radius: 8px;
        background:
          linear-gradient(180deg, rgba(255, 255, 255, 0.82), rgba(255, 251, 244, 0.94)),
          rgba(255, 248, 237, 0.92);
        box-shadow: 0 18px 34px rgba(78, 66, 56, 0.08);
        overflow: hidden;
      }

      .brand-constellation::before {
        position: absolute;
        inset: 0;
        content: "";
        background:
          linear-gradient(180deg, rgba(255, 255, 255, 0.28), rgba(255, 255, 255, 0) 42%),
          radial-gradient(circle at 12% 16%, rgba(129, 155, 200, 0.18), transparent 18%),
          radial-gradient(circle at 86% 18%, rgba(242, 212, 145, 0.18), transparent 18%),
          var(--bg-stars, none) center top / 680px 680px repeat;
        opacity: 0.64;
        pointer-events: none;
      }

      .brand-constellation-head,
      .brand-constellation-grid {
        position: relative;
        z-index: 1;
      }

      .brand-constellation-head {
        display: grid;
        gap: 6px;
        padding: 16px 18px 0;
      }

      .brand-constellation-head span {
        color: #907661;
        font: 800 11px/1 "Noto Sans TC", "Microsoft JhengHei", sans-serif;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }

      .brand-constellation-head strong {
        color: #2d2734;
        font: 800 16px/1.3 "Noto Sans TC", "Microsoft JhengHei", sans-serif;
      }

      .brand-constellation-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 14px;
        padding: 14px 18px 18px;
      }

      .brand-constellation-card {
        display: grid;
        gap: 12px;
        min-height: 152px;
        border: 1px solid rgba(157, 129, 78, 0.16);
        border-radius: 8px;
        padding: 14px;
        background:
          linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(255, 252, 246, 0.94)),
          rgba(255, 248, 237, 0.92);
        text-decoration: none;
        transition:
          transform 180ms ease,
          box-shadow 180ms ease,
          border-color 180ms ease;
      }

      .brand-constellation-card:hover,
      .brand-constellation-card:focus-visible {
        transform: translateY(-2px);
        border-color: rgba(109, 102, 119, 0.28);
        box-shadow: 0 16px 30px rgba(78, 66, 56, 0.1);
        outline: none;
      }

      .brand-constellation-logo {
        display: grid;
        place-items: center;
        min-height: 74px;
        border: 1px solid rgba(157, 129, 78, 0.14);
        border-radius: 8px;
        padding: 10px 12px;
        background: rgba(255, 255, 255, 0.94);
        overflow: hidden;
      }

      .brand-constellation-logo img {
        display: block;
        max-width: 100%;
        max-height: 54px;
        width: auto;
        height: auto;
      }

      .brand-constellation-logo.is-mark img {
        max-height: 52px;
      }

      .brand-constellation-logo.is-panjit img {
        max-height: 48px;
      }

      .brand-constellation-copy {
        display: grid;
        gap: 4px;
      }

      .brand-constellation-copy strong {
        color: #2d2734;
        font: 800 15px/1.35 "Noto Sans TC", "Microsoft JhengHei", sans-serif;
      }

      .brand-constellation-copy small {
        color: #6c6372;
        font: 600 12px/1.45 "Noto Sans TC", "Microsoft JhengHei", sans-serif;
      }

      @media (max-width: 760px) {
        .brand-constellation {
          width: calc(100vw - 28px);
          margin-top: 14px;
        }

        .brand-constellation-grid {
          grid-template-columns: 1fr;
          padding: 12px 14px 14px;
        }

        .brand-constellation-head {
          padding: 14px 14px 0;
        }
      }
    `;
    document.head.append(style);
  }

  function ensureAuthorStyles() {
    if (document.getElementById(AUTHOR_STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = AUTHOR_STYLE_ID;
    style.textContent = `
      .author-signature {
        position: fixed;
        right: 16px;
        bottom: 14px;
        z-index: 85;
        display: inline-flex;
        align-items: center;
        min-height: 30px;
        border: 1px solid rgba(157, 129, 78, 0.24);
        border-radius: 999px;
        padding: 0 12px;
        background: rgba(255, 252, 246, 0.88);
        color: #5f514a;
        box-shadow: 0 10px 22px rgba(78, 66, 56, 0.1);
        backdrop-filter: blur(10px);
        pointer-events: none;
        font: 800 12px/1 "Noto Sans TC", "Microsoft JhengHei", sans-serif;
      }

      .legal-disclaimer-link {
        position: fixed;
        left: 16px;
        bottom: 14px;
        z-index: 85;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 30px;
        border: 1px solid rgba(157, 129, 78, 0.24);
        border-radius: 999px;
        padding: 0 12px;
        background: rgba(255, 252, 246, 0.88);
        color: #5f514a;
        box-shadow: 0 10px 22px rgba(78, 66, 56, 0.1);
        backdrop-filter: blur(10px);
        text-decoration: none;
        font: 800 12px/1 "Noto Sans TC", "Microsoft JhengHei", sans-serif;
      }

      .legal-disclaimer-link:hover,
      .legal-disclaimer-link:focus-visible {
        transform: translateY(-1px);
        outline: 2px solid rgba(242, 212, 145, 0.48);
        outline-offset: 3px;
      }

      @media (max-width: 720px) {
        .author-signature {
          position: static;
          margin: 10px 12px 12px;
          min-height: 28px;
          padding: 0 10px;
          font-size: 11px;
        }

        .legal-disclaimer-link {
          position: static;
          margin: 10px 0 12px 12px;
          min-height: 28px;
          padding: 0 10px;
          font-size: 11px;
        }
      }
    `;
    document.head.append(style);
  }

  function mainContentRoot() {
    return document.querySelector("body > main") || document.querySelector("main") || document.body;
  }

  function mountBrandConstellation() {
    const config = getConfig();
    if (window.location.pathname === config.loginPath) return;
    if (document.querySelector("[data-brand-constellation]")) return;

    const root = mainContentRoot();
    if (!root) return;

    ensureBrandStyles();

    const brandRail = document.createElement("section");
    brandRail.className = "brand-constellation";
    brandRail.dataset.brandConstellation = "true";
    brandRail.setAttribute("aria-label", "合作品牌");
    brandRail.innerHTML = `
      <div class="brand-constellation-head">
        <span>Brand Constellation</span>
        <strong>智合科技、強合智慧、強茂集團</strong>
      </div>
      <div class="brand-constellation-grid">
        ${BRAND_ITEMS.map(
          (item) => `
            <a class="brand-constellation-card" href="${item.href}" target="_blank" rel="noreferrer">
              <span class="brand-constellation-logo ${item.logoClass}">
                <img src="${item.logo}" alt="${item.name} Logo" />
              </span>
              <span class="brand-constellation-copy">
                <strong>${item.name}</strong>
                <small>${item.note}</small>
              </span>
            </a>
          `
        ).join("")}
      </div>
    `;

    root.prepend(brandRail);
  }

  function mountSessionChrome() {
    const config = getConfig();
    if (window.location.pathname === config.loginPath) return;
    const session = getSession();
    if (!session || document.querySelector("[data-auth-chrome]")) return;

    ensureChromeStyles();

    const chrome = document.createElement("aside");
    chrome.className = "auth-chrome";
    chrome.dataset.authChrome = "true";
    chrome.innerHTML = `
      ${isAdminSession(session) ? '<a class="auth-admin-button" href="/admin.html">後台管理</a>' : ""}
      <button class="auth-logout-button" type="button" data-auth-logout>登出</button>
    `;

    chrome.querySelector("[data-auth-logout]")?.addEventListener("click", () => {
      clearSession();
      if (window.google?.accounts?.id?.disableAutoSelect) {
        window.google.accounts.id.disableAutoSelect();
      }
      redirectToLogin("logged-out");
    });

    document.body.append(chrome);
    recordActivity("page_view");
  }

  function mountAuthorSignature() {
    if (document.querySelector("[data-author-signature]")) return;
    ensureAuthorStyles();
    const signature = document.createElement("div");
    signature.className = "author-signature";
    signature.dataset.authorSignature = "true";
    signature.textContent = "作者:AKEN";
    document.body.append(signature);
  }

  function mountLegalDisclaimerLink() {
    if (document.querySelector("[data-legal-disclaimer]")) return;
    ensureAuthorStyles();
    const link = document.createElement("a");
    link.className = "legal-disclaimer-link";
    link.dataset.legalDisclaimer = "true";
    link.href = "/disclaimer.html";
    link.textContent = "免責宣言";
    document.body.append(link);
  }

  function autoMountSharedUi() {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => {
        mountAuthorSignature();
        mountLegalDisclaimerLink();
        mountBrandConstellation();
        mountSessionChrome();
      }, { once: true });
      return;
    }
    mountAuthorSignature();
    mountLegalDisclaimerLink();
    mountBrandConstellation();
    mountSessionChrome();
  }

  window.VibeAuth = {
    getConfig,
    getPortals,
    getPortal,
    getSession,
    saveSession,
    clearSession,
    requireAuth,
    decodeCredential,
    configuredClientId,
    matchesAllowedDomain,
    isAdminSession,
    normalizeReturnTo,
    recordActivity,
    sessionCredential,
    mountAuthorSignature,
    mountLegalDisclaimerLink,
    mountBrandConstellation,
    mountSessionChrome,
  };

  autoMountSharedUi();
})();

/* ============================================================
   Shared layout partials — injects nav, footer, loader, toaster.
   Loaded before main.js on every page so initNav() can wire it up.
   ============================================================ */

(function injectPartials() {
  const navHTML = `
  <header class="nav" role="banner">
    <div class="container nav-inner">
      <a href="index.html" class="brand">
        <span class="brand-mark">☕</span>
        <span>Code <em style="font-style:normal;color:var(--gold-dark)">with</em> Coffee</span>
      </a>
      <nav class="nav-links" aria-label="Primary">
        <a href="index.html">Home</a>
        <a href="menu.html">Menu</a>
        <a href="admin.html">Staff</a>
        <a href="about.html">About</a>
        <a href="contact.html">Contact</a>
        <a href="faq.html">FAQ</a>
      </nav>
      <div class="nav-actions">
        <span class="table-marker" data-table-marker style="display:none"></span>
        <button class="icon-btn" data-theme-toggle aria-label="Toggle theme">
          <span data-theme-icon>🌙</span>
        </button>
        <a class="icon-btn" href="cart.html" aria-label="Cart">
          🛒
          <span class="cart-badge" data-cart-count style="display:none">0</span>
        </a>
        <a class="icon-btn" href="login.html" aria-label="Account">👤</a>
        <button class="icon-btn hamburger" aria-label="Menu">☰</button>
      </div>
    </div>
  </header>`;

  const footerHTML = `
  <footer class="footer" role="contentinfo">
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="brand" style="color:var(--cream-50); margin-bottom: 1rem">
            <span class="brand-mark">☕</span>
            <span>Code with Coffee</span>
          </div>
          <p>Where every cup tells a story. Premium beans, handcrafted drinks, and a cozy place to work, read, and unwind.</p>
          <div class="social" aria-label="Social links">
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="Twitter">X</a>
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="YouTube">▶</a>
          </div>
        </div>
        <div>
          <h4>Explore</h4>
          <a href="index.html">Home</a>
          <a href="menu.html">Menu</a>
          <a href="about.html">About</a>
          <a href="contact.html">Contact</a>
        </div>
        <div>
          <h4>Account</h4>
          <a href="login.html">Login</a>
          <a href="signup.html">Sign up</a>
          <a href="dashboard.html">Dashboard</a>
          <a href="admin.html">Staff portal</a>
          <a href="cart.html">Cart</a>
        </div>
        <div>
          <h4>Support</h4>
          <a href="faq.html">FAQ</a>
          <a href="privacy.html">Privacy Policy</a>
          <a href="terms.html">Terms &amp; Conditions</a>
          <a href="contact.html">Contact Us</a>
        </div>
      </div>
      <div class="footer-bottom">© <span id="yr"></span> Code with Coffee. Crafted with ♥ and caffeine.</div>
    </div>
  </footer>`;

  const loaderHTML = `
  <div id="pageLoader" class="page-loader" aria-hidden="true">
    <div style="position:relative">
      <div class="cup-loader">
        <div class="steam"><span></span><span></span><span></span></div>
      </div>
      <div class="loader-text">BREWING…</div>
    </div>
  </div>`;

  const toTopHTML = `<button class="to-top" aria-label="Back to top">↑</button>`;

  // Inject nav + loader immediately (at top of body, before page content parses)
  document.body.insertAdjacentHTML('afterbegin', loaderHTML + navHTML);

  // Footer + to-top + toast host MUST wait until the body is fully parsed,
  // otherwise they get appended before the page's own content finishes parsing
  // and visually render above the hero.
  function appendChrome() {
    document.body.insertAdjacentHTML('beforeend', footerHTML + toTopHTML + `<div class="toast-host"></div>`);
    const yr = document.getElementById('yr'); if (yr) yr.textContent = new Date().getFullYear();
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', appendChrome);
  } else {
    appendChrome();
  }
})();

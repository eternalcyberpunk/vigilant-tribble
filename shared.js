// Shared header/footer for all CCNRC pages
document.addEventListener('DOMContentLoaded', function() {
  const currentPage = document.body.dataset.page || '';

  // Real booking URL from the existing site
  const BOOKING_URL = 'https://www.timecenter.com/ccc/';
  const PHONE = '9096039200';
  const PHONE_DISPLAY = '(909) 603-9200';
  const EMAIL = 'info@claremontcoloniccenter.com';

  const header = `
    <div class="top-bar">
      <strong>Discount Wednesdays</strong> · Colonic session only $65 for new clients · Text <a href="tel:${PHONE}">${PHONE_DISPLAY}</a>
    </div>
    <header class="header">
      <nav class="nav">
        <div class="nav-links">
          <a href="services.html" ${currentPage === 'services' || currentPage === 'service' ? 'class="active"' : ''}>Services</a>
          <a href="specials.html" ${currentPage === 'specials' ? 'class="active"' : ''}>Specials</a>
          <a href="resources.html" ${currentPage === 'resources' ? 'class="active"' : ''}>Resources</a>
        </div>
        <a href="index.html" class="logo">
          Claremont <em>Colonic</em>
          <span class="sub">& Nutrient Resource Clinic</span>
        </a>
        <div class="nav-right">
          <div class="nav-links">
            <a href="about.html" ${currentPage === 'about' ? 'class="active"' : ''}>About</a>
            <a href="contact.html" ${currentPage === 'contact' ? 'class="active"' : ''}>Contact</a>
          </div>
          <a href="${BOOKING_URL}" target="_blank" rel="noopener" class="cta-small">Book Appointment</a>
          <button class="mobile-menu-btn" aria-label="Open menu" aria-expanded="false">Menu</button>
        </div>
      </nav>
    </header>

    <!-- Mobile drawer -->
    <div class="mobile-drawer" aria-hidden="true">
      <div class="mobile-drawer-scrim"></div>
      <div class="mobile-drawer-inner">
        <div class="mobile-drawer-head">
          <div class="logo">
            Claremont <em>Colonic</em>
            <span class="sub">& Nutrient Resource Clinic</span>
          </div>
          <button class="mobile-close-btn" aria-label="Close menu">Close</button>
        </div>
        <nav class="mobile-drawer-links">
          <a href="index.html" ${currentPage === 'home' ? 'class="active"' : ''}>Home</a>
          <a href="services.html" ${currentPage === 'services' || currentPage === 'service' ? 'class="active"' : ''}>Services</a>
          <a href="specials.html" ${currentPage === 'specials' ? 'class="active"' : ''}>Specials</a>
          <a href="resources.html" ${currentPage === 'resources' ? 'class="active"' : ''}>Resources</a>
          <a href="about.html" ${currentPage === 'about' ? 'class="active"' : ''}>About</a>
          <a href="faq.html" ${currentPage === 'faq' ? 'class="active"' : ''}>FAQ</a>
          <a href="contact.html" ${currentPage === 'contact' ? 'class="active"' : ''}>Contact</a>
        </nav>
        <div class="mobile-drawer-foot">
          <a href="${BOOKING_URL}" target="_blank" rel="noopener" class="cta cta-primary">Book Appointment</a>
          <p class="mobile-drawer-contact">
            Call <a href="tel:${PHONE}">${PHONE_DISPLAY}</a><br>
            <a href="mailto:${EMAIL}">${EMAIL}</a>
          </p>
        </div>
      </div>
    </div>
  `;

  const footer = `
    <footer>
      <div class="foot-grid">
        <div class="foot-brand">
          <div class="logo-wrap">
            Claremont <em>Colonic</em>
            <span class="sub">& Nutrient Resource Clinic</span>
          </div>
          <p>A natural health clinic on Indian Hill Boulevard specializing in colon hydrotherapy and whole-body detoxification since our founding.</p>
        </div>
        <div class="foot-col">
          <h5>Visit</h5>
          <p>370 N. Indian Hill Blvd<br>Claremont, CA 91711</p>
          <a href="https://goo.gl/maps/aAfPoTmTiQC4F2or7" target="_blank" rel="noopener">Get directions →</a>
        </div>
        <div class="foot-col">
          <h5>Hours</h5>
          <p>Mon · 12–6<br>Tues · 9–6<br>Wed · 9–7<br>Thurs–Fri · 9–6<br>Sat · 9–2<br>Sun · Closed</p>
        </div>
        <div class="foot-col">
          <h5>Explore</h5>
          <a href="services.html">Services & prices</a>
          <a href="specials.html">Specials</a>
          <a href="resources.html">Wellness resources</a>
          <a href="faq.html">FAQ</a>
          <a href="contact.html">Contact</a>
        </div>
      </div>
      <div class="foot-bottom">
        <span>© 2026 Claremont Colonic & Nutrient Resource Clinic · All rights reserved</span>
        <span class="foot-iact">Certified member, International Association of Colon Hydrotherapists (I-ACT)</span>
      </div>
    </footer>
  `;

  const headerMount = document.getElementById('site-header');
  const footerMount = document.getElementById('site-footer');
  if (headerMount) headerMount.innerHTML = header;
  if (footerMount) footerMount.innerHTML = footer;

  // Mobile drawer wiring
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const drawer = document.querySelector('.mobile-drawer');
  const closeBtn = document.querySelector('.mobile-close-btn');
  const scrim = document.querySelector('.mobile-drawer-scrim');
  const drawerLinks = document.querySelectorAll('.mobile-drawer-links a, .mobile-drawer-foot a');

  function openDrawer() {
    if (!drawer) return;
    drawer.classList.add('is-open');
    drawer.setAttribute('aria-hidden', 'false');
    if (menuBtn) menuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove('is-open');
    drawer.setAttribute('aria-hidden', 'true');
    if (menuBtn) menuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (menuBtn) menuBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (scrim) scrim.addEventListener('click', closeDrawer);
  drawerLinks.forEach(a => a.addEventListener('click', closeDrawer));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDrawer(); });

  // Rewrite any remaining "#" book/schedule CTAs to the real booking URL
  document.querySelectorAll('a.cta.cta-primary, a.cta.cta-dark, a.cta.cta-outline').forEach(a => {
    const href = a.getAttribute('href');
    const text = (a.textContent || '').toLowerCase();
    const looksLikeBooking = text.includes('book') || text.includes('schedule') || text.includes('appointment');
    if (href === '#' && looksLikeBooking) {
      a.setAttribute('href', BOOKING_URL);
      a.setAttribute('target', '_blank');
      a.setAttribute('rel', 'noopener');
    }
  });
});

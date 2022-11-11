(() => {
    const headerTemplate = document.createElement('template');
  
    headerTemplate.innerHTML = `
    <nav class="navbar navbar-dark navbar-expand-sm bg-primary sticky-top">
      <div class="container-fluid">
        <div class="navbar-brand">
            <a href="index.html"><img src="img/GGD.webp" alt="" width="24" height="24" class="d-inline-block align-text-top"></a>
            <b><slot>Grey Ghost Division</slot></b>
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link" href="#about-us" id="about-us-nav">About Us</a>
            <a class="nav-link" href="prospect.html">Join Us</a>
            <a class="nav-link" href="cadets.html">Cadet Portal</a>
          </div>
        </div>
      </div>
    </nav>
    `;
    class Header extends HTMLElement {
      constructor() {
        super();
      }
  
      connectedCallback() {
        this.innerHTML = headerTemplate.innerHTML;
        const navLinks = document.querySelectorAll('.nav-link');
        const menuToggle = document.getElementById('navbarNavAltMarkup');
        const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false});
        navLinks.forEach((l) => {
            l.addEventListener('click', () => { bsCollapse.toggle() });
        })
      }
    }
  
    customElements.define('header-component', Header);

  })();
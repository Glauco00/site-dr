class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
    this.handleLinkClick = this.handleLinkClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
    });
  }

  removeAnimations() {
    this.navLinks.forEach((link) => {
      link.style.animation = ""; // Remove a animação quando o menu for fechado
    });
  }

  toggleBodyScroll(enable) {
    if (enable) {
      document.body.style.overflow = ""; // Reativa a rolagem
    } else {
      document.body.style.overflow = "hidden"; // Desativa a rolagem
    }
  }

  handleClick() {
    const isActive = this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.toggleBodyScroll(!isActive);

    if (isActive) {
      this.animateLinks();
    } else {
      this.removeAnimations();
    }
  }

  handleLinkClick() {
    this.navList.classList.remove(this.activeClass);
    this.mobileMenu.classList.remove(this.activeClass);
    this.removeAnimations();
    this.toggleBodyScroll(true);
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
    this.navLinks.forEach((link) => {
      link.addEventListener("click", this.handleLinkClick);
    });
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);
mobileNavbar.init();

class Navbar extends HTMLElement {
  constructor() {
    super();
    this.lastScrollY = window.scrollY;
    this.navbar = null;
    this.logo = null;
    this.startBtn = null;
    this.isScrollingDown = false;
    this.linkColor = null;
    this.smallLogo = null;
    this.logoSvg = null;
  }

  connectedCallback() {
    const homeLink = this.getAttribute("home") || "#";
    const aboutLink = this.getAttribute("about") || "#";
    const contactLink = this.getAttribute("contact") || "#";

    this.innerHTML = `
      <nav class="navbar transition-all duration-500 2xl:px-20 px-8 lg:block hidden fixed top-0 left-0 w-full z-50">
        <div class="flex justify-between items-center py-3 px-10 max-w-[1920px] w-full mx-auto">
          <a href="${homeLink}" class=" font-bold logo-container flex items-center gap-3 link-color">
            <img src="../../assets/images/big_logo.svg" alt="logo" class="logo big-logo opacity-90 w-[240px] cursor-pointer transition-all duration-500" />
            <img id="logoSvg" src="../../assets/images/white_logo.svg" alt="logo" class="logo small-logo  md:w-[240px] w-[200px] cursor-pointer transition-all duration-500" />
          </a>
          <ul class="flex gap-14 items-center">
            <li class="relative group">
              <a class="collapsed-link link-color">Services</a>
              <ul class="dropdown-menu">
                <li><a href="#" class="nav-link">Patios</a></li>
                <li><a href="#" class="nav-link">Swimming Pools</a></li>
                <li><a href="#" class="nav-link">Decks</a></li>
                <li><a href="#" class="nav-link">Outdoor Kitchens</a></li>
                <li><a href="#" class="nav-link">Outdoor Fireplaces</a></li>
              </ul>
            </li>
            <li><a href="${aboutLink}" class="nav-link link-color">Project</a></li>
            <li><a href="${contactLink}" class="nav-link link-color">Process</a></li>
            <li>
              <a href="${contactLink}" class="2xl:text-[18px] xl:text-[14px] text-[13.6px] font-bold uppercase tracking-[2px] start-btn transition-colors duration-200 text-white 2xl:py-[11px] 2xl:px-[20px] xl:py-[9px] xl:px-[15px] px-[10px] py-[8px]">Get Started</a>
            </li>
          </ul>
        </div>
      </nav>
    `;

    this.navbar = document.querySelector(".navbar");
    this.logo = document.querySelector(".logo");
    this.startBtn = document.querySelector(".start-btn");
    this.linkColor = document.querySelectorAll(".link-color");
    this.smallLogo = document.querySelector(".small-logo");
    this.logoSvg = document.querySelector("#logoSvg");

    window.addEventListener("scroll", () => this.handleScroll());
  }

  handleScroll() {
    const currentScrollY = window.scrollY;
    const sectionBelow = this.getSectionBelowNavbar();
    const isBrownSection = sectionBelow
      .hasAttribute("id")
      .valueOf("what_we_do");
    if (sectionBelow) {
      const computedStyle = window.getComputedStyle(sectionBelow);
      const bgColor = computedStyle.backgroundColor;
      if (isBrownSection) {
        this.smallLogo.classList.add("stroke-white");
        this.linkColor.forEach((link) => {
          link.classList.add("links-nav-color-scroll");
        });
        this.logoSvg.src = "../../assets/images/new_white_logo.svg";
      } else {
        this.linkColor.forEach((link) => {
          link.classList.remove("links-nav-color-scroll");
        });
        this.smallLogo.src = "../../assets/images/white_logo.svg";
      }
      if (
        bgColor &&
        bgColor !== "rgba(0, 0, 0, 0)" &&
        bgColor !== "transparent"
      ) {
        this.navbar.style.backgroundColor = bgColor;
      } else {
        this.navbar.style.backgroundColor = ""; // Keep default color
      }
    }

    if (currentScrollY > this.lastScrollY) {
      // Scrolling Down
      if (!this.isScrollingDown && currentScrollY > 100) {
        this.isScrollingDown = true;
        this.navbar.classList.add("move-up");

        setTimeout(() => {
          this.navbar.classList.remove("move-up");
          this.navbar.classList.add("scrolled");
          this.logo.classList.add("small-logo");
          this.smallLogo.classList.add("show-small-logo");
          this.startBtn.classList.add("start-btn-scrolled");
        }, 300);
      }
    } else {
      // Scrolling Up
      if (this.isScrollingDown && currentScrollY < 100) {
        this.isScrollingDown = false;
        this.navbar.classList.remove("scrolled");
        this.logo.classList.remove("small-logo");
        this.smallLogo.classList.remove("show-small-logo");
        this.startBtn.classList.remove("start-btn-scrolled");
      }
    }

    this.lastScrollY = currentScrollY;
  }

  getSectionBelowNavbar() {
    const sections = document.querySelectorAll("section");
    for (const section of sections) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 60 && rect.bottom >= 60) {
        return section;
      }
    }
    return null;
  }
}

customElements.define("main-navbar", Navbar);
// <img src="../../assets/images/outdoor_icon.png" alt="Menu" class="logo xl:w-[48px] w-[45px] cursor-pointer transition-all duration-500" />
// <span class="2xl:text-[18px] xl:text-[14px] text-[13.6px] tracking-[4px] uppercase">OUTDOOR DREAMS</span>

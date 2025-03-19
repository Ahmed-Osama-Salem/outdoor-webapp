class Navbar extends HTMLElement {
  constructor() {
    super();
    this.lastScrollY = window.scrollY;
    this.navbar = null;
    this.logo = null;
    this.startBtn = null;
    this.isScrollingDown = false;
  }

  connectedCallback() {
    const homeLink = this.getAttribute("home") || "#";
    const aboutLink = this.getAttribute("about") || "#";
    const contactLink = this.getAttribute("contact") || "#";

    this.innerHTML = `
      <nav class="navbar transition-all duration-500 px-20 lg:block hidden">
        <div class="flex justify-between items-center p-4 max-w-[1920px] w-full mx-auto">
          <a href="${homeLink}" class="text-xl font-bold flex items-center gap-4">
            <img src="../../assets/images/outdoor_icon.png" alt="Menu" class="logo cursor-pointer transition-all duration-500" />
            <span class="text-[18px] tracking-[4px] uppercase">OUTDOOR DREAMS</span>
             
          </a>
          <ul class="flex gap-14">
            <li class="relative group">
              <a class="collapsed-link">Services</a>
              <ul class="dropdown-menu">
                <li><a href="#" class="nav-link">Patios</a></li>
                <li><a href="#" class="nav-link">Swimming Pools</a></li>
                <li><a href="#" class="nav-link">Decks</a></li>
                <li><a href="#" class="nav-link">Outdoor Kitchens</a></li>
                <li><a href="#" class="nav-link">Outdoor Fireplaces</a></li>
              </ul>
            </li>
            <li><a href="${aboutLink}" class="nav-link">Project</a></li>
            <li><a href="${contactLink}" class="nav-link">Process</a></li>
            <li>
              <a href="${contactLink}" class="text-[18px] font-bold uppercase tracking-[2px] start-btn transition-colors duration-200 text-white py-[11px] px-[20px]">Get Started</a>
            </li>
          </ul>
        </div>
      </nav>
    `;

    this.navbar = document.querySelector(".navbar");
    this.logo = document.querySelector(".logo");
    this.startBtn = document.querySelector(".start-btn");

    window.addEventListener("scroll", () => this.handleScroll());
  }

  handleScroll() {
    const currentScrollY = window.scrollY;

    if (currentScrollY > this.lastScrollY) {
      // Scrolling Down
      if (!this.isScrollingDown && currentScrollY > 100) {
        this.isScrollingDown = true;
        this.navbar.classList.add("move-up");

        setTimeout(() => {
          this.navbar.classList.remove("move-up");
          this.navbar.classList.add("scrolled");
          this.logo.classList.add("small-logo");
          this.startBtn.classList.add("start-btn-scrolled");
        }, 300);
      }
    } else {
      // Scrolling Up
      if (this.isScrollingDown && currentScrollY < 100) {
        this.isScrollingDown = false;
        this.navbar.classList.remove("scrolled");
        this.navbar.classList.add("original");
        this.logo.classList.remove("small-logo");
        this.startBtn.classList.remove("start-btn-scrolled");
      }
    }

    this.lastScrollY = currentScrollY;
  }
}

customElements.define("main-navbar", Navbar);

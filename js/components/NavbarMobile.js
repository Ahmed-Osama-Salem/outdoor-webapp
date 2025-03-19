class NavbarMobile extends HTMLElement {
  connectedCallback() {
    const homeLink = this.getAttribute("home") || "#";
    const aboutLink = this.getAttribute("about") || "#";
    const contactLink = this.getAttribute("contact") || "#";

    this.innerHTML = `
      <nav class="text-[var(--color-secondary-500)] !font-Montserrat py-1 fixed top-0 left-0 w-full z-50 bg-[var(--color-background)] transition-all duration-500 lg:hidden block px-6">
        <div class="flex justify-between items-center max-w-[1920px] w-full mx-auto">
          <a href="${homeLink}" class="text-xl font-bold flex items-center gap-4">
            <div>
              <img src="../../assets/images/logo.svg" alt="logo" class="cursor-pointer transition-all duration-500 w-[240px] h-[50px]" />
            </div>
          </a>
          <ul class="flex gap-14">
            <li>
              <button id="hamburger-btn" class="bg-[var(--color-blue-500)] rounded-full h-[40px] w-[40px] p-2 focus:outline-none">
                <span class="block w-6 h-[2.5px] bg-white rounded-full mb-1"></span>
                <span class="block w-6 h-[2.5px] bg-white rounded-full mb-1"></span>
                <span class="block w-6 h-[2.5px] bg-white rounded-full"></span>
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <!-- Fullscreen Menu with Fade Animation -->
      <div id="mobile-menu" class="fixed !font-Montserrat top-0 left-0 w-full h-screen bg-[var(--color-background)] flex flex-col items-center justify-center gap-8 text-2xl font-semibold text-[var(--color-secondary-500)] transition-all duration-500 transform -translate-y-full opacity-0 z-50">
        <button id="close-btn" class="absolute top-5 right-5 text-black text-5xl">&times;</button>

         <a href="${aboutLink}" class="relative text-[25px] font-bold uppercase tracking-[2px]  transition-colors duration-300">Services</a>
         <a href="${aboutLink}" class="relative text-[25px] font-bold uppercase tracking-[2px]  transition-colors duration-300">Project</a>
            <a href="${contactLink}" class="relative text-[25px] font-bold uppercase tracking-[2px]  transition-colors duration-300">Process</a>
            
              <a href="${contactLink}" class="text-[22px] font-bold uppercase tracking-[2px] start-btn-scrolled transition-colors duration-200 text-white py-[4px] px-[20px]">Get Started</a>
            
      </div>
    `;

    // JavaScript for opening and closing the menu with fade effect
    const hamburgerBtn = this.querySelector("#hamburger-btn");
    const mobileMenu = this.querySelector("#mobile-menu");
    const closeBtn = this.querySelector("#close-btn");

    hamburgerBtn.addEventListener("click", () => {
      mobileMenu.classList.remove("-translate-y-full", "opacity-0");
      mobileMenu.classList.add("translate-y-0", "opacity-100");
    });

    closeBtn.addEventListener("click", () => {
      mobileMenu.classList.remove("translate-y-0", "opacity-100");
      mobileMenu.classList.add("-translate-y-full", "opacity-0");
    });

    mobileMenu.addEventListener("click", (e) => {
      if (e.target === mobileMenu) {
        mobileMenu.classList.remove("translate-y-0", "opacity-100");
        mobileMenu.classList.add("-translate-y-full", "opacity-0");
      }
    });
  }
}

customElements.define("navbar-mobile", NavbarMobile);

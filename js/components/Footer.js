class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="bg-white text-white font-Montserrat text-center mt-8 2xl:h-[calc(100vh-100px)] xl:h-[calc(100vh-70px)] md:h-[calc(100vh-70px)] flex flex-col justify-between">
        <section class="border border-b-[#eae6e6] border-t-[#eae6e6] flex flex-row items-center justify-between w-full">
          <div class="flex flex-row flex-wrap items-center md:justify-between justify-center min-h-[113px] h-auto py-10 2xl:px-3 xl:px-10 lg:px-8 md:px-[120px] px-[60px] md:gap-6 2xl:gap-0 gap-[25px] max-w-[1786px] mx-auto w-full">
            <img src="../../assets/images/ICPI_CI_RGB.jpg" alt="logo" class="lg:scale-[0.7] 2xl:scale-100 xl:scale-100" />
            <img src="../../assets/images/CSRWI.jpg" alt="logo" class="lg:scale-[0.8] 2xl:scale-100 xl:scale-100" />
            <img src="../../assets/images/vsld_logo_c_2010.jpg" alt="logo" class="lg:scale-[0.8] 2xl:scale-100 xl:scale-100" />
            <img src="../../assets/images/AlertSign.jpg" alt="logo" class="lg:scale-[0.8] 2xl:scale-100 xl:scale-100" />
            <img src="../../assets/images/plalogo.jpg" alt="logo" class="lg:scale-[0.9] 2xl:scale-100 xl:scale-100" />
            <img src="../../assets/images/TB2019_TechoPro_Principal.jpg" alt="logo" class="lg:scale-[0.8] 2xl:scale-100 xl:scale-100" />
            <img src="../../assets/images/VCH_Logo_4c.jpg" alt="logo" class="lg:scale-[0.8] 2xl:scale-100 xl:scale-100" />
            <img src="../../assets/images/certified-hort.jpg" alt="logo" class="lg:scale-[0.8] 2xl:scale-100 xl:scale-100" />
            <img src="../../assets/images/vnla_logo_web.jpg" alt="logo" class="lg:scale-[0.8] 2xl:scale-100 xl:scale-100" />
          </div>
        </section>
        <div class="flex flex-col items-center justify-center gap-4 text-white py-8 w-full md:h-[520px] h-auto max-w-[1786px] mx-auto">
          <section class="flex md:flex-row flex-col items-center justify-between h-full flex-grow w-full tracking-[2px]">
            <div class="flex md:flex-row flex-col md:items-start items-center justify-between h-full border md:border-r-[#eae6e6] 2xl:px-[185px] xl:px-[170px] lg:px-[100px] md:px-[40px] w-[65%] container mx-auto md:pt-11 pt-1">
              <div class="md:mb-0 mb-10">
                <p class="2xl:text-[21px] xl:text-[16px] uppercase font-bold text-[var(--green-main)] md:mb-10 mb-4 text-center md:text-left">Follow us</p>
                <ul class="flex flex-col gap-4 items-center md:items-start">
                  <li><a href="#" class="2xl:text-[21px] xl:text-[16px] font-bold uppercase text-[var(--color-secondary-100)]">Facebook</a></li>
                  <li><a href="#" class="2xl:text-[21px] xl:text-[16px] font-bold uppercase text-[var(--color-secondary-100)]">Twitter</a></li>
                  <li><a href="#" class="2xl:text-[21px] xl:text-[16px] font-bold uppercase text-[var(--color-secondary-100)]">Instagram</a></li>
                  <li><a href="#" class="2xl:text-[21px] xl:text-[16px] font-bold uppercase text-[var(--color-secondary-100)]">houzz</a></li>
                </ul>
              </div>
              <div class="md:mb-0 mb-10">
                <p class="2xl:text-[21px] xl:text-[16px] uppercase font-bold text-[var(--green-main)] md:mb-10 mb-4 text-center md:text-left">Explore</p>
                <ul class="flex flex-col gap-4 items-center md:items-start">
                  <li><a href="#" class="2xl:text-[21px] xl:text-[16px] font-bold uppercase text-[var(--color-secondary-100)]">Projects</a></li>
                  <li><a href="#" class="2xl:text-[21px] xl:text-[16px] font-bold uppercase text-[var(--color-secondary-100)]">Gallery</a></li>
                  <li><a href="#" class="2xl:text-[21px] xl:text-[16px] font-bold uppercase text-[var(--color-secondary-100)]">Resources</a></li>
                  <li><a href="#" class="2xl:text-[21px] xl:text-[16px] font-bold uppercase text-[var(--color-secondary-100)]">Process</a></li>
                  <li><a href="#" class="2xl:text-[21px] xl:text-[16px] font-bold uppercase text-[var(--color-secondary-100)]">Planning</a></li>
                </ul>
              </div>
              <div class="md:mb-0 mb-10">
                <p class="2xl:text-[21px] xl:text-[16px] uppercase font-bold text-[var(--green-main)] md:mb-10 mb-4 text-center md:text-left">About</p>
                <ul class="flex flex-col gap-4 items-center md:items-start">
                  <li><a href="#" class="2xl:text-[21px] xl:text-[16px] font-bold uppercase text-[var(--color-secondary-100)]">Team</a></li>
                  <li><a href="#" class="2xl:text-[21px] xl:text-[16px] font-bold uppercase text-[var(--color-secondary-100)]">Careers</a></li>
                  <li><a href="#" class="2xl:text-[21px] xl:text-[16px] font-bold uppercase text-[var(--color-secondary-100)]">Contact</a></li>
                </ul>
              </div>
            </div>
            <div class="flex flex-col md:justify-start justify-center items-between h-full flex-grow 2xl:px-[100px] xl:px-[100px] lg:px-[70px] md:px-[50px] pt-10">
              <button class="2xl:text-[20px] xl:text-[12px] lg:text-[12px] md:text-[11px] text-white bg-[var(--color-blue-500)] lg:w-[175px] md:w-[175px] xl:w-[235px] font-medium px-6 py-3">Schedule a Call</button>
              <div class="flex flex-col items-center md:items-start justify-between mt-5">
                <div class="flex flex-col items-center md:items-start justify-between">
                  <p class="xl:text-[16px] 2xl:text-[21px] font-semibold text-[var(--color-secondary-100)] tracking-[0px]">Phone</p>
                  <p class="xl:text-[16px] 2xl:text-[21px] text-[var(--color-secondary-100)] tracking-[0px]">804-592-1305</p>
                </div>
                <div class="flex flex-col items-center md:items-start justify-between mt-5">
                  <p class="xl:text-[16px] 2xl:text-[21px] font-semibold text-[var(--color-secondary-100)] tracking-[0px]">Office Hours</p>
                  <p class="xl:text-[16px] 2xl:text-[21px] text-[var(--color-secondary-100)] tracking-[0px]">Monday-Friday,</p>
                  <p class="xl:text-[16px] 2xl:text-[21px] text-[var(--color-secondary-100)] tracking-[0px]">9a-4p</p>
                </div>
                <div class="flex flex-col items-center md:items-start justify-between mt-5">
                  <p class="xl:text-[16px] 2xl:text-[21px] text-[var(--color-blue-500)] tracking-[0px]">Customer Login</p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div class="flex flex-col md:flex-row items-center justify-between md:gap-0 gap-4 text-white py-5 md:px-10 xl:px-0 container max-w-[1786px] mx-auto w-full tracking-[2px]">
          <p class="2xl:text-[17px] xl:text-[12px] lg:text-[12px] md:text-[11.5px] text-[12px] uppercase text-[var(--color-secondary-100)]">
            © 2025 Outdoor Dreams. All Rights Reserved
          </p>
          <p class="2xl:text-[17px] xl:text-[12px] lg:text-[12px] md:text-[11.5px] text-[12px] uppercase text-[var(--color-secondary-100)]">
            Made with ❤️ from Bldr + Braid
          </p>
        </div>
      </footer>
    `;
  }
}

customElements.define("main-footer", Footer);

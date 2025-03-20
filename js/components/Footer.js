class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="bg-white text-white font-Montserrat text-center mt-8 2xl:h-[calc(100vh-100px)] xl:h-[calc(100vh-70px)] flex flex-col justify-between ">
      <section class="border border-b-[#eae6e6] border-t-[#eae6e6] flex flex-row items-center justify-between w-full">
      <div class="flex flex-row items-center justify-between h-[113px] px-3 max-w-[1786px] mx-auto w-full">
        <img src="../../assets/images/ICPI_CI_RGB.jpg" alt="logo" />
        <img src="../../assets/images/CSRWI.jpg" alt="logo" />
        <img src="../../assets/images/vsld_logo_c_2010.jpg" alt="logo" />
        <img src="../../assets/images/AlertSign.jpg" alt="logo" />
        <img src="../../assets/images/plalogo.jpg" alt="logo" />
        <img src="../../assets/images/TB2019_TechoPro_Principal.jpg" alt="logo" />
        <img src="../../assets/images/VCH_Logo_4c.jpg" alt="logo" />
        <img src="../../assets/images/certified-hort.jpg" alt="logo" />
        <img src="../../assets/images/vnla_logo_web.jpg" alt="logo" />
      </div>
</section>
      <div class="flex flex-col items-center justify-center gap-4 text-white py-8 w-full h-[520px] max-w-[1786px] mx-auto">
        <section class="flex flex-row items-center justify-between h-full flex-grow w-full tracking-[2px]">
        <div class="flex flex-row items-start justify-between h-full border border-r-[#eae6e6] px-[185px] w-[65%] container mx-auto pt-11">
          <div>
          <p class="2xl:text-[21px] xl:text-[16px] uppercase font-bold text-[var(--green-main)] mb-10 text-left">Follow us</p>
          <ul class="flex flex-col gap-4 items-start">
            <li><a href="#" class="2xl:text-[21px] xl:text-[16px] font-bold uppercase text-[var(--color-secondary-100)]">Facebook</a></li>
            <li><a href="#" class="2xl:text-[21px] xl:text-[16px] font-bold uppercase text-[var(--color-secondary-100)]">Twitter</a></li>
            <li><a href="#" class="2xl:text-[21px] xl:text-[16px] font-bold uppercase text-[var(--color-secondary-100)]">Instagram</a></li>
            <li><a href="#" class="2xl:text-[21px] xl:text-[16px] font-bold uppercase text-[var(--color-secondary-100)]">houzz</a></li>
          </ul>
          </div>
          <div>
          <p class="2xl:text-[21px] xl:text-[16px] uppercase font-bold text-[var(--green-main)] mb-10 text-left">Explore</p>
          <ul class="flex flex-col gap-4 items-start">
            <li><a href="#" class="2xl:text-[21px] xl:text-[16px] font-bold uppercase text-[var(--color-secondary-100)]">Projects</a></li>
            <li><a href="#" class="2xl:text-[21px] xl:text-[16px] font-bold uppercase text-[var(--color-secondary-100)]">Gallery</a></li>
            <li><a href="#" class="2xl:text-[21px] xl:text-[16px] font-bold uppercase text-[var(--color-secondary-100)]">Resources</a></li>
            <li><a href="#" class="2xl:text-[21px] xl:text-[16px] font-bold uppercase text-[var(--color-secondary-100)]">Process</a></li>
            <li><a href="#" class="2xl:text-[21px] xl:text-[16px] font-bold uppercase text-[var(--color-secondary-100)]">Planning</a></li>
          </ul>
          </div>
          <div>
          <p class="2xl:text-[21px] xl:text-[16px] uppercase font-bold text-[var(--green-main)] mb-10 text-left">About</p>
          <ul class="flex flex-col gap-4 items-start">
            <li><a href="#" class="2xl:text-[21px] xl:text-[16px] font-bold uppercase text-[var(--color-secondary-100)]">Team</a></li>
            <li><a href="#" class="2xl:text-[21px] xl:text-[16px] font-bold uppercase text-[var(--color-secondary-100)]">Careers</a></li>
            <li><a href="#" class="2xl:text-[21px] xl:text-[16px] font-bold uppercase text-[var(--color-secondary-100)]">Contact</a></li>
          </ul>
          </div>
        </div>

        <div class="flex flex-col justify-start items-between h-full flex-grow px-[100px] pt-10">
          <button class="2xl:text-[20px] xl:text-[12px] text-white bg-[var(--color-blue-500)] min-w-[175px] max-w-[235px] font-medium px-6 py-3">Schedule a Call</button>
          <div class="flex flex-col items-start justify-between mt-5">
          <div class="flex flex-col items-start justify-between">
            <p class="xl:text-[16px] 2xl:text-[21px] font-semibold text-[var(--color-secondary-100)] tracking-[0px]">Phone</p>
            <p class="xl:text-[16px] 2xl:text-[21px] text-[var(--color-secondary-100)] tracking-[0px]">804-592-1305</p>
          </div>
          <div class="flex flex-col items-start justify-between mt-5">
            <p class="xl:text-[16px] 2xl:text-[21px] font-semibold text-[var(--color-secondary-100)] tracking-[0px]">Office Hours</p>
            <p class="xl:text-[16px] 2xl:text-[21px] text-[var(--color-secondary-100)] tracking-[0px]">Monday-Friday,</p>
            <p class="xl:text-[16px] 2xl:text-[21px] text-[var(--color-secondary-100)] tracking-[0px]">9a-4p</p>
          </div>
          <div class="flex flex-col items-start justify-between mt-5">
            <p class="xl:text-[16px] 2xl:text-[21px] text-[var(--color-blue-500)] tracking-[0px]">Customer Login</p>
          </div>
          </div>
        </div>
        </section>
      </div>

      <div class="flex flex-row items-center justify-between text-white py-5 container max-w-[1786px] mx-auto w-full tracking-[2px]">
      <p class="2xl:text-[17px] xl:text-[12px] uppercase text-[var(--color-secondary-100)]">
          ©
          2025 Outdoor Dreams.
          All Rights Reserved
          </p>

          <p class="2xl:text-[17px] xl:text-[12px] uppercase text-[var(--color-secondary-100)]">
          Made with ❤️ from Bldr + Braid
          </p>
      </div>
      </footer>
    `;
  }
}

customElements.define("main-footer", Footer);

class Hero extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <main class="bg-background w-full">
<section class=" max-w-[1920px] min-h-[500px] h-[80vh] 2xl:h-[120vh] 3xl:h-[90vh] max-h-[1080px] relative mx-auto">
    <!-- Hero Image -->
    <div class="absolute inset-0 w-full h-full">
      <div class="w-full lg:w-[70%] xl:w-[75%] h-full absolute top-0 right-0 overflow-hidden">
        <div class="absolute z-[2] w-full h-1/4 top-0 left-0 bg-gradient-to-b from-[rgba(252,249,247,0.7)] to-[rgba(252,249,247,0)] mix-blend-lighten"></div>
        <img src="./assets/images/hero_section.jpg" alt="Pool and Hot Tub with stone patio and stone wall" class=" w-full h-full object-cover aspect-auto" loading="eager" />
      </div>
    </div>

    <!-- Hero Content -->
   <div class="relative  flex items-center justify-center h-full w-1/2 px-4 md:px-10">
    <div class="bg-white hero-content-shadow max-w-lg 2xl:max-w-xl 3xl:max-w-2xl w-full">
    <div class="bg-white card-content w-full">
      <h1 class="text-4xl mb-14 md:text-5xl font-Neruda leading-[0.8] lg:text-6xl xl:text-7xl 2xl:text-[6.8rem] text-secondary-500 tracking-wide">
        The best memories are made outdoors
      </h1>
      <button class="bg-primary-500 mb-3 px-6 py-2 md:px-8 md:py-3 lg:px-12 lg:py-3.5 text-white  text-lg font-Montserrat">
        Get Started
      </button>
      <span class="text-base lg:text-xl font-Montserrat text-secondary-100 font-medium block mt-2">
        Established in 2005
      </span>
    </div>
    <!-- Hero Brand Logo -->
        <div class="bg-background py-5 px-7">
          <img src="assets/images/hero-brand.png" alt="Brand Logo" />
        </div>
  </div>

</div>

  </section>
</main>

      `;
  }
}

customElements.define("hero-section", Hero);

// <!-- Hero Brand Logo -->
// <div class="absolute bottom-5 left-1/2 -translate-x-1/2 lg:left-14 2xl:left-24 bg-background py-[21px] px-[42px]">
//   <img src="assets/images/hero-brand.png" alt="Brand Logo" />
// </div>

// <!-- Decorative Arrow -->
{
  /* <div class="hidden md:block absolute bottom-8 left-4 lg:left-14 2xl:left-24">
  <img src="./assets/images/home-hero-arrow.svg" alt="Arrow" />
</div> */
}

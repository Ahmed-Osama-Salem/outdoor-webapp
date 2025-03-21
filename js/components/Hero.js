class Hero extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <main class="bg-background w-full">
      <section
        class="max-w-[1920px] h-[65vh] md:h-[70vh] relative mx-auto lg:h-[85vh] xl:h-[70vh] 2xl:h-[110vh] max-h-[1080px]bg-red-500"
      >
        <!-- hero image -->
        <div class="h-2/3 md:h-[80%] lg:h-full w-full absolute">
          <div
            class="w-full lg:w-[70%] xl:w-[75%] absolute top-0 right-0 h-full overflow-hidden"
          >
            <!-- Gradient Overlay -->
            <div
              class="absolute z-[2] w-full h-[25%] top-0 left-0 bg-gradient-to-b from-[rgba(252,249,247,0.7)] to-[rgba(252,249,247,0)] mix-blend-lighten"
            ></div>

            <!-- Image Container -->
            <div class="absolute inset-0">
              <img
                src="./assets/images/hero_section.jpg"
                alt="Pool and Hot Tub with stone patio and stone wall"
                class="w-full h-full scale-125 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <!-- hero content -->
        <div class="w-full relative h-full flex items-center">
          <div
            class="w-[68%]  md:w-[48%] md:left-[30%] lg:w-[50%] lg:h-[65%] lg:left-[40%]  xl:w-[35%] xl:h-[65%] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 2xl:translate-x-0 2xl:w-[38em] absolute 2xl:h-[750px] xl:translate-x-0 xl:left-[10%] bg-white hero-content-shadow 2xl:left-56  "
          >
            <div
              class="p-8 md:py-[40px] md:px-[60px] lg:p-7 lg:pt-12 2xl:p-[4.625rem] lg:pb-[3.84375rem] lg:pl-[5.5rem] flex flex-col"
            >
              <div class="flex flex-col">
                <h1
                  class="text-[44px] tracking-wider leading-[0.8] md:text-[60px] lg:text-[82px] md:leading-[0.9] lg:tracking-wider xl:text-[80px] xl:leading-16 2xl:text-[6.5em] font-Neruda 2xl:leading-24 mb-[0.6em] text-secondary-500 2xl:tracking-[6px]"
                >
                  The best memories are made outdoors
                </h1>
                <button
                  class="bg-primary-500 w-fit mb-[14px] px-8 py-2 lg:px-12 lg:py-3.5 text-white"
                >
                  Get Started
                </button>
                <span class="text-[16px] md:text-[19px] text-secondary-100 font-medium"
                  >Established in 2005
                </span>
              </div>
            </div>
            <div
              class="bg-background absolute lg:-bottom-20 2xl:bottom-5 py-[21px] px-[42px]"
            >
              <img src="assets/images/hero-brand.png" alt="" />
            </div>
          </div>
          <div
            class="hidden md:block md:right-10 bottom-[calc(100%_-_85%)] absolute lg:left-14 2xl:left-24"
          >
            <img src="./assets/images/home-hero-arrow.svg" alt="" />
          </div>
        </div>
      </section>
    </main>
      `;
  }
}

customElements.define("hero-section", Hero);

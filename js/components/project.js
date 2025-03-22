class Projecs extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
 <section
      id="what_we_do"
      class="bg-brown-500 h-fit   h-auto max-w-[1920px] mx-auto"
    >
      <div
        class="lg:w-full py-20 lg:py-36 flex flex-col md:flex-row items-start justify-end"
      >
        <div class="w-[90%] mx-auto md:w-[40%] lg:w-1/2">
          <h3
            class="text-primary-500 font-Montserrat font-semibold text-sm lg:text-base 2xl:text-xl tracking-widest uppercase"
          >
            The Outdoor Dreams Difference
          </h3>
          <h1
            class="md:text-5xl t-2xl:text-8xl lg:text-[80px] text-4xl font-Neruda tracking-widest mt-8 text-white leading-[0.8] 2xl:leading-tight"
          >
            What sets our <br />
            projects apart
          </h1>

          <!-- Accordion  -->
          <div class="text-white lg:w-[80%] mt-8 space-y-8">
            <div class="border-b border-[#2b2624]">
              <button
                class="w-full text-left py-4 flex justify-between items-center focus:outline-none accordion-header"
              >
                <span
                  class="text-xl lg:font-light lg:text-[23px] 2xl:text-3xl font-semibold"
                  >Comprehensive Service</span
                >
                <!-- <span class="text-xl transition-transform transform">+</span> -->
                <span class="expand-icon" data-v-16a93c5a=""></span>
              </button>
              <div
                class="accordion-content text-base lg:text-xl pb-0 max-h-0 overflow-hidden transition-all duration-300"
              >
                <p class="py-4 lg:text-[20px] font-Montserrat">
                  We take a holistic approach to every project and provide
                  turn-key service to ensure that you are left with an outdoor
                  space that is immediately ready to enjoy. No dealing with
                  multiple contractors—we handle everything.
                </p>
              </div>
            </div>
            <div class="border-b border-[#2b2624]">
              <button
                class="w-full text-left py-4 flex justify-between items-center focus:outline-none accordion-header"
              >
                <span
                  class="text-xl lg:font-light lg:text-[23px] 2xl:text-3xl font-semibold"
                  >Comprehensive Service</span
                >
                <!-- <span class="text-xl transition-transform transform">+</span> -->
                <span class="expand-icon" data-v-16a93c5a=""></span>
              </button>
              <div
                class="accordion-content text-base lg:text-xl pb-0 max-h-0 overflow-hidden transition-all duration-300"
              >
                <p class="py-4 lg:text-[20px] font-Montserrat">
                  We take a holistic approach to every project and provide
                  turn-key service to ensure that you are left with an outdoor
                  space that is immediately ready to enjoy. No dealing with
                  multiple contractors—we handle everything.
                </p>
              </div>
            </div>
            <div class="border-b border-[#2b2624]">
              <button
                class="w-full text-left py-4 flex justify-between items-center focus:outline-none accordion-header"
              >
                <span
                  class="text-xl lg:font-light lg:text-[23px] 2xl:text-3xl font-semibold"
                  >Comprehensive Service</span
                >
                <!-- <span class="text-xl transition-transform transform">+</span> -->
                <span class="expand-icon" data-v-16a93c5a=""></span>
              </button>
              <div
                class="accordion-content text-base lg:text-xl pb-0 max-h-0 overflow-hidden transition-all duration-300"
              >
                <p class="py-4 lg:text-[20px] font-Montserrat">
                  We take a holistic approach to every project and provide
                  turn-key service to ensure that you are left with an outdoor
                  space that is immediately ready to enjoy. No dealing with
                  multiple contractors—we handle everything.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-12 hidden md:block bg-black lg:mt-0">
          <img
            src="./assets/images/projects-side.jpg"
            alt="Outdoor Space"
            class="md:w-[350px] md:h-[300px] lg:h-[315px] lg:w-[380px] xl:w-[525px] xl:h-[454px] object-cover 2xl:w-full 2xl:h-full"
          />
        </div>
        </div>
        <div class="relative md:w-[65%] w-full pt-[60px] md:px-0 px-5">
          <what-we-do-slider></what-we-do-slider>
        </div>
    </section>


        `;
  }
}

customElements.define("project-section", Projecs);

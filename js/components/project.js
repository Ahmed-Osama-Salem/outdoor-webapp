class Projecs extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<section
  id="what_we_do"
  class="bg-brown-500 h-fit h-auto max-w-[1920px] mx-auto"
>
  <div
    class="lg:w-full py-20 lg:py-36 flex flex-col md:flex-row items-start justify-end"
  >
    <div class="w-[90%] ml-[8%] md:w-[44%] lg:w-1/2">
      <div
        data-aos="fade-up"
        data-aos-delay="85"
        data-aos-duration="600"
        data-aos-easing="ease-in-out"
      >
        <h3
          class="text-primary-500 font-Montserrat font-semibold text-sm lg:text-base 2xl:text-xl tracking-widest uppercase"
        >
          The Outdoor Dreams Difference
        </h3>
        <h1
          class="md:text-5xl t-2xl:text-8xl lg:text-[80px] text-4xl font-Neruda tracking-widest mt-8 text-white leading-[0.8]"
        >
          What sets our <br />
          projects apart
        </h1>
      </div>
      <!-- Accordion  -->
      <div
        data-aos="fade-up"
        data-aos-delay="85"
        data-aos-duration="700"
        data-aos-easing="ease-in-out"
        class="text-white lg:w-[80%] mt-8 space-y-8"
      >
        <div class="border-b border-[#2b2624]">
          <button
            class="w-full text-left py-4 flex justify-between items-center focus:outline-none accordion-header"
          >
            <span
              class="text-base lg:font-light lg:text-[23px] 2xl:text-3xl font-semibold"
              >Comprehensive Service</span
            >
            <span class="expand-icon"></span>
          </button>
          <div
            class="accordion-content text-base lg:text-xl pb-0 max-h-0 overflow-hidden transition-all duration-300"
          >
            <p class="py-4 lg:text-[20px] font-Montserrat">
              We take a holistic approach to every project and provide turn-key
              service to ensure that you are left with an outdoor space that is
              immediately ready to enjoy. No dealing with multiple
              contractors—we handle everything.
            </p>
          </div>
        </div>
        <div class="border-b border-[#2b2624]">
          <button
            class="w-full text-left py-4 flex justify-between items-center focus:outline-none accordion-header"
          >
            <span
              class="text-base lg:font-light lg:text-[23px] 2xl:text-3xl font-semibold"
              >Consistent Process</span
            >
            <span class="expand-icon"></span>
          </button>
          <div
            class="accordion-content text-base lg:text-xl pb-0 max-h-0 overflow-hidden transition-all duration-300"
          >
            <p class="py-4 lg:text-[20px] font-Montserrat">
              We follow a consistent process that creates reliable results. We
              take the guesswork out of contracting by setting realistic
              expectations and charting a step-by-step roadmap from start to
              finish.
            </p>
          </div>
        </div>
        <div class="border-b border-[#2b2624]">
          <button
            class="w-full text-left py-4 flex justify-between items-center focus:outline-none accordion-header"
          >
            <span
              class="text-base lg:font-light lg:text-[23px] 2xl:text-3xl font-semibold"
              >Active Design Method</span
            >
            <span class="expand-icon"></span>
          </button>
          <div
            class="accordion-content text-base lg:text-xl pb-0 max-h-0 overflow-hidden transition-all duration-300"
          >
            <p class="py-4 lg:text-[20px] font-Montserrat">
              Our design process involves you in the creative journey. Educating
              you on your options and allowing you to discover your particular
              style, preferences, and vision for the project.
            </p>
          </div>
        </div>
        <div class="border-b border-[#2b2624]">
          <button
            class="w-full text-left py-4 flex justify-between items-center focus:outline-none accordion-header"
          >
            <span
              class="text-base lg:font-light lg:text-[23px] 2xl:text-3xl font-semibold"
              >Project Financing Available</span
            >
            <span class="expand-icon"></span>
          </button>
          <div
            class="accordion-content text-base lg:text-xl pb-0 max-h-0 overflow-hidden transition-all duration-300"
          >
            <p class="py-4 lg:text-[20px] font-Montserrat">
              Outdoor Dreams has partnered with HFS Home Improvement Financing
              to help you achieve the backyard of your dreams! HFS provides
              Outdoor Dreams clients with personal/unsecured loans up to
              $500,000. Loans are offered up to 120% of the project cost to help
              pay for unforeseen change orders and last-minute upgrades.
            </p>
          </div>
        </div>
        <div class="border-b border-[#2b2624]">
          <button
            class="w-full text-left py-4 flex justify-between items-center focus:outline-none accordion-header"
          >
            <span
              class="text-base lg:font-light lg:text-[23px] 2xl:text-3xl font-semibold"
              >Superior Engineering & Lifetime Structural Warranty</span
            >
            <span class="expand-icon"></span>
          </button>
          <div
            class="accordion-content text-base lg:text-xl pb-0 max-h-0 overflow-hidden transition-all duration-300"
          >
            <p class="py-4 lg:text-[20px] font-Montserrat">
              We proudly construct our work to the highest standard of
              engineering, ensuring each space remains beautiful and valuable as
              long as you are in your home.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      data-aos="fade-left"
      data-aos-delay="85"
      data-aos-duration="600"
      data-aos-easing="ease-in-out"
      class="mt-12 hidden md:block bg-black lg:mt-0"
    >
      <img
        src="./assets/images/projects-side.jpg"
        alt="Outdoor Space"
        class="object-cover md:w-[350px] md:h-[300px] lg:w-[380px] lg:h-[315px] xl:w-[525px] xl:h-[454px] 2xl:w-full 2xl:h-full"
      />
    </div>
  </div>
  <div class="relative flex flex-col md:flex-row w-full pt-[60px] md:px-0 px-5">
    <div class="relative md:w-[65%]">
      <what-we-do-slider></what-we-do-slider>
    </div>
    <div class="w-full mt-12">
      <div
        class="pb-8 md:p-0 md:h-[80%] flex-col gap-3 flex items-start justify-end md:w-[70%] md:mx-auto"
      >
        <h1
          class="text-2xl md:text-[2.25em] text-white font-Neruda md:tracking-[.020833333em] md:leading-[1.166666667]"
        >
          Learn more about the outdoor experiences we create.
        </h1>
        <p class="font-Montserrat text-white">
          Our Progress <span class="">→</span>
        </p>
      </div>
    </div>
  </div>
</section>
        `;
  }
}

customElements.define("project-section", Projecs);

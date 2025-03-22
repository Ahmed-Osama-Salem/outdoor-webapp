class Projecs extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<section id="what_we_do" class="bg-brown-500 h-fit h-auto max-w-[1920px] mx-auto">
    <div class="lg:w-full py-20 lg:py-36 flex flex-col md:flex-row items-start justify-end">
        <div class="w-[90%] mx-auto md:w-[40%] lg:w-1/2">
            <div data-aos="fade-up" data-aos-delay="85" data-aos-duration="600" data-aos-easing="ease-in-out">
                <h3 class="text-primary-500 font-Montserrat font-semibold text-sm lg:text-base 2xl:text-xl tracking-widest uppercase">
                    The Outdoor Dreams Difference
                </h3>
                <h1 class="md:text-5xl t-2xl:text-8xl lg:text-[80px] text-4xl font-Neruda tracking-widest mt-8 text-white leading-[0.8] 2xl:leading-tight">
                    What sets our <br />
                    projects apart
                </h1>
            </div>
            <!-- Accordion  -->
            <div data-aos="fade-up" data-aos-delay="85" data-aos-duration="700" data-aos-easing="ease-in-out" class="text-white lg:w-[80%] mt-8 space-y-8">
                <div class="border-b border-[#2b2624]">
                    <button class="w-full text-left py-4 flex justify-between items-center focus:outline-none accordion-header">
                        <span class="text-xl lg:font-light lg:text-[23px] 2xl:text-3xl font-semibold">Comprehensive Service</span>
                        <!-- <span class="text-xl transition-transform transform">+</span> -->
                        <span class="expand-icon"></span>
                    </button>
                    <div class="accordion-content text-base lg:text-xl pb-0 max-h-0 overflow-hidden transition-all duration-300">
                        <p class="py-4 lg:text-[20px] font-Montserrat">
                            We take a holistic approach to every project and provide turn-key service to ensure that you are left with an outdoor space that is immediately ready to enjoy. No dealing with multiple contractors—we handle
                            everything.
                        </p>
                    </div>
                </div>
                <div class="border-b border-[#2b2624]">
                    <button class="w-full text-left py-4 flex justify-between items-center focus:outline-none accordion-header">
                        <span class="text-xl lg:font-light lg:text-[23px] 2xl:text-3xl font-semibold">Comprehensive Service</span>
                        <!-- <span class="text-xl transition-transform transform">+</span> -->
                        <span class="expand-icon"></span>
                    </button>
                    <div class="accordion-content text-base lg:text-xl pb-0 max-h-0 overflow-hidden transition-all duration-300">
                        <p class="py-4 lg:text-[20px] font-Montserrat">
                            We take a holistic approach to every project and provide turn-key service to ensure that you are left with an outdoor space that is immediately ready to enjoy. No dealing with multiple contractors—we handle
                            everything.
                        </p>
                    </div>
                </div>
                <div class="border-b border-[#2b2624]">
                    <button class="w-full text-left py-4 flex justify-between items-center focus:outline-none accordion-header">
                        <span class="text-xl lg:font-light lg:text-[23px] 2xl:text-3xl font-semibold">Comprehensive Service</span>
                        <!-- <span class="text-xl transition-transform transform">+</span> -->
                        <span class="expand-icon"></span>
                    </button>
                    <div class="accordion-content text-base lg:text-xl pb-0 max-h-0 overflow-hidden transition-all duration-300">
                        <p class="py-4 lg:text-[20px] font-Montserrat">
                            We take a holistic approach to every project and provide turn-key service to ensure that you are left with an outdoor space that is immediately ready to enjoy. No dealing with multiple contractors—we handle
                            everything.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div data-aos="fade-left" data-aos-delay="85" data-aos-duration="600" data-aos-easing="ease-in-out" class="mt-12 hidden md:block bg-black lg:mt-0">
            <img src="./assets/images/projects-side.jpg" alt="Outdoor Space" class="md:w-[350px] md:h-[300px] lg:h-[315px] lg:w-[380px] xl:w-[525px] xl:h-[454px] object-cover 2xl:w-full 2xl:h-full" />
        </div>
    </div>
    <div class="relative flex  flex-col md:flex-row  w-full pt-[60px] md:px-0 px-5">
        <div class="relative md:w-[65%]">
            <what-we-do-slider></what-we-do-slider>
        </div>
        <div class=" w-full mt-12">
            <div class="pb-8 md:p-0 md:h-[80%] flex-col gap-3  flex items-start justify-end md:w-[70%] md:mx-auto">
            <h1 class="text-2xl md:text-[2.25em] text-white font-Neruda md:tracking-[.020833333em] md:leading-[1.166666667]">
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

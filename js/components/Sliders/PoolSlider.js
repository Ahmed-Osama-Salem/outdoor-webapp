class PoolSlider extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section   data-aos="fade-up"
              data-aos-delay="85"
              data-aos-duration="600"
              data-aos-easing="ease-in-out" class="w-full relative bg-[var(--color-background)] h-screen flex flex-col  py-[130px] md:py-[130px] py-[90px]">
        <div class="app-container flex md:flex-row flex-col justify-between xl:gap-[120px] lg:gap-[40px] md:gap-[50px] gap-5 2xl:px-0 xl:px-12 md:px-12 px-6">
          <div class="flex xl:w-[60%] lg:w-[70%] md:w-[80%]">
            <p class="text-[var(--light-dark)] lg:leading-[80px] md:leading-[60px] xl:leading-[100px] leading-[40px] font-Neruda font-light 2xl:text-[110px] xl:text-[88px] lg:text-[82px] md:text-[60px] text-[44px] font-bold md:mb-10 mb-4">
              Patios, Pools and more
            </p>
          </div>
          <div class="flex flex-grow container font-Montserrat">
            <div class="flex flex-col">
              <p class="uppercase text-[var(--green-main)] tracking-[2px] font-bold 2xl:text-[19px] xl:text-[14px] md:text-[14px]">What we make</p>
              <div class="md:mt-10 mt-7">
                <p class="lg:w-[80%] md:w-[100%] mb-5 text-[var(--color-secondary-100)] font-medium 2xl:text-[21px] xl:text-[16px]">
                  We design and build projects that consist of natural stone or paver patios, decks, porches, swimming pools, fire pits and fireplaces, outdoor kitchens and grill islands, pergolas and pavilions, landscaping, and outdoor lighting.
                </p>
                <a href="#" class="text-[var(--color-secondary-500)] font-semibold 2xl:text-[21px] xl:text-[16px]">Frequently Asked Questions</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Swiper Container -->
        <div class="w-[100%]  xl:pt-[180px] lg:pt-[100px] pt-[100px] relative">
          <div class="swiper pool-slider !overflow-visible h-full">
            <div class="swiper-wrapper py-10">
              <!-- Slide 1 -->
              <div class="swiper-slide relative item-slide">
                <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('../../../assets/images/pool_slide_1.jpg');"></div>
              </div>
              <!-- Slide 2 -->
              <div class="swiper-slide relative item-slide">
                <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('../../../assets/images/pool_slide_2.jpg');background-size:contain;background-repeat: no-repeat;"></div>
              </div>
              <!-- Slide 3 -->
              <div class="swiper-slide relative item-slide">
                <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('../../../assets/images/pool_slide_3.jpg');"></div>
              </div>
              <!-- More Slides -->
              <div class="swiper-slide relative item-slide">
                <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('../../../assets/images/pool_slide_4.jpg');"></div>
              </div>
              <div class="swiper-slide relative item-slide">
                <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('../../../assets/images/pool_slide_5.jpg');"></div>
              </div>
              <div class="swiper-slide relative item-slide">
                <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('../../../assets/images/pool_slide_6.jpg');background-size:contain;background-repeat: no-repeat;"></div>
              </div>
              <div class="swiper-slide relative item-slide">
                <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('../../../assets/images/pool_slide_7.jpg');background-size:contain;background-repeat: no-repeat;"></div>
              </div>
              <div class="swiper-slide relative item-slide">
                <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('../../../assets/images/asd.jpg');"></div>
              </div>
            </div>
          </div>

          <!-- Custom Navigation Buttons -->
        <div class="absolute 2xl:top-[0px] xl:top-[0px] 2xl:left-[400px]  xl:left-[60px] lg:left-[70px] lg:top-[0px] md:top-[0px] md:left-[60px] top-5 left-12 flex">
            <!-- Previous Button -->
             <div class="swiper-button-next !text-[var(--light-dark)] !translate-x-12 focus:!text-white rotate-180 focus:bg-[var(--color-blue-500)] !w-[80px] !h-[80px] rounded-full !scale-[0.4] flex items-center justify-center cursor-pointer transition">
             </div>
            <!-- Next Button -->
               <div class="swiper-button-prev !text-[var(--light-dark)] focus:!text-white -rotate-180 focus:bg-[var(--color-blue-500)] !w-[80px] !h-[80px] p-2  rounded-full !scale-[0.4] flex items-center justify-center cursor-pointer transition">
              </div>
          </div>
        </div>
      </section>
    `;

    const swiper = new Swiper(this.querySelector(".pool-slider"), {
      speed: 800,
      loop: true,
      slidesPerView: "auto",
      centeredSlides: true,
      slidesPerGroup: 1,
      spaceBetween: 200,
      slideActiveClass: "custom-active-slide",
      navigation: {
        nextEl: this.querySelector(".swiper-button-next"),
        prevEl: this.querySelector(".swiper-button-prev"),
      },
      breakpoints: {
        0: {
          slidesPerView: 1.57,
          spaceBetween: 40,
          loop: true,
        },
        700: {
          slidesPerView: 1.55,
          spaceBetween: 60,
          loop: true,
        },
        1022: {
          slidesPerView: 2,
          spaceBetween: 100,
          loop: true,
        },
        1441: {
          slidesPerView: 3.5,
          spaceBetween: 200,
          loop: true,
        },
        1919: {
          slidesPerView: 2.5,
          spaceBetween: 200,
          loop: true,
        },
        2000: {
          slidesPerView: 3.5,
          spaceBetween: 200,
          loop: true,
        },
      },
    });
  }
}

customElements.define("pool-slider", PoolSlider);

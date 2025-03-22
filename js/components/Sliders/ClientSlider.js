class ClientSlider extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <section class="w-full relative bg-[var(--color-background)] h-auto flex flex-col 2xl:py-[130px] lg:py-[20px] py-[30px]">
            <div class="xl:ml-[300px] lg:ml-[200px] md:ml-[120px] ml-0 md:px-0 px-6 w-full xl:pt-[100px] lg:pt-[30px]">
                <p class="uppercase text-[var(--green-main)] tracking-[2px] font-bold 2xl:text-[19px] xl:text-[14px] md:text-[14px]">
                    What former clients have to say
                </p>
                <div class="lg:mt-6 md:mt-7 mt-7">
                    <p class="xl:w-[35%] lg:w-[40%] md:w-[40%] w-full mb-5 text-[var(--color-secondary-100)] 2xl:text-[21px] xl:text-[16px]">
                        We’ve had the privilege of helping some incredible people make their outdoor dream a reality.
                    </p>
                </div>
                <div class="w-[100%] xl:pt-[90px] lg:pt-[100px] 2xl:pt-[100px] relative">
                    <div class="swiper client-slider !overflow-visible h-full">
                        <div class="swiper-wrapper lg:py-10">
                            <!-- Slide 1 -->
                            <div class="swiper-slide relative client-slide">
                                <div class="client-slide">
                               <p class="relative font-Neruda  text-[var(--color-secondary-500)] font-light 2xl:text-[32px] text-[23px] before:content-[''] before:absolute before:-left-8 before:top-0 before:w-5 before:h-5 before:bg-no-repeat before:bg-contain before:bg-[url('../../../assets/images/quate.svg')]">
                                     Our experience with Outdoor Dreams has been fantastic! We contracted them to do a backyard remodel and I am extremely satisfied with the process and results. Mike with Outdoor Dreams listened to our ideas and helped us design the backyard of our dreams... literally!
                                    </p>
                                     <div class="font-Montserrat tracking-[1.5px] ">
                                    <p class="font-bold 2xl:text-[20px] text-[14px] uppercase text-[var(--color-secondary-100)]">Tenaja L.</p>
                                     <p class="2xl:text-[15px] text-[11px] text-[var(--color-secondary-100)]">Chesterfield, VA</p>

                                    </div>
                                </div>
                            </div>
                            <!-- Slide 2 -->
                            <div class="swiper-slide relative client-slide">
                                <div class="client-slide">
                               <p class="relative font-Neruda text-[var(--color-secondary-500)] font-light 2xl:text-[32px]  text-[23px] before:content-[''] before:absolute before:-left-8 before:top-0 before:w-5 before:h-5 before:bg-no-repeat before:bg-contain before:bg-[url('../../../assets/images/quate.svg')]">
                                        Outdoor Dreams is a first-class business. They care about getting everything just right so that your investment is well worth it. I cannot recommend them enough.
                                    </p>
                                   <div class="font-Montserrat tracking-[1.5px] ">
                                    <p class="font-bold 2xl:text-[20px] text-[14px] uppercase text-[var(--color-secondary-100)]">Ron S.</p>
                                    <p class="2xl:text-[15px] text-[11px] text-[var(--color-secondary-100)]">Richmond City (Church Hill)</p>
                                    </div>
                                </div>
                            </div>
                            <!-- Slide 3 -->
                            <div class="swiper-slide relative client-slide">
                                <div class="client-slide">
                               <p class="relative font-Neruda text-[var(--color-secondary-500)] font-light 2xl:text-[32px]  text-[23px] before:content-[''] before:absolute before:-left-8 before:top-0 before:w-5 before:h-5 before:bg-no-repeat before:bg-contain before:bg-[url('../../../assets/images/quate.svg')]">
                                        The entire crew was a pleasure to work with and I wouldn’t hesitate to call them again. We had add-ons to the project and all of that was handled seamlessly.
                                    </p>
                                     <div class="font-Montserrat tracking-[1.5px] ">
                                    <p class="font-bold 2xl:text-[20px] text-[14px] uppercase text-[var(--color-secondary-100)]">Mark H.</p>
                                    <p class="2xl:text-[15px] text-[11px] text-[var(--color-secondary-100)]">Mechanicsville, VA</p>
                                    </div>
                                </div>
                            </div>
                            <!-- More Slides -->
                            <div class="swiper-slide relative client-slide">
                                <div class="client-slide">
                               <p class="relative font-Neruda text-[var(--color-secondary-500)] font-light 2xl:text-[32px]  text-[23px] before:content-[''] before:absolute before:-left-8 before:top-0 before:w-5 before:h-5 before:bg-no-repeat before:bg-contain before:bg-[url('../../../assets/images/quate.svg')]">
                                        Their attention to detail is superb. Greg listens to all your ideas and delivers a design that is truly a dream. Geoff and his crew have a fantastic eye for detail. Professional and hardworking. You will see the results. Job well done!
                                    </p>
                                     <div class="font-Montserrat tracking-[1.5px] ">
                                    <p class="font-bold 2xl:text-[20px] text-[14px] uppercase text-[var(--color-secondary-100)]">Cassie M.</p>
                                    <p class="2xl:text-[15px] text-[11px] text-[var(--color-secondary-100)]"> Richmond City, VA</p>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide relative client-slide">
                                <div class="client-slide">
                               <p class="relative font-Neruda text-[var(--color-secondary-500)] font-light 2xl:text-[32px]  text-[23px] before:content-[''] before:absolute before:-left-8 before:top-0 before:w-5 before:h-5 before:bg-no-repeat before:bg-contain before:bg-[url('../../../assets/images/quate.svg')]">
                                        Super professional, always on time, kept us informed where they were at in the project, and willing to take the time to explain anything we had questions about.
                                    </p>
                                   <div class="font-Montserrat tracking-[1.5px] ">
                                    <p class="font-bold 2xl:text-[20px] text-[14px] uppercase text-[var(--color-secondary-100)]">Sarah R.</p>
                                    <p class="2xl:text-[15px] text-[11px] text-[var(--color-secondary-100)]"> Mechanicsville, VA</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Custom Navigation Buttons -->
                    <div class="absolute 2xl:top-[40px] xl:top-[10px] 2xl:left-[0px] xl:left-[10px] lg:left-[20px] lg:top-[0px] md:top-[0px] md:left-[10px] top-5 left-10 flex">
                        <!-- Previous Button -->
                        <div class="swiper-button-next !text-[var(--light-dark)] !translate-x-12 focus:!text-white rotate-180 focus:bg-[var(--color-blue-500)] !w-[80px] !h-[80px] rounded-full !scale-[0.4] flex items-center justify-center cursor-pointer transition">
                        </div>
                        <!-- Next Button -->
                        <div class="swiper-button-prev !text-[var(--light-dark)] focus:!text-white -rotate-180 focus:bg-[var(--color-blue-500)] !w-[80px] !h-[80px] p-2 rounded-full !scale-[0.4] flex items-center justify-center cursor-pointer transition">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        `;

    const swiper = new Swiper(this.querySelector(".client-slider"), {
      speed: 800,
      loop: true,
      slidesPerView: 3.5,
      centeredSlides: true,
      slidesPerGroup: 1,
      spaceBetween: 100,
      navigation: {
        nextEl: this.querySelector(".swiper-button-next"),
        prevEl: this.querySelector(".swiper-button-prev"),
      },
      breakpoints: {
        0: {
          slidesPerView: "auto",
          spaceBetween: 60,
          centeredSlides: true,
        },
        640: {
          slidesPerView: "auto",
          spaceBetween: 100,
        },
      },
    });
  }
}

customElements.define("client-slider", ClientSlider);

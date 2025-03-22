class WhatWeDoSlider extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="w-[100%]">
        <div class="swiper what-we-do-slider">
          <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="../../../assets/images/what_we_do_slider_one.jpg" alt="Slide 1" class="what_we_do_item_slide"></div>
            <div class="swiper-slide"><img src="../../../assets/images/what_we_do_slider_two.jpg" alt="Slide 2" class="what_we_do_item_slide"></div>
            <div class="swiper-slide"><img src="../../../assets/images/what_we_do_slider_three.jpg" alt="Slide 3" class="what_we_do_item_slide"></div>
            <div class="swiper-slide"><img src="../../../assets/images/what_we_do_slider_four.jpg" alt="Slide 3" class="what_we_do_item_slide"></div>
            <div class="swiper-slide"><img src="../../../assets/images/what_we_do_slider_five.jpg" alt="Slide 3" class="what_we_do_item_slide"></div>
            <div class="swiper-slide"><img src="../../../assets/images/what_we_do_slider_six.jpg" alt="Slide 3" class="what_we_do_item_slide"></div>
            <div class="swiper-slide"><img src="../../../assets/images/what_we_do_slider_seven.jpg" alt="Slide 3" class="what_we_do_item_slide"></div>
          </div>
        </div>

        <!-- Custom Navigation Buttons -->
        <div class="absolute top-0 md:right-[60px] right-[80px] flex">
        <div class="swiper-button-next !text-white !translate-x-12 focus:!text-[var(--brown-500)] rotate-180 focus:bg-white !w-[80px] !h-[80px] rounded-full !scale-[0.4] flex items-center justify-center cursor-pointer transition">
        </div>
        <div class="swiper-button-prev !text-white focus:!text-[var(--brown-500)] -rotate-180 focus:bg-white !w-[80px] !h-[80px] p-2  rounded-full !scale-[0.4] flex items-center justify-center cursor-pointer transition">
        </div>
        </div>
      </div>
    `;

    new Swiper(this.querySelector(".what-we-do-slider"), {
      loop: true,
      navigation: {
        nextEl: this.querySelector(".swiper-button-next"),
        prevEl: this.querySelector(".swiper-button-prev"),
      },
    });
  }
}

customElements.define("what-we-do-slider", WhatWeDoSlider);

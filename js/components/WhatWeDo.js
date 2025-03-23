class WhatWeDo extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
 <section class="bg-white my-[48px] md:my-[96px] lg:mt-[116px] lg:mb-[169px] ">
   <div
      class="max-w-[1920px]   w-full mx-auto   flex  relative"
      >
      <div
         class="mx-auto w-[90vw] flex flex-col-reverse lg:flex-row justify-between "
         >
         <!-- what we do projects -->
         <div
            class="flex lg:w-[70%] w-full flex-col md:flex-row  justify-around gap-4"
            >
            <div class="w-full">
               <img
                  data-aos="fade-up"
                  data-aos-delay="85"
                  data-aos-duration="500"
                  data-aos-easing="ease-in-out"

                  src="./assets/images/what-we-do-1.jpg"
                  alt="Patio"
                  class="w-full md:w-[320px] md:h-[420px] lg:w-[190px] lg:h-[241px] xl:w-[250px] xl:h-[350px] 2xl:w-[350px] 2xl:h-[460px]"
                  />
               <p class="mt-2 text-lg font-medium text-light-dark">
                  Patio Projects <span class="text-light-dark">→</span>
               </p>
            </div>
            <div class="w-full">
               <img
                  data-aos="fade-up"
                  data-aos-delay="95"
                  data-aos-duration="500"
                  data-aos-easing="ease-in-out"

                  src="./assets/images/what-we-do-2.jpg"
                  alt="Pool"
                  class="w-full md:w-[320px] md:h-[420px] lg:w-[190px] lg:h-[241px] xl:w-[250px] xl:h-[350px] 2xl:w-[350px] 2xl:h-[460px]"
                  />
               <p class="mt-2 text-lg font-medium text-light-dark">
                  Pool Projects <span class="text-light-dark">→</span>
               </p>
            </div>
         </div>
         <div class="w-[10%] h-[4rem]"></div>
         <!-- what we do content -->
         <div class=" lg:w-2/3">
            <div   data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="500"
                  data-aos-easing="ease-in-out" class="flex flex-col  items-start gap-3 md:gap-8 w-[90%] justify-between">
               <h3
                  class="text-primary-500 font-Montserrat font-bold uppercase text-base tracking-widest"
                  >
                  What We Do
               </h3>
               <p
                  class="2xl:text-5xl text-2xl lg:text-[2.25em] lg:leading-[1.3] font-Neruda font-light text-secondary-500 mt-2 2xl:leading-16"
                  >
                  Thoughtfully created patios and swimming pools for homeowners
                  throughout Richmond and Central Virginia.
               </p>
               <div class="w-full  flex items-start">
                  <img src="./assets/images/best-of-hozz.png" class="w-[96px]"  alt="" />
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
<!-- what we con do image -->
<section
   class="2xl:h-screen  md:h-fit h-[30vh] lg:mt-0 w-screen  xl:h-[60vh] 2xl:max-h-[1080px] max-w-[1920px] mx-auto flex items-end "
   >
   <div class="2xl:h-[80%] w-full  h-full md:w-[90%] lg:w-[85%]">
      <img
         data-aos="zoom-in"
                  data-aos-delay="95"
                  data-aos-duration="500"
                  data-aos-easing="ease-in-out"
         src="./assets/images/what-we-do-banner.jpg"
         class="w-full h-full  object-cover"
         alt=""
         />
   </div>
</section>

        `;
  }
}

customElements.define("what-we-do-section", WhatWeDo);

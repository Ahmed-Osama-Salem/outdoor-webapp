class Planning extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
          
    <section
      class="h-[60vh] lg:h-[70vh] 2xl:h-screen w-screen flex items-center lg:max-h-[1080px] max-w-[1920px] mx-auto justify-center relative bg-white"
    >
      <div
        class="absolute bottom-0 left-0 w-full h-full md:w-[90%] xl:w-[85%] lg:h-[80%]"
      >
        <img
          src="./assets/images/planing.jpg"
          class="w-full h-full object-cover"
          alt=""
        />
      </div>

      <div
        class="z-10 h-fit w-fit 2xl:h-[400px] xl:px-[140px] lg:mt-30 xl:py-[60px] bg-white flex flex-col gap-8 items-center justify-center py-[80px] text-[22px] 2xl:py-20 px-9 2xl:p-40 2xl:mt-60"
      >
        <div class="flex items-center justify-center flex-col ">
          <p
            class="text-xs 2xl:text-sm text-primary-500 tracking-wider font-bold"
          >
            STILL PLANNING? WE'VE GOT YOU COVERED
          </p>
          <h2
            class="text-lg text-center md:text-[25px] lg:leading-[1.1em] lg:text-[36px] 2xl:text-5xl font-Neruda text-secondary-500 font-light mt-2"
          >
            We've created some free resources to <br />
            help you through the planning process
          </h2>
          <button class="mt-4 bg-primary-500 text-xl text-white px-6 py-2">
            Planning Resources
          </button>
        </div>
      </div>
    </section>
        `;
    }
  }
  
  customElements.define("planning-section", Planning);
  
class GetStarted extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
         <section
      class="bg-white md:h-[40vh] lg:h-screen w-screen my-5 mx-auto flex items-center lg:max-h-[1080px] max-w-[1920px]"
    >
      <div
        class="w-[90%] gap-10 lg:gap-0 mx-auto lg:mx-0 md:w-full flex flex-col md:flex-row"
      >
        <div class="md:w-[300px]  lg:w-[460px] xl:w-[640px] 2xl:w-1/2">
          <img
            src="./assets/images/men.jpg"
            class="w-full h-full object-cover"
            alt=""
          />
        </div>
        <div class=" md:w-1/2 flex items-center justify-center">
          <div class="flex flex-col gap-5 lg:gap-8 lg:w-2/3">
            <h3
              class="text-primary-500 font-Montserrat font-bold uppercase text-base tracking-widest"
            >
              GET STARTED
            </h3>
            <p
              class="leading-[0.8] 2xl:text-7xl text-3xl md:text-[40px] lg:text-[52px] lg:leading-[0.8] lg:font-light font-Neruda 2xl:font-light text-secondary-500"
            >
              No matter where you are in the process, we’d love to talk
            </p>
            <div class="">
              <button
                class="bg-blue-500 w-fit mb-[14px] px-8 py-2 lg:px-12 lg:py-3.5 text-white"
              >
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
        `;
    }
  }
  
  customElements.define("get-started-section", GetStarted);
  
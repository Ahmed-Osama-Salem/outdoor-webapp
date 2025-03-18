class Navbar extends HTMLElement {
  connectedCallback() {
    // Get attributes from the custom element
    const homeLink = this.getAttribute("home") || "#";
    const aboutLink = this.getAttribute("about") || "#";
    const contactLink = this.getAttribute("contact") || "#";

    this.innerHTML = `
      // <nav class="navbar p-4">
      //   <div class="container mx-auto flex justify-between items-center">
      //     <a href="${homeLink}" class="text-xl font-bold">My Website</a>
      //     <ul class="flex space-x-4">
      //       <li><a href="${homeLink}" class="hover:text-gray-300">Home</a></li>
      //       <li><a href="${aboutLink}" class="hover:text-gray-300">About</a></li>
      //       <li><a href="${contactLink}" class="hover:text-gray-300">Contact</a></li>
      //     </ul>
      //   </div>
      // </nav>
      
    `;
  }
}

customElements.define("main-navbar", Navbar);

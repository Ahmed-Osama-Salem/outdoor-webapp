class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="bg-gray-800 text-white text-center p-4 mt-10">
        <p>&copy; 2025 My Website</p>
      </footer>
    `;
  }
}

customElements.define("main-footer", Footer);

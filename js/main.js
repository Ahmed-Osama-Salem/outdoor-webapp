document.querySelectorAll(".accordion-header").forEach(button => {
    button.addEventListener("click", function () {
        const content = this.nextElementSibling;
        const isActive = this.classList.contains("active");

        // Close all accordions
        document.querySelectorAll(".accordion-header").forEach(header => header.classList.remove("active"));
        document.querySelectorAll(".accordion-content").forEach(item => item.style.maxHeight = null);

        if (!isActive) {
            // Open clicked accordion
            this.classList.add("active");
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});

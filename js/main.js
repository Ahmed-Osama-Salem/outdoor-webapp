document.addEventListener("DOMContentLoaded", function () {
    const accordionHeaders = document.querySelectorAll(".accordion-header");
    const accordionContents = document.querySelectorAll(".accordion-content");

    // Open the first accordion by default
    if (accordionHeaders.length > 0 && accordionContents.length > 0) {
        accordionHeaders[0].classList.add("active");
        accordionContents[0].style.maxHeight = accordionContents[0].scrollHeight + "px";
    }

    accordionHeaders.forEach((button, index) => {
        button.addEventListener("click", function () {
            const content = this.nextElementSibling;
            const isActive = this.classList.contains("active");

            // Close all accordions
            accordionHeaders.forEach(header => header.classList.remove("active"));
            accordionContents.forEach(item => item.style.maxHeight = null);

            if (!isActive) {
                // Open clicked accordion
                this.classList.add("active");
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});

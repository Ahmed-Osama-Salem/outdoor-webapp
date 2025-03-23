document.addEventListener("DOMContentLoaded", function () {
    const accordionHeaders = document.querySelectorAll(".accordion-header");
    const accordionContents = document.querySelectorAll(".accordion-content");

    // Open the first accordion by default
    if (accordionHeaders.length > 0 && accordionContents.length > 0) {
        accordionHeaders[0].classList.add("active");
        accordionContents[0].style.maxHeight = accordionContents[0].scrollHeight + "px";
    }

    accordionHeaders.forEach(header => {
        header.addEventListener("click", function () {
            const content = this.nextElementSibling;
            const isActive = this.classList.contains("active");

            if (isActive) {
                // Close if already open
                this.classList.remove("active");
                content.style.maxHeight = null;
            } else {
                // Open clicked accordion
                this.classList.add("active");
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});

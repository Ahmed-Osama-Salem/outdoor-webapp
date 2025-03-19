document.querySelectorAll(".accordion-header").forEach(button => {
    button.addEventListener("click", function () {
        const content = this.nextElementSibling;
        const icon = this.querySelector("span:last-child");

        if (content.style.maxHeight) {
            // Close the currently open accordion
            content.style.maxHeight = null;
            icon.textContent = "+";
        } else {
            // Close all other accordions
            document.querySelectorAll(".accordion-content").forEach(item => item.style.maxHeight = null);
            document.querySelectorAll(".accordion-header span:last-child").forEach(icon => icon.textContent = "+");

            // Open the selected accordion
            content.style.maxHeight = content.scrollHeight + "px";
            icon.textContent = "−";
        }
    });
});
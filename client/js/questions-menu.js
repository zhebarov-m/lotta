document.addEventListener("DOMContentLoaded", function() {
    const faqItems = document.querySelectorAll(".faq__item");

    faqItems.forEach(function(item) {
        const icon = item.querySelector(".icon");
        item.addEventListener("click", function() {
            const description = this.querySelector(".faq__item_desc");
            if (description.classList.contains("show")) {
                description.classList.remove("show");
                icon.textContent = "+";
                this.classList.remove("active");
            } else {
                faqItems.forEach(function(item) {
                    const desc = item.querySelector(".faq__item_desc");
                    const icon = item.querySelector(".icon");
                    if (desc.classList.contains("show")) {
                        desc.classList.remove("show");
                        icon.textContent = "+";
                        item.classList.remove("active");
                    }
                });
                description.classList.add("show");
                icon.textContent = "-";
                this.classList.add("active");
            }
        });
    });
});

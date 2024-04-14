document.addEventListener("DOMContentLoaded", function() {
    const faqItems = document.querySelectorAll(".faq__item");

    faqItems.forEach(function(item) {
        const icon = item.querySelector(".icon"); // Перемещаем объявление переменной icon сюда
        item.addEventListener("click", function() {
            const description = this.querySelector(".faq__item_desc");
            if (description.classList.contains("show")) {
                description.classList.remove("show");
                icon.textContent = "+";
                this.classList.remove("active");
            } else {
                // Сначала скрываем все описания и удаляем класс active у всех элементов
                faqItems.forEach(function(item) {
                    const desc = item.querySelector(".faq__item_desc");
                    const icon = item.querySelector(".icon"); // Перемещаем объявление переменной icon сюда
                    if (desc.classList.contains("show")) {
                        desc.classList.remove("show");
                        icon.textContent = "+";
                        item.classList.remove("active");
                    }
                });
                // Затем показываем описание текущего элемента и добавляем класс active
                description.classList.add("show");
                icon.textContent = "-";
                this.classList.add("active");
            }
        });
    });
});

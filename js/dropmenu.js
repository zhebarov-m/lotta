const listItems = document.querySelectorAll('.areas__list .list__item')

console.log(listItems)

listItems.forEach(item => {

    item.addEventListener('click', () => {
        const  additionalText = item.querySelector('.hidden-text');

        const isVisible = additionalText.classList.contains('show')

        if (isVisible) {
            additionalText.classList.remove('show')
        } else {
            document.querySelectorAll('.hidden-text').forEach(text => {
                text.classList.remove('show')
            });

            additionalText.classList.add('show')
        }
    })
})

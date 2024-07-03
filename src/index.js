const faqButton = document.querySelectorAll('.faq-button');

faqButton.forEach(faqButton => {
    faqButton.addEventListener('click', event => {
        faqButton.classList.toggle('active')
        const faqBody = faqButton.nextElementSibling
        if(faqButton.classList.contains('active')) {
            faqBody.style.maxHeight = faqBody.scrollHeight + "px"
        } else {
            faqBody.style.maxHeight = 0;
        }
    })
})
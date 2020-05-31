const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function() {
        const pageId = card.getAttribute("id")
        window.location.href = `/receita?id=${pageId}`

    })
}

const showText = document.querySelector('.text');
const showHide = document.querySelector('.hide');

showHide.addEventListener('click', function() {
    if (showHide.innerHTML == 'Esconder') {
        showText.classList.add('active')
        showHide.innerHTML = 'Mostrar'
    } else {
        showText.classList.remove('active')
        showHide.innerHTML = 'Esconder'
    }
})



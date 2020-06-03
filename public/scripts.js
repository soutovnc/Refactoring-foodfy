const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function() {
        const pageId = card.getAttribute("id")
        window.location.href = `/receita?id=${pageId}`

    })
}

const showText = document.querySelector('.text')
const showHide = document.querySelectorAll('.hide')

for(let show of showHide) {
    show.addEventListener('click', () => {
        if (show.innerHTML == 'Esconder') {
            showText.classList.add('active')
            show.innerHTML = 'Mostrar'
        } else {
            showText.classList.remove('active')
            show.innerHTML = 'Esconder'
        }
    })
}
    

const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for(let card of cards) {
    card.addEventListener("click", function() {
        const imgId = card.getAttribute('id');
        const title = card.querySelector('.card_title').innerHTML;
        const author = card.querySelector('.card_author').innerHTML;
        
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('img').src = `/layouts/assets/${imgId}.png`

        modalOverlay.querySelector('.modal_title').innerHTML = `${title}`
        modalOverlay.querySelector('.modal_author').innerHTML = `${author}`
    })
}

document.querySelector('.close-modal').addEventListener("click", function() {
    modalOverlay.classList.remove('active')
})
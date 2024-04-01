const btnModalOne = document.querySelector('.btn_modal.one');
const modalOne = document.querySelector('.modal.one');
const btnModalTwo = document.querySelector('.btn_modal.two');
const modalTwo = document.querySelector('.modal.two');
const btnModalThree = document.querySelector('.btn_modal.three');
const modalThree = document.querySelector('.modal.three');
const modalBg = document.querySelector('.modal_bg');
const modals = document.querySelectorAll('.modal')

btnModalOne.addEventListener('click', () => {
    modalOne.style.transform = 'scale(1)'
    modalBg.style.transform = 'scale(1)'
})
btnModalTwo.addEventListener('click', () => {
    modalTwo.style.transform = 'scale(1)'
    modalBg.style.transform = 'scale(1)'
})
btnModalThree.addEventListener('click', () => {
    modalThree.style.transform = 'scale(1)'
    modalBg.style.transform = 'scale(1)'
})

modals.forEach(modal => {
    modal.addEventListener('click', () => {
        modal.style.transform = 'scale(0)'
        modalBg.style.transform = 'scale(0)'
    })
})
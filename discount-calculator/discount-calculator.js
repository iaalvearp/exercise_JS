const price = document.getElementById('price');
const discount = document.getElementById('discount');
const output = document.getElementById('output');
const btnDiscount = document.getElementById('btn-discount');

btnDiscount.addEventListener('click', () => {
    output.textContent = (price.value * (discount.value / 100)).toFixed(2)
})
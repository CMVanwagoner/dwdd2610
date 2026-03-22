console.log("connection terminated.")

const btnElement = document.querySelector('#primaryNav > button');
const navElement = document.querySelector('#primaryNav > ul');

btnElement.addEventListener('click', () => {
    console.log("click!")
    btnElement.classList.toggle('open');
    navElement.classList.toggle('open');
});
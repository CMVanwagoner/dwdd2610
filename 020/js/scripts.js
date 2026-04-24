const btnElement = document.querySelector('#hamburgerBtn');
const navElement = document.querySelector('#primaryNav > ul');

btnElement.addEventListener('click', () => {
    btnElement.classList.toggle('open');
    navElement.classList.toggle('open');
})
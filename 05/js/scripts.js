const navElement = document.querySelector('#theNav')
const btnElement = document.querySelector('#theButton')

btnElement.addEventListener('click', () => {
    btnElement.classList.toggle('open');
    navElement.classList.toggle('open');
});

//reviews JSON
import {reviews} from './reviews.js';
const myTarget = document.querySelector("#review");
for (let x = 0; x < reviews.length; x++) {
    const mySection = document.createElement('section')
    const myName = document.createElement('h3')
    myName.textContent = reviews[x].name

    const myRating = document.createElement('div')
    console.log(reviews[x].stars)
    for (let step = 0; step<reviews[x].stars; step++) {
        const genIndicator = document.createElement('img')
        genIndicator.src = "images/svg/star.svg"
        myRating.appendChild(genIndicator)
    }

    const myReview = document.createElement('p')
    myReview.textContent = reviews[x].text

    mySection.appendChild(myName);
    mySection.appendChild(myRating);
    mySection.appendChild(myReview);
    myTarget.appendChild(mySection);
}

console.log("Connection Terminated")
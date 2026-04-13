const hb = document.querySelector('#hamburgerBtn');
const pw = document.querySelector('#pageWrapper');

import { listings } from "../data/listing.js"; // Import JSON data
//console.log(listings); // Works!

// Hamburger menu toggle
hb.addEventListener('click', () => {
    pw.classList.toggle('moveOver');
})

const listingCards=document.querySelector('#cards')

listings.forEach(listing => {
    const cardSection=document.createElement('section')
    
    // creates the picture

    const cardImg = document.createElement('picture');
    cardImg.innerHTML = `
        <source srcset=  "${listing.image.small}" alt="${listing.name} media="(max-width: 250px)"/>
        <img src= "${listing.image.large}" alt="${listing.name}" />
    `;// end innerHTML

    const listingName = document.createElement('h3');
    listingName.textContent = listing.name;

    const listingAddress = document.createElement('p');
    listingAddress.innerHTML = `${listing.address[0]}<br>${listing.address[1]}`;

    const listingPhone = document.createElement('a');
    listingPhone.textContent = listing.phone;
    listingPhone.href = `tel:${listing.phone}`;

    // Assemble and Append (Image)

    // Assemble and Append (Everything)
    cardSection.appendChild(listingName);
    cardSection.appendChild(cardImg);

    console.log(cardImg);
    cardSection.appendChild(listingAddress);
    cardSection.appendChild(listingPhone);
    listingCards.appendChild(cardSection);
});

console.log(listings);


const file = "https://bambyboi.github.io/wdd230_samuel/Chamber/jason/data.json";
const cards = document.querySelector('.cards');


fetch(file)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        const directory = jsonObject['directory'];
        console.table(jsonObject); // temporary checking for valid response and data parsing
        directory.forEach(displayCompanies);
    });

function displayCompanies(directory_1) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    let p2 = document.createElement('p');
    let a = document.createElement('a');
    let portrait = document.createElement('img');

    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${directory_1.company}`;
    p.textContent = `Address: ${directory_1.address}`;
    p2.textContent = `Phone: ${directory_1.phone}`;
    a.textContent = `Website: ${directory_1.website}`;

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', directory_1.imageurl);
    portrait.setAttribute('alt', `Portait of ${directory_1.company} ${directory_1.address}`);
    portrait.setAttribute('loading', 'lazy');
    a.setAttribute('href', directory_1.website);
    //`string text ${expression} string text`
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(p);
    card.appendChild(p2);
    card.appendChild(portrait);
    card.appendChild(a);

    // Add/append the existing HTML div with the cards class with the section(card)
    cards.appendChild(card);
}


window.onload = get_year();
window.onload = get_date();
window.onload = get_day_month_year();


function get_date() {
    var LastModif = new Date(document.lastModified);
    console.log(LastModif);
    document.getElementById("date").innerHTML = LastModif;
}

function get_year() {
    var date = new Date().getFullYear();
    console.log(date);
    document.querySelector("#year").innerHTML = date;
}

function get_day_month_year() {
    const datefield = document.querySelector(".date");
    const datefieldUK = document.querySelector("aside");
    const now = new Date();
    const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
        now
    );
    const fulldateUK = new Intl.DateTimeFormat("en-UK", {
        dateStyle: "full"
    }).format(now);
    datefield.innerHTML = `<em>${fulldate}</em>`;
    // broken
    // datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;
}
// Get all images to be replaced
const imagesToLoad = document.querySelectorAll("[data-src]");

// function to load the actual image
const loadImages = (img) => {
    img.setAttribute("src", img.getAttribute("data-src"));
    img.onload = () => {
        img.removeAttribute("data-src");
    };
};

const imageOptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px",
};

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    }, imageOptions);
    imagesToLoad.forEach((img) => {
        observer.observe(img);
    });
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}

function toggleMenu() {
    document.getElementsByClassName("nav_1")[0].classList.toggle("responsive");
}

// initialize display elements
const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".visits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.

// how should this be improved?
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);



/*--------------------------Removing and adding grid--------------------*/

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".cards");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
    // example using arrow function
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}
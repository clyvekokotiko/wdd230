const file = "https://clyvekokotiko.github.io/wdd230/chamber/js/json/data.json";
const cards = document.querySelector('.cards');


fetch(file)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        const directory = jsonObject['directory'];
        console.table(jsonObject); 
        directory.forEach(displayCompanies);
    });

function displayCompanies(directory_1) {
   
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    let p2 = document.createElement('p');
    let a = document.createElement('a');
    let portrait = document.createElement('img');

    
    h2.textContent = `${directory_1.company}`;
    p.textContent = `Address: ${directory_1.address}`;
    p2.textContent = `Phone: ${directory_1.phone}`;
    a.textContent = `Website: ${directory_1.website}`;

    portrait.setAttribute('src', directory_1.imageurl);
    portrait.setAttribute('alt', `Portait of ${directory_1.company} ${directory_1.address}`);
    portrait.setAttribute('loading', 'lazy');
    a.setAttribute('href', directory_1.website);
    card.appendChild(h2);
    card.appendChild(p);
    card.appendChild(p2);
    card.appendChild(portrait);
    card.appendChild(a);

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
}
const imagesToLoad = document.querySelectorAll("[data-src]");

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

const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("visits-ls"));

if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = `This is your first visit!`;
}


numVisits++;
localStorage.setItem("visits-ls", numVisits);

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".cards");

gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showList); 

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}
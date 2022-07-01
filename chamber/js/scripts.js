function toggleMenu (){
    document.getElementById("primary-nav").classList.toggle("open");
    document.getElementById("hambuger-btn").classList.toggle("open");
}

document.getElementById("hambuger-btn").onclick = toggleMenu;

let daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
let monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


//footer
document.querySelector("#last-modified").textContent = document.lastModified

//message
let d = new Date();
let day = d.getDate();

let dayofweek = daylist[d.getDay()];
let messageOfDay = "works";

if (dayofweek == "Monday") {
    messageOfDay = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
} 
else if (dayofweek == "Tuesday") {
    messageOfDay = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
} 
else {
    messageOfDay = "No Messages today.";
}

document.querySelector("#header-date-id").textContent = 
`${daylist[new Date().getDay()]}, ${new Date().getDate()} ${monthList[new Date().getMonth() ]} ${new Date().getFullYear()} | ${messageOfDay}`;


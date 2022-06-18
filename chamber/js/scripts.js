function toggleMenu (){
    document.getElementById("primary-nav").classList.toggle("open");
    document.getElementById("hambuger-btn").classList.toggle("open");
}

document.getElementById("hambuger-btn").onclick = toggleMenu;

let daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
let monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

document.querySelector("#header-date-id").textContent = 
`${daylist[new Date().getDay()]}, ${new Date().getDate()} ${monthList[new Date().getMonth() ]} ${new Date().getFullYear()}`;

//footer
document.querySelector("#last-modified").textContent = document.lastModified


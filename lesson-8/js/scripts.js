let daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
let monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

document.querySelector("#date").textContent = 
`${daylist[new Date().getDay()]}, ${new Date().getDate()} ${monthList[new Date().getMonth() ]} ${new Date().getFullYear()}`;

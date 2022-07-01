let d = new Date();

// Set the value of the "date" field
document.getElementById("date").value = d.toDateString();

// Set the value of the "time" field
let hours = d.getHours();
let mins = d.getMinutes();
let seconds = d.getSeconds();
document.getElementById("time").value = hours + ":" + mins + ":" + seconds;
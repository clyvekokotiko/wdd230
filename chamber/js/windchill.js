let temp = parseFloat(document.querySelector("#temperature").innerHTML);
console.log(`Temperature: ${temp}`);
let windSpeed = parseFloat(document.querySelector("#wind-speed").innerHTML);
console.log(`Wind Speed: ${windSpeed}`);


if (windSpeed > 3 && temp <= 50){
    
    calculateWindChill(temp, windSpeed);   
} 
else{
    document.querySelector("#wind-chill").innerHTML = `N/A`;
}
console.log(windSpeed);
function calculateWindChill(temp, windSpeed){
    let windChill = 35.74 + 0.6215 * temp - 35.75 * (Math.pow(windSpeed, 0.16) ) + 0.4275 * temp * (Math.pow(windSpeed, 0.16));
    console.log("function is called!");
    console.log(windChill);
    document.querySelector("#wind-chill").innerHTML = `${windChill.toFixed(2)} Units`;
}

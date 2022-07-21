const currentTemp = document.querySelector( "#temperature" ) ;
const weatherIcon = document.querySelector( "#weather-icon" ) ;
const captionDesc = document.querySelector( "#figcaption" ) ;
const windSpeed = document.querySelector("#wind-speed") ;
const humidity = document.querySelector("#humidity") ;
const forcast =document.querySelector("#forcast") ;
const dayOne =document.querySelector("#day-1") ;
const dayTwo =document.querySelector("#day-2") ;
const dayThree =document.querySelector("#day-2") ;
const icon1 = document.querySelector("#icon-1") ;
const icon2 = document.querySelector("#icon-2") ;
const icon3 = document.querySelector("#icon-3") ;


const url = "https://api.openweathermap.org/data/2.5/weather?q=bulawayo&units=imperial&appid=28e9fe34a522ddf793bc5833201ecfa0" ;


apiFetch() ;

async function apiFetch() {
    try {
        const response = await fetch( url ) ;
        if ( response.ok ) {
            const data = await response.json() ;
            displayResults( data ) ;
        } else {
            throw Error( await response.text() ) ;
        }
    } catch ( error ) {
        console.log( error ) ;
    }
}

function displayResults( weatherData ) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed( 0 )}</strong>` ;
    windSpeed.innerHTML = `<strong>${weatherData.wind.speed}</strong>` ; // wind speed
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png` ;
    let desc = weatherData.weather[0].description ;
    weatherIcon.setAttribute( "src", iconsrc ) ;
    weatherIcon.setAttribute( "alt", desc ) ;
    desc = desc.toLowerCase().replace( /\b[a-z]/g, UpperCase ) ;
    captionDesc.textContent = desc ;
    humidity.innerHTML = `<strong>${weatherData.main.humidity.toFixed( 0 )}</strong>` ;

    //day 1
    dayOne.innerHTML = `<strong>${weatherData.main.temp.toFixed( 0 )}</strong>` ;
    const iconsrc1 = `https://openweathermap.org/img/w/${weatherData.weather[1].icon}.png` ;
    let desc1 = weatherData.weather[1].description ;
    icon1.setAttribute( "src", iconsrc1 ) ;
    icon1.setAttribute( "alt", desc1 ) ;
    desc1 = desc1.toLowerCase().replace( /\b[a-z]/g, UpperCase ) ;
    captionDesc.textContent = desc1 ;
    //day 2
    dayTwo.innerHTML = `<strong>${weatherData.main.temp.toFixed( 0 )}</strong>` ;
    const iconsrc2 = `https://openweathermap.org/img/w/${weatherData.weather[2].icon}.png` ;
    let desc2= weatherData.weather[2].description ;
    icon2.setAttribute( "src", iconsrc2 ) ;
    icon2.setAttribute( "alt", desc2 ) ;
    desc2 = desc1.toLowerCase().replace( /\b[a-z]/g, UpperCase ) ;
    captionDesc.textContent = desc2 ;
    //day 3
    dayThree.innerHTML = `<strong>${weatherData.main.temp.toFixed( 0 )}</strong>` ;
    const iconsrc3 = `https://openweathermap.org/img/w/${weatherData.weather[3].icon}.png` ;
    let desc3 = weatherData.weather[1].description ;
    icon3.setAttribute( "src", iconsrc3 ) ;
    icon3.setAttribute( "alt", desc3 ) ;
    desc1 = desc1.toLowerCase().replace( /\b[a-z]/g, UpperCase ) ;
    captionDesc.textContent = desc3 ;
}

function UpperCase( letter ) {
    return letter.toUpperCase() ;
}
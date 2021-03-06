const currentTemp = document.querySelector( "#current-temp" ) ;
const weatherIcon = document.querySelector( "#weather-icon" ) ;
const captionDesc = document.querySelector( "figcaption" ) ;
const url = "https://api.openweathermap.org/data/2.5/weather?q=bulawayo&units=metric&appid=28e9fe34a522ddf793bc5833201ecfa0" ;


//28e9fe34a522ddf793bc5833201ecfa0
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
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png` ;
    let desc = weatherData.weather[0].description ;
    weatherIcon.setAttribute( "src", iconsrc ) ;
    weatherIcon.setAttribute( "alt", desc ) ;
    desc = desc.toLowerCase().replace( /\b[a-z]/g, UpperCase ) ;
    captionDesc.textContent = desc ;
}

function UpperCase( letter ) {
    return letter.toUpperCase() ;
}
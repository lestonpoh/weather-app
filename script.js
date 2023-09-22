async function searchCurrentWeather(query){
    try{
        const API_KEY = '4ac2858f0bc24a3fb7d151224231909'
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${query}`)
        const weatherData = await response.json()
        const processedInfo = processData(weatherData)
        displayInfo(processedInfo)

    }catch(error){
        const locationName = document.querySelector("#location-name")
        locationName.textContent = 'Location not found.'
    }
    
}

function processData(weatherData){
    const location = weatherData['location']['name']
    const country = weatherData['location']['country']
    const currentTime = weatherData['location']['localtime']
    const condition = weatherData['current']['condition']['text']
    const tempC = weatherData['current']['temp_c']
    const tempFeelsLikeC = weatherData['current']['feelslike_c']
    const humidity = weatherData['current']['humidity']
    const precipitationmm = weatherData['current']['precip_mm']
    const uvIndex = weatherData['current']['uv']
    const windkph = weatherData['current']['wind_kph']
    const windDirection = weatherData['current']['wind_dir']
    const cloud = weatherData['current']['cloud']
    const visibility = weatherData['current']['vis_km']
    const pressure = weatherData['current']['pressure_mb']
    const gust = weatherData['current']['gust_kph']
    return {location,country,currentTime, condition, tempC, tempFeelsLikeC,
            humidity, precipitationmm, uvIndex, windkph,
            windDirection,cloud,visibility,pressure,gust}

}

function displayInfo(info){
    const display = document.querySelector("#weather-info")
    display.classList = ""

    const locationName = document.querySelector("#location-name")
    locationName.textContent = `${info.location}, ${info.country}`
    
    const date =document.querySelector('#date')
    date.textContent = info.currentTime.replace(" "," | ")
    
    const temperature = document.querySelector('#temperature')
    temperature.textContent = info.tempC + "°C"

    const feelsLike = document.querySelector('#feels-like')
    feelsLike.textContent = `Feels like ${info.tempFeelsLikeC} °C`

    const condition = document.querySelector('#condition')
    condition.textContent = info.condition

    const windSpeed = document.querySelector('#wind-speed')
    windSpeed.textContent = info.windkph

    const windDirection = document.querySelector('#wind-direction')
    windDirection.textContent = info.windDirection

    const humidity = document.querySelector('#humidity')
    humidity.textContent = info.humidity

    const precipitation = document.querySelector('#precipitation')
    precipitation.textContent = info.precipitationmm

    const uvIndex = document.querySelector('#uvindex')
    uvIndex.textContent = info.uvIndex

    const cloud = document.querySelector('#cloud')
    cloud.textContent = info.cloud

    const visibiliy = document.querySelector('#visibility')
    visibiliy.textContent = info.visibility

    const pressure = document.querySelector('#pressure')
    pressure.textContent = info.pressure

    const gust = document.querySelector("#gust")
    gust.textContent = info.gust


}

const form = document.querySelector("form")
form.addEventListener("submit",async (e)=>{
    e.preventDefault()
    const location = document.querySelector("input").value
    if (location ===""){
        return
    }
    searchCurrentWeather(location)
    
})

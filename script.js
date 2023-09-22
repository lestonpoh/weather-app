async function searchCurrentWeather(query){
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=4ac2858f0bc24a3fb7d151224231909&q=${query}`)
    const weatherData = await response.json()
    const condition = weatherData['current']['condition']['text']
    const tempC = weatherData['current']['temp_c']
    const tempFeelsLikeC = weatherData['current']['feelslike_c']
    const humidity = weatherData['current']['humidity']
    const precipitationmm = weatherData['current']['precip_mm']
    const uvIndex = weatherData['current']['uv']
    const windkph = weatherData['current']['wind_kph']
    const windDirection = weatherData['current']['wind_dir']
    console.log(condition,tempC,tempFeelsLikeC,humidity,precipitationmm,
        uvIndex,windkph,windDirection)
    console.log(weatherData)
}

const form = document.querySelector("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const location = document.querySelector("input").value
    if (location ===""){
        return
    }
    searchCurrentWeather(location)
})
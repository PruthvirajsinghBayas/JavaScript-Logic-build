inputElmt = document.querySelector('#cityInput')
buttonElmt = document.querySelector('#fetchWeatherBTN')
resultElmt = document.querySelector('#showInfo')

buttonElmt.addEventListener('click',()=>{
    cityName = inputElmt.value
    fetchWeatherAPI(cityName)
})

function renderInfo(data){
    console.log(data)
    resultElmt.innerHTML = `<h2>${data.name} <span class='badge bg-secondary'>${data.sys.country}</span></h2>
                    <p>Weather : <span>${data.weather[0].main}</span></p>
                    <i>${data.weather[0].icon}</i>
                    <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="${data.weather[0].icon}">
    `
}


function fetchWeatherAPI(city){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ca018df54353f065aaed7d802825b8be`)
        .then(response=>response.json())
        .then(data=>renderInfo(data))
        .catch(error=>console.log(error))
}
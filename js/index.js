const input = document.querySelector('input')
const image = document.querySelector('img')
const temp = document.querySelector('.temperature')
const city = document.querySelector('.namecity')
const country = document.querySelector('.country')
const humidity = document.querySelector('.humidity')
const region = document.querySelector('.region')

const userAction = async() => {

    const cityValue = input.value;
    console.log(cityValue)

    var newUrl = 'http://api.weatherapi.com/v1/current.json?key=3ca73eab44614aa389e152803221102&q=' + cityValue + '&aqi=no'
    console.log(newUrl)

    const response = await fetch(newUrl)
    const myJson = await response.json()  

    var element = [
        myJson.current.temp_c,
        myJson.current.condition.icon,
        myJson.location.tz_id,
        myJson.location.name,
        myJson.current.humidity,
    ]

    console.log(element)
    
    image.src = element[1]
    temp.innerHTML = element[0] + '°'
    city.innerHTML = element[2]
    country.innerHTML = element[3]
    humidity.innerHTML = element[4] + '%'
    
    var lenghtVar = temp.innerHTML.length;
    console.log(lenghtVar)

    console.log(myJson)
}
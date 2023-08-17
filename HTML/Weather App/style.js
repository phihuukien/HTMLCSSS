var search = document.querySelector('.search')
var city = document.querySelector('.city')
var country = document.querySelector('.country')
var time = document.querySelector('.time')
var value = document.querySelector('.value')
var shortDesc = document.querySelector('.short-desc')
var eye = document.querySelector('.eye span')
var wind = document.querySelector('.wind span')
var sun = document.querySelector('.sun span ')
var content = document.querySelector('.content ')
var body = document.querySelector('body ')

async function changeWeatherUI(capitalSearch){
    
     let ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&appid=b9e2aa4713e07b174350a6a1f8d6f693`
        let data = await fetch(ApiUrl).then(res=> res.json())
        if(data.cod == "404"){
            content.classList.add('hide')
        }else{
            console.log(data)
            content.classList.remove('hide')
        city.innerHTML = data.name
        country.innerHTML = data.sys.country
        eye.innerHTML = data.visibility+ ' (m)'
        wind.innerHTML = data.wind.speed +'(m/s)'
        sun.innerHTML = data.main.humidity + ' (%)'
   
        let temp = Math.round((data.main.temp - 273.15))
             
        value.innerHTML = temp +'<sup>o</sup>C'
        shortDesc.innerHTML = data.weather[0]?data.weather[0].main:''
        time.innerText = new Date().toLocaleString('vi')
        body.setAttribute('class','hot')
       
        if(temp >28){
            body.setAttribute('class','hot')
        }
        if(temp<=27){
            body.setAttribute('class','warm')
        }
        if(temp <=23){
            body.setAttribute('class','cool')
        }
        if(temp <=18){
            body.setAttribute('class','cold')
        }
        
        }
    }
    search.addEventListener('keypress',function(e){
        if(e.code ==="Enter"){
            let capitalSearch  =  search.value.trim()
            changeWeatherUI(capitalSearch)
        }
    })
    changeWeatherUI('ha noi')
    
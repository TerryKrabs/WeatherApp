// Current Temp Api
let inserthere = document.getElementById("currentTemp")

fetch('https://api.openweathermap.org/data/2.5/weather?q=Stockton&appid=fc1e2458b8d43ad75dfc9b71cf4157db&units=imperial')
    .then((response)=>{
  
        return response.json();
    })
    .then((data=> inserthere.innerHTML = Math.floor(data.main.temp_min)))



    
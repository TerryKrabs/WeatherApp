// Current Temp Api
let currenttemp = document.getElementById("CurrentTemp")

fetch('https://api.openweathermap.org/data/2.5/weather?q=Stockton&appid=fc1e2458b8d43ad75dfc9b71cf4157db&units=imperial')
    .then((response)=>{
  
        return response.json();
    })
    .then((data=> currenttemp.innerHTML = Math.floor(data.main.temp)))  

// High Temp Api
let hightemp = document.getElementById("HighTemp")

fetch('https://api.openweathermap.org/data/2.5/weather?q=Stockton&appid=fc1e2458b8d43ad75dfc9b71cf4157db&units=imperial')
    .then((response)=>{
  
        return response.json();
    })
    .then((data=> hightemp.innerHTML = Math.floor(data.main.temp_max)))  

// Low Temp Api
let lowtemp = document.getElementById("LowTemp")

fetch('https://api.openweathermap.org/data/2.5/weather?q=Stockton&appid=fc1e2458b8d43ad75dfc9b71cf4157db&units=imperial')
  .then((response) =>{
    return response.json();
})
 .then((data=> lowtemp.innerHTML = Math.floor(data.main.temp_min)))  

  // Date / Time 
let date = new Date();
let time = new Date();

document.getElementById('Date').innerText = date.toDateString();
document.getElementById('Time').innerText = time.toLocaleTimeString();


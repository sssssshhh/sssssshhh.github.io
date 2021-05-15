const getClassWeather = document.querySelector(".weather");
const myApikey = "6dabee778f485c7231462aba0b87caf1";

function getMyLatandLogSuccess(position){
    getWeather(position.coords.latitude, position.coords.longitude);
}

function getMyLatandLogFailure(position){
    console.log("get My latitude and longitude falure");
}

 function getMyLatandLog(){
    navigator.geolocation.getCurrentPosition(getMyLatandLogSuccess, getMyLatandLogFailure);
 }
 
function getWeather(lat, lon){
    // todo. doseon't working,,why?
    console.log(`${lat}:${lon}`);
    fetch(`api.openweathermap.org/data/2.5/weather?q=London&appid=${myApikey}`).then(
      function(response){
         return console.log("success");
      }
    );
}



function weather(){
    getMyLatandLog();
}

weather();
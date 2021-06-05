const getClassWeather = document.querySelector('.weather'),
      myApikey = '2ee8c98d98db389890d31fcec832db22';

function getMyLatandLogSuccess(position){
    getWeathers(position.coords.latitude, position.coords.longitude);
}

function getMyLatandLogFailure(position){
    console.log('get My latitude and longitude falure');
}

 function getMyLatandLog(){
    navigator.geolocation.getCurrentPosition(getMyLatandLogSuccess, getMyLatandLogFailure);
 }
 
function getWeathers(lat, lon){
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&&units=metric&exclude=hourly,minutely&appid=${myApikey}`)
    .then(response => response.json())
    .then(j => showWeathers(j.daily));
}

function showWeathers(dailyWeather){
    const table = document.createElement('table');
    table.style.color = '#ba03fc';
    table.style.backgroundColor = '#ffffff';
    table.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
    table.style.borderRadius = '30px';
    table.style.padding = '20px';


    for(daily of dailyWeather){
        const tr = document.createElement('tr');
        
        // set date
        const td_date = document.createElement('td');
        td_date.innerText = new Date(daily.dt * 1000).toDateString();
        tr.appendChild(td_date);
        
        // set icon
        const td_icon = document.createElement('td');
        const imgWeather = new Image();
        imgWeather.src = `http://openweathermap.org/img/wn/${daily.weather[0].icon}@2x.png`;
        imgWeather.height = 40;
        imgWeather.width = 50;
        td_icon.appendChild(imgWeather);
        tr.appendChild(td_icon);
        table.appendChild(tr);

        // set temperature
        const td_cel = document.createElement('td');
        const maxTemp = Math.floor(daily.temp.max);
        const minTemp = Math.floor(daily.temp.min);
        td_cel.innerText = `${maxTemp}/${minTemp}℃`;
        tr.appendChild(td_cel);
    }
    getClassWeather.appendChild(table);
}

function weather(){
    getMyLatandLog();
}

weather();
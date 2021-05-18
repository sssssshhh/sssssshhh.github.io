const getClassClock = document.querySelector('.clock');

function setStyle(){
    getClassClock.style.color = "pink",
    getClassClock.style.fontSize = "100px";
}

function getDate(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const currentTime =
    `${hours < 10 ? `0${hours}`:`${hours}`}:${minutes < 10?`0${minutes}`:`${minutes}`}`;
    getClassClock.innerText = currentTime;
    setStyle();
}

function getCurrentDate(){
    setInterval(getDate, 1000);
}

function clock(){
    getCurrentDate();
}

clock();



const userName = document.querySelector('.name_form');
const input = userName.querySelector('input');
const h3 = document.querySelector('h3');

const USER_NAME = "name";
const SHOWING = "showing";

function checkLocalStorage(){
    if(!localStorage.getItem(USER_NAME)){
        userName.classList.add(SHOWING);
        stopSubmit();
    } else {
        userName.classList.remove(SHOWING);
        h3.innerText = `Hi, ${localStorage.getItem(USER_NAME)}`;
        h3.style.color = "pink";
    }
}

function stopSubmit(){
    userName.addEventListener("submit", getUserName2);
}

function getUserName2(event){
    console.log(event); // todo
    event.preventDefault();
    
    // localStorage.setItem(USER_NAME, input.value);
}

function greeting(){
    checkLocalStorage();
}

greeting();

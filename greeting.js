const userName = document.querySelector('.name_form'),
      input = userName.querySelector('input'),
      h3 = document.querySelector('h3');

const USER_NAME = "name";

function checkLocalStorage(){
    if(!localStorage.getItem(USER_NAME)){
        userName.classList.add("showing");
        stopSubmit();
    } else {
        userName.classList.remove("showing");
        h3.innerText = `Hi, ${localStorage.getItem(USER_NAME)}`;
        h3.style.color = "pink";
    }
}

function stopSubmit(){
    userName.addEventListener("submit", getUserName);
}

function getUserName(event){
    event.preventDefault();
    
    localStorage.setItem(USER_NAME, input.value);
}

function greeting(){
    checkLocalStorage();
}

greeting();

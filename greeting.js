const userName = document.querySelector('.name_form'),
      grettingValue = userName.querySelector('input'),
      h3 = document.querySelector('.top_center').querySelector('h3');

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
    
    localStorage.setItem(USER_NAME, grettingValue.value);
}

function greeting(){
    
    grettingValue.style.background = 'none';
    grettingValue.style.border = 'none';
    grettingValue.style.borderBottom = '2px solid pink';
    checkLocalStorage();
}

greeting();

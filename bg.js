const getBody = document.querySelector('body');

function getRandomImages(){
    let randomNum = Math.floor(Math.random() * 5)+ 1;
    let imgSrc = `images/${randomNum}.jpg`;
    reperesntBg(imgSrc);
    setStyleBgImeges();
}

function setStyleBgImeges(){
    if(document.querySelector('.bgImeges')){

        let bgImeges = document.querySelector('.bgImeges');

        bgImeges.style.position = 'absolute';
        bgImeges.style.top = 0;
        bgImeges.style.left = 0;
        bgImeges.style.width = '100%';
        bgImeges.style.height = '100%';
    }
}

function reperesntBg(imgSrc){
    const img = new Image();
    img.src = imgSrc;
    img.classList.add('bgImeges');
    getBody.prepend(img);
}

function setBg(){
    getRandomImages();
}

function bg(){
    setBg();
}

bg();
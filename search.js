const divLink = document.querySelector('.links'),
    searchForm = document.querySelector('.search-form'),
    searchValue = searchForm.querySelector('input'),
    divTopRowH3 = document.querySelector('.top_row').querySelectorAll('h3');

function design(){
    divTopRowH3.forEach(h3 => {
        h3.style.color = 'pink';
    });

    searchValue.style.background = 'none';
    searchValue.style.border = 'none';
    searchValue.style.borderBottom = '2px solid pink';

    searchValue.style.backgroundImage = 'url(images/assets/search.png)';
    searchValue.style.backgroundRepeat = 'no-repeat';
    searchValue.style.backgroundSize = '15px';
    
    searchValue.style.paddingLeft = '20px';

    searchValue.style.cursor = 'pointer';
}


function search(){
    design();

    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        location.replace(`https://www.google.com/search?q=${searchValue.value}`);
    });
}

search();
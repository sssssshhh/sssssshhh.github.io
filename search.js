const divLink = document.querySelector('.links'),
    searchForm = document.querySelector('.search-form'),
    searchValue = searchForm.querySelector('input'),
    divTopRowH3 = document.querySelector('.top_row').querySelectorAll('h3');

function design(){
    divTopRowH3.forEach(h3 => {
        h3.style.color = 'pink';
        h3.style.cursor = 'pointer';
    });

    searchValue.style.background = 'none';
    searchValue.style.border = 'none';
    searchValue.style.borderBottom = '2px solid pink';
}


function search(){
    design();

    divLink.addEventListener('click', () => {
        searchForm.classList.add('showing');
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            location.replace(`https://www.google.com/search?q=${searchValue.value}`);
        })
    });
}

search();
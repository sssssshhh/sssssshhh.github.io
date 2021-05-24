const divLink = document.querySelector('.link');
const searchForm = document.querySelector('.search-form');
const searchValue = searchForm.querySelector('input');

function search(){
    divLink.addEventListener('click', () => {
        searchForm.classList.add('showing');
        searchForm.addEventListener('submit', (e) => {
            console.log(e);
            e.preventDefault();
            location.replace(`https://www.google.com/search?q=${searchValue.value}`);
        })
    });
}

search();
const topRowDiv = document.querySelector('.top_row'),
      LinksDiv = document.querySelector('.top_row').querySelector('.links'),
      weatherDiv = document.querySelector('.top_row').querySelector('.weather'),
      searchInput = document.querySelector('#search-input');

function topRow(){
    topRowDiv.style.height = '200px';
    LinksDiv.style.float = 'left';
    weatherDiv.style.float = 'right';

    searchForm.style.paddingTop = '25px';
    searchForm.style.paddingLeft = '60px';
}

topRow();
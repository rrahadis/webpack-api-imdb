import $ from 'jquery';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';


const main = () => {
    
    //deklarasi variabel
    const searchElement = document.querySelector("search-bar");
    const heroListElement = document.querySelector("#heroList");
    const searching = document.querySelector(".searching");
    
    //program untuk card list
    const onButtonSearchClicked = () => {
        DataSource.searchHero(searchElement.value)
            .then(renderResult)
            .catch(fallbackResult)
    };

    const renderResult = results => {
        heroListElement.innerHTML = "";
        searching.innerHTML = `<h5>Showing movies for ${searchElement.value}</h5>`;
        results.forEach(function (data) {   
            const heroElement = document.createElement("div");
            heroElement.setAttribute("class", "hero");
            heroElement.innerHTML = `
                 <a href="#"><div class="poster-movie"" id="detail" class="btn btn-dark btn-sm btn-block position-relative" data-toggle="modal" 
                 data-target="#exampleModal" value="${data.imdbID}">
                    <img class="img-poster" onError="this.onerror=null;this.src='https://i.pinimg.com/originals/5c/70/eb/5c70eb72c5ac5c2c2b298a2637c0bf0b.png';" src="${data.Poster}" alt="${data.Title}(${data.Year})" />
                    <div class="img-description">
                    </div>
                 </div>
                 
                </a>
                <h6 class="mobile-info">${data.Title}(${data.Year})</h6>
                <p class="poster-info">${data.Title}(${data.Year})</p>`;
                
            heroListElement.append(heroElement);
            })
            
    };

    const fallbackResult = message => {
        heroListElement.innerHTML = "";
        heroListElement.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    };

    searchElement.clickEvent = onButtonSearchClicked;
   
};

//program untuk modal bootstrap
const modalBody = document.querySelector(".modal-body");

$('#heroList').on('click', '.poster-movie', function() {
    DataSource.searchHeroID($(this).attr('value'))
            .then(idResult) 
});

//program untuk search dengan ID
const idResult = dataId => {
    modalBody.innerHTML = "";
    modalBody.innerHTML += `<div class="row">
        <div class="col-sm-4">
            <img class="img-fluid img-modal" src="${dataId.Poster}" onError="this.onerror=null;this.src='https://i.pinimg.com/originals/5c/70/eb/5c70eb72c5ac5c2c2b298a2637c0bf0b.png';" alt="image can't be loaded">
        </div>
        <div class="col-sm-8 info-modal">
            <div class="row">
                <h5>${dataId.Title} (${dataId.Year})</h5>
            </div>
            <div class="row">
                <p>${dataId.Genre}</p>
            </div>
            <div class="row">
                <p>Director: ${dataId.Director}</p>
            </div>
            <div class="row">
                <p>Actor: ${dataId.Actors}</p>
            </div>
            <div class="row">
                Story:<br>
                <p>${dataId.Plot}</p>
            </div>
        </div>
    </div>`;
};

export default main;


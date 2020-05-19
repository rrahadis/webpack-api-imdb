import $ from 'jquery';
import 'select2/dist/css/select2.css';

class SearchBar extends HTMLElement {

    connectedCallback(){
        this.render();
    }
   
    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }
  
    get value() {
        return this.querySelector(".select-hero").value;
  
    }
    render() {
        this.innerHTML = `
            <div class="search">
                <div class="card">
                    <div class="card-body">
                        <div class="row">                       
                            <h3 class="text-center">Search SUPERHERO Movie</h3>
                         </div>
                        <div class="row">
                            <select class="select-hero">
                                <option>choose your hero name..</option>
                                <option value="Ant-man">Ant-Man</option>
                                <option value="Aquaman">Aquaman</option>
                                <option value="Asterix">Asterix</option>
                                <option value="Batman">Batman</option>
                                <option value="Black Canary">Black Canary</option>
                                <option value="Black Panther">Black Panther</option>
                                <option value="Captain America">Captain America</option>
                                <option value="Captain Marvel">Captain Marvel</option>
                                <option value="Catwoman">Cat Woman</option>
                                <option value="Conan the barbarian">Conan the barbarian</option>
                                <option value="Daredevil">Daredevil</option>
                                <option value="Doctor Strange">Doctor Strange</option>
                                <option value="Elektra">Elektra</option>
                                <option value="Fantastic Four">Fantastic Four</option>
                                <option value="Ghost Rider">Ghost Rider</option>
                                <option value="Green Latern">Green Latern</option>
                                <option value="Hellboy">Hellboy</option>
                                <option value="Hulk">Incredible Hulk</option>
                                <option value="Iron Fist">Iron Fist</option>
                                <option value="Iron Man">Iron Man</option>
                                <option value="Robin">Robin</option>
                                <option value="Spider-Man">Spider-Man</option>
                                <option value="Superman">Superman</option>
                                <option value="Teenage Mutant Ninja Turtles">Teenage Mutant Ninja Turtles</option>
                                <option value="Thor">Thor</option>
                                <option value="The Avengers">The Avengers</option>
                                <option value="The Wasp">The Wasp</option>
                                <option value="Watchmen">Watchmen</option>
                                <option value="Wolverine">Wolverine</option>
                                <option value="Wonder Woman">Wonder Woman</option>
                                <option value="X-Men">X-Men</option>
                                <option value="Zatanna">Zatanna</option>
                                <option value="Zatara">Zatara</option>
                            </select>
                        </div>
                        <div class="row">
                            <button type="submit" id="button-hero" class="btn btn-dark btn-block">Search</button>
                        </div>
                    </div>
                </div>
            </div>`;

       this.querySelector("#button-hero").addEventListener("click", this._clickEvent);

    }
 }

$(document).ready(function() {
    $('.select-hero').select2({
        theme: "bootstrap"
    });
});
 

$(window).resize(function() { 
    if (document.documentElement.clientWidth <= 560 || document.documentElement.clientWidth >= 1024) {
        this.location.reload();
    }    
});


customElements.define("search-bar", SearchBar);
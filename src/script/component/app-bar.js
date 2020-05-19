import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
class AppBar extends HTMLElement {

  
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `
        <style>
          #logo{
            padding-bottom:10px;
          }
        </style>
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark justify-content-center align-items-start">
        <button class="navbar-toggler mr-auto" type="button" data-toggle="collapse" data-target="#navbar">
            <span class="navbar-toggler-icon"></span>
        </button>
        <img src="https://i.pinimg.com/originals/ee/8f/16/ee8f1676ad1c2d2820b0493c93102497.png" width="80px" height="50px" id="logo" class="navbar-brand position-absolute align-items-start">
        <div class="navbar-collapse collapse" id="navbar">
            <ul class="navbar-nav justify-content-center">
                <li class="nav-item">
                    <a class="nav-link" onclick="{location.reload()}" href="">Clear All</a>
                </li>
    </nav>
    `;
    }
 }

 customElements.define("app-bar", AppBar);
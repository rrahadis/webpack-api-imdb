import "regenerator-runtime";
import "./styles/style.css";
import 'bootstrap';
import 'select2';
import "./script/component/app-bar.js";
import "./script/component/search-bar.js";
import main from "./script/view/main.js";

document.addEventListener("DOMContentLoaded", main);
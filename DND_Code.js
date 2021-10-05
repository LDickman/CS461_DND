//import { async } from "regenerator-runtime";

const api_race = 'https://www.dnd5eapi.co/api/races/';
//var race = 'human'
var apiKey = '/traits'
var input;

window.addEventListener('load', (event) => {
    console.log("page is loaded");
    setup();
});

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function raceSelect() {
    document.getElementById("raceDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function raceChoice() {
    var ul = document.getElementById('raceList');
    console.log(ul);
    var items = ul.getElementsByTagName('li');
    console.log(items);
    console.log(items[0].textContent);   // knows that textcontext works
    ul.addEventListener("click", function (e) {
        for (i = 0; i < items.length -1; i++) {
            if (e.target == items[i]) {
                console.log(items[i].textContent);
                raceAsk(items[i].textContent);
            }
        }
    });
}

async function setup() {
    console.log("starting");
    var button = document.querySelector('#submit');
    console.log(input);
    button.addEventListener('click', (event) => {
        raceAsk(document.querySelector('#race').value);
    });
    raceChoice();
}

async function raceAsk(input) {
    console.log("Race: " + input);
    const url = api_race + input;
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    printData(data);   
}


async function printData(data) {
    console.log(data);
    const { name, speed, ability_bonuses, alignment, age, size_description, starting_proficiencies,
        starting_proficiency_options, language_desc, traits, subraces} = data;
    console.log("Count: " + count);
    console.log("Results: " + results);
    var String_Array = results.map(function (el) {
        return el.name;
    });
    var url_Array = results.map(function (el) {
        return el.url;
    });
    var url_Array = results.map(function (el) {
        return el.url;
    });
    console.log(url_Array);
    document.querySelector("#results").textContent = String_Array.join(',     ');
    document.querySelector('#count').textContent = count;
    document.querySelector('#des').textContent = count;
    console.log("printing");
}

function getOneAbilityScores() {
    return Math.floor(Math.random() * 15);
}


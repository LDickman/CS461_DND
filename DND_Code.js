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
    console.log("Name: " + name);
    console.log("speed: " + speed);
    var bonuses_Array = ability_bonuses.map(function (el) {
        return el.bonus;
    });
    var proficiences_Array = starting_proficiencies.map(function (el) {
        return el.name;
    });
    var traits_Array = traits.map(function (el) {
        return el.name;
    });
    var subraces_Array = subraces.map(function (el) {
        return el.name;
    });
    var skills_Array = starting_proficiency_options.map(function (el) {
        return el.name;
    });
    console.log(url_Array);
    document.querySelector("#results").textContent = traits_Array.join(',     ');
    document.querySelector('#name').textContent = name;
    document.querySelector('#speed_race').textContent = speed;
    document.querySelector('#size').textContent = size_description;
    document.querySelector('#race-age').textContent = age;
    document.querySelector('#race-alignment').textContent = alignment;
    document.querySelector('#speed_race').textContent = speed;
    document.querySelector('#language').textContent = language_desc;
    document.querySelector("#weapon").textContent = proficiences_Array.join(',     ');
    document.querySelector('#race-age').textContent = age;
    document.querySelector('#race-alignment').textContent = alignment;
    document.querySelector("#subraces").textContent = subraces_Array.join(',     ');
    document.querySelector("#bonuses").textContent = bonuses_Array.join(',     ');
    document.querySelector("#race-skill").textContent = skills_Array.join(',     ');
    console.log("printing");
}

function getOneAbilityScores() {
    return Math.floor(Math.random() * 15);
}


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
    const { name, speed, ability_bonuses, alignment, age, size_description, starting_proficiencies,
        starting_proficiency_options, language_desc, traits, subraces} = data;

    var skills_Array = starting_proficiency_options.from.map(function (el) {
        return el.name;
    });

    document.querySelector("#results").textContent = getNames(traits);
    document.querySelector('#name').textContent = name;
    document.querySelector('#speed_race').textContent = speed;
    document.querySelector('#size').textContent = size_description;
    document.querySelector('#race-age').textContent = age;
    document.querySelector('#race-alignment').textContent = alignment;
    document.querySelector('#language').textContent = language_desc;
    document.querySelector("#weapon").textContent = getNames(starting_proficiencies);
    document.querySelector('#race-age').textContent = age;
    document.querySelector('#race-alignment').textContent = alignment;
    document.querySelector("#subraces").textContent = getNames(subraces);
    document.querySelector("#bonuses").textContent = getNumberBonuses(ability_bonuses);//bonuses_Array.join(',     ');
    document.querySelector("#race-skill").textContent = skills_Array.join(',     ');
    console.log("printing");
}

function getNames(link) {
    var array = link.map(function (el) {
        return el.name;
    });
    return array.join(',     ');
}

function getNumberBonuses(link) {
    var array = link.map(function (el) {
        return el.bonus;
    });
    return array.join(',     ');
}

function getOneAbilityScores() {
    return Math.floor(Math.random() * 15);
}


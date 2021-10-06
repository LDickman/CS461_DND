//import { async } from "regenerator-runtime";

const api_race = 'https://www.dnd5eapi.co/api/races/';
const api_classes = 'https://www.dnd5eapi.co/api/classes/';
//var race = 'human'
var input;

window.addEventListener('load', (event) => {
    console.log("page is loaded");
    setupPage1();
   // setupPage2();
});

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function raceSelect() {
    document.getElementById("raceDropdown").classList.toggle("show");
    console.log("at the dropdowm bar");
}

function classSelect() {
    document.getElementById("classDropdown").classList.toggle("show");
    console.log("at the dropdowm bar");
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

async function setupPage1() {
    console.log("starting");
    var button = document.querySelector('#submit');
    console.log(input);
    button.addEventListener('click', (event) => {
        raceAsk(document.querySelector('#race').value);
    });
    raceChoice();
    classChoice();
}

async function setupPage2() {
    console.log("starting 2");
    var button = document.querySelector('#submit2');
    console.log(input);
    button.addEventListener('click', (event) => {
        classAsk(document.querySelector('#class').value);
    });
    classChoice();
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

function classChoice() {
    var ul = document.getElementById('classList');
    console.log(ul);
    var items = ul.getElementsByTagName('li');
    console.log(items);
    console.log(items[0].textContent);   // knows that textcontext works
    ul.addEventListener("click", function (e) {
        for (i = 0; i < items.length -1; i++) {
            if (e.target == items[i]) {
                console.log(items[i].textContent);
                classAsk(items[i].textContent);
            }
        }
    });
}


async function raceAsk(input) {
    console.log("Race: " + input);
    var url = api_race + input;
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    printRaceData(data);   
}

async function classAsk(input) {
    console.log("Class: " + input);
    var url = api_classes + input;
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    printClassData(data);   
}


async function printRaceData(data) {
    console.log(data);
    const { name, speed, ability_bonuses, alignment, age, size_description, starting_proficiencies,
        starting_proficiency_options, language_desc, traits, subraces} = data;

    //var proficiency_options_Array
    console.log("starting_proficiency_options"+ starting_proficiency_options);
    console.log("starting_proficiencies"+ starting_proficiencies);

    if (starting_proficiency_options == undefined) {
        document.querySelector("#race-skill").textContent = "None";
    } else {
        proficiency_options_Array = starting_proficiency_options.from.map(function (el) {
            return el.name;
        });
        document.querySelector("#race-skill").textContent = proficiency_options_Array.join(',     ');
    }

    document.querySelector("#results").textContent = getNames(traits);
    document.querySelector('#name').textContent = name;
    document.querySelector('#speed_race').textContent = speed;
    document.querySelector('#size').textContent = size_description;
    document.querySelector('#race-age').textContent = age;
    document.querySelector('#race-alignment').textContent = alignment;
    document.querySelector('#language').textContent = language_desc;
    document.querySelector("#weapon").textContent = getNames(starting_proficiencies);
    document.querySelector("#subraces").textContent = getNames(subraces);
    document.querySelector("#bonuses").textContent = getNumberBonuses(ability_bonuses);
    //document.querySelector("#race-skill").textContent = inDepthSearch(starting_proficiency_options);
    console.log("printing");
}

async function printClassData(data) {
    console.log(data);
    const { name, hit_die, proficiency_choices, starting_equipment_options, proficiencies, saving_throws, starting_equipment,
        class_levels, multi_classing, subclasses, spellcasting, spells} = data;
    
    var skills_Array

    if (proficiency_choices == undefined) {
        document.querySelector("#skill").textContent = "None";
    } else {
        skills_Array = proficiency_choices.from.map(function (el) {
            return el.name;
        });
        document.querySelector("#skill").textContent = skills_Array.join(',     ');
    }
    
    var equiment_Array

    if (starting_equipment_options == undefined) {
        document.querySelector("#equiment_option").textContent = "None";
    } else {
        equiment_Array = starting_equipment_options.from.map(function (el) {
            return el.name;
        });
        document.querySelector("#equiment_option").textContent = equiment_Array.join(',     ');
    }

    console.log(equiment_Array);
    console.log(name);
    console.log(hit_die);


    document.querySelector('#class_name').textContent = name;
    document.querySelector('#hit').textContent = hit_die;
    document.querySelector('#throws').textContent = getNames(saving_throws);
    
    document.querySelector('#equiment').textContent = getNames(starting_equipment);;
   
    document.querySelector("#preffer_equiment").textContent = getNames(proficiencies);
    document.querySelector('#spells').textContent = getNames(spells);
    document.querySelector('#spellscasting').textContent = getNames(spellcasting);
    document.querySelector("#subclasses").textContent = getNames(subclasses);

   //document.querySelector("#skill").textContent = skills_Array.join(',     ');
    //document.querySelector("#equiment_option").textContent = equiment_Array.join(',     ');
    console.log("printing page 2");

  
    // <p>Features:</p>
    // <label id=" class_feats"> </label>
    // <p>Starting Skills:</p>
    // <label id=" start_skills"> </label>
   
    // <p>Starting Spells:</p>
    // <label id="spells">Results </label>
    // <br />
    // <p>Starting Spells:</p>
    // <label id="spells">Results </label>
    // <br />
    // <p>Level Updates:</p>
    // <label id="levels">Results </label>
    // <br />
    // <p>Possible Subclasses:</p>
    // <label id="subclasses">Results </label>
}

function getNames(link) {
    var empty = "None"
    if (dataValid(link)) {
        var array = link.map(function (el) {
            return el.name;
        });
        return array.join(',     ');
    } else {
        return empty;
    }
}

function getNumberBonuses(link) {
    var empty = "None"
    if (dataValid(link)) {
        var array = link.map(function (el) {
            return el.bonus;
        });
        return array.join(',     '); 
    } else {
        return empty;
    }
}

function inDepthSearch(link) {
    var empty = "None"
    if (dataValid(link)) {
        var array = link.from.map(function (el) {
            return el.bonus;
        });
        return array.join(',     '); 
    } else {
        return empty;
    }
}

function getOneAbilityScores() {
    return Math.floor(Math.random() * 15);
}

function dataValid(data) {
    if (data == undefined) {
        return false;
    } else {
       return true;
    }
}
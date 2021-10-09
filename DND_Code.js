const api_race = 'https://www.dnd5eapi.co/api/races/';
const api_classes = 'https://www.dnd5eapi.co/api/classes/';
const api_spells =  '/levels/1/spells';
const api_scores = 'https://www.dnd5eapi.co/api/ability-scores/';
const api_alignment = 'https://www.dnd5eapi.co/api/alignment';

var input;

window.addEventListener('load', (event) => {
    console.log("page is loaded");
    setupPage1();
    setupPage2();
    setupPage4();
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

function backgroundSelect() {
    document.getElementById("backgroundDropdown").classList.toggle("show");
    console.log("at the dropdowm bar");
}

function alignmentSelect() {
    document.getElementById("alignmentDropdown").classList.toggle("show");
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
    raceChoice();
}

async function setupPage2() {
    console.log("starting 2");
    classChoice();
}

async function setupPage4() {
    console.log("starting 4");
    var url = api_scores;
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    var button = document.querySelector('#roll');
    console.log(input);
    button.addEventListener('click', (event) => { 
        printAblityScoreData(data);
    });
}

function raceChoice() {
    var ul = document.getElementById('raceList');
    console.log(ul);
    var items = ul.getElementsByTagName('li');
    console.log(items);
    console.log(items[0].textContent);   // knows that textcontext works
    ul.addEventListener("click", function (e) {
        for (i = 0; i < items.length - 1; i++) {
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
        for (i = 0; i < items.length - 1; i++) {
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
    spellsAsk(input);
}

async function spellsAsk(input) {
    console.log("Spells for: " + input);
    var url = api_classes + input + api_spells;
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    printSpellsData(data);
}

async function printRaceData(data) {
    console.log(data);
    const { name, speed, ability_bonuses, alignment, age, size_description, starting_proficiencies,
        starting_proficiency_options, language_desc, traits, subraces } = data;


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
    console.log("printing");
}

async function printClassData(data) {
    console.log(data);
    const { index, name, hit_die, proficiency_choices, starting_equipment_options, proficiencies, saving_throws, starting_equipment, 
        class_levels, multi_classing, subclasses, spellcasting, spells } = data;

    console.log(proficiency_choices);
    console.log(name);
    console.log(hit_die);
    
    var className = document.getElementById("class_name");
    var die = document.getElementById('hit');
    var throwHits = document.getElementById('throws');
    // var startEquiment = document.getElementById('equiment');
    var wantedEquiment = document.getElementById("preffer_equiment")
    var casting = document.getElementById('spellscasting');
    var otherClasses = document.getElementById("subclasses");
    var skillsNum = document.getElementById("skills");
    //var equiment_Array;

    // if (starting_equipment_options == undefined) {
    //     document.getElementById("equiment_option").textContent = "None";
    // } else {
    //     console.log(starting_equipment_options);
    //     equiment_Array = starting_equipment_options.from.map(function (el) {
    //         return el.name;
    //     });
    //     document.getElementById("equiment_option").textContent = equiment_Array.join(',     ');
    // }

    className.textContent = name;
    die.textContent = hit_die;
    throwHits.textContent = getNames(saving_throws);
    // startEquiment.textContent = getNames(starting_equipment);
    console.log(getNumberChoose(proficiency_choices));
    skillsNum.textContent = getNumberChoose(proficiency_choices);
    wantedEquiment.textContent = getNames(proficiencies);
    console.log(spellcasting);
    casting.textContent = getInfoNames(spellcasting);
    otherClasses.textContent = getNames(subclasses);

    console.log("printing page 2");
}

async function printSpellsData(data) {
    const { count, results } = data;

    var spellsAllowed = document.getElementById('spells');
    
    spellsAllowed.textContent = getNames(results);
    
    console.log("printing page 2 in print spells");
}


async function printAblityScoreData(data) {
    console.log(data);
    const { results } = data;

    var Str_des = document.getElementById('STR_des');
    Str_des = getNames(results);

    document.getElementById("STR").textContent = rollsForScore();
    document.getElementById('INT').textContent = rollsForScore();
    document.getElementById('WIS').textContent = rollsForScore();
    document.getElementById('CON').textContent = rollsForScore();
    document.getElementById("DEX").textContent = rollsForScore();
    document.getElementById('CHA').textContent = rollsForScore();

    console.log("results");
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

function getInfoNames(link) {
    var empty = "None"
    if (dataValid(link)) {
        var array = link.info.map(function (el) {
            return el.name;
        });
        return array.join(',     ');
    } else {
        return empty;
    }
}

function getNumberChoose(link) {
    var empty = "None"
    if (dataValid(link)) {
        var array = link.map(function (el) {
            return el.choose;
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

function rollOneDice() {
    min = Math.ceil(1);
    max = Math.floor(6);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function rollsForScore() {
    var totalRolls = [];
    for (var i = 0; i <= 3; i++) {
        totalRolls.push(rollOneDice())
    }
    
    var sum = totalRolls.reduce((a,b) => a + b, 0)
    if (sum > 18) {
        sum = 18;
    }
    return (sum);
}

function dataValid(data) {
    if (data == undefined) {
        return false;
    } else if (data != undefined) {
        return true;
    }
}
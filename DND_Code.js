const api_race = 'https://www.dnd5eapi.co/api/races/';
const api_classes = 'https://www.dnd5eapi.co/api/classes/';
const api_spells = '/levels/1/spells';
const api_scores = 'https://www.dnd5eapi.co/api/ability-scores/';
const api_alignment = 'https://www.dnd5eapi.co/api/alignments/';
const api_background = 'https://www.dnd5eapi.co/api/backgrounds/';
const api_language = 'https://www.dnd5eapi.co/api/languages';
const api_OneSpell = 'https://www.dnd5eapi.co/api/spells/';
const api_equiment = 'https://www.dnd5eapi.co/api/equipment-categories/'

// const race_input;
// const background_input;
// const class_input;
// const spells_input;
// const aligemnt_input;

window.addEventListener('load', (event) => {
    console.log("page is loaded");
    setupPage1();
    setupPage2();
    setupPage3();
    setupPage4();
    setupPage6();
    setupPage7();
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

function weaponSelect() {
    document.getElementById("weaponDropdown").classList.toggle("show");
    console.log("at the dropdowm bar");
}

function spellSelect() {
    document.getElementById("spellDropdown").classList.toggle("show");
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

async function setupPage3() {
    console.log("starting 3");
    backgroundChoice();
    alignmentChoice();
}

async function setupPage4() {
    var button = document.querySelector('#roll');
    button.addEventListener('click', (event) => {
        printAblityScoreData();
    });
    printAblityScoreInfo();
}

async function setupPage6() {
    console.log("starting 6");
    spellChoice();
}

async function setupPage7() {
    console.log("starting 7");
    weaponChoice();
}

function raceChoice() {
    var ul = document.getElementById('raceList');
    console.log(ul);
    var items = ul.getElementsByTagName('li');
    console.log(items);
    console.log(items[0].textContent);   // knows that textcontext works
    ul.addEventListener("click", function (e) {
        for (i = 0; i < items.length; i++) {
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
        for (i = 0; i < items.length; i++) {
            if (e.target == items[i]) {
                console.log(items[i].textContent);
                classAsk(items[i].textContent);
            }
        }
    });
}

function backgroundChoice() {
    var ul = document.getElementById('backgroundList');
    console.log(ul);
    var items = ul.getElementsByTagName('li');
    console.log(items);
    console.log(items[0].textContent);   // knows that textcontext works
    ul.addEventListener("click", function (e) {
        for (i = 0; i < items.length; i++) {
            if (e.target == items[i]) {
                console.log(items[i].textContent);
                backgroundAsk(items[i].textContent);
            }
        }
    });
}

function alignmentChoice() {
    var ul = document.getElementById('alignmentList');
    console.log(ul);
    var items = ul.getElementsByTagName('li');
    console.log(items);
    console.log(items[0].textContent);   // knows that textcontext works
    ul.addEventListener("click", function (e) {
        for (i = 0; i < items.length; i++) {
            if (e.target == items[i]) {
                console.log(items[i].textContent);
                alignmentAsk(items[i].textContent);
            }
        }
    });
}

function weaponChoice() {
    var ul = document.getElementById('weaponList');
    console.log(ul);
    var items = ul.getElementsByTagName('li');
    console.log(items);
    ul.addEventListener("click", function (e) {
        for (i = 0; i < items.length; i++) {
            if (e.target == items[i]) {
                console.log(items[i].textContent);
                equimentAsk(items[i].textContent);
            }
        }
    });
}

function spellChoice() {
    var ul = document.getElementById('spellList');
    console.log(ul);
    var items = ul.getElementsByTagName('li');
    console.log(items);
    ul.addEventListener("click", function (e) {
        for (i = 0; i < items.length; i++) {
            if (e.target == items[i]) {
                console.log(items[i].textContent);
                certianSpellsAsk(items[i].textContent);
            }
        }
    });
}

async function raceAsk(input) {
    console.log("Race: " + input);
    //race_input = input;
    var url = api_race + input;
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    printRaceData(data);
}

async function classAsk(input) {
    console.log("Class: " + input);
    var url = api_classes + input;
    // class_input = input;
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    printClassData(data);
    spellsAsk(input);
}

async function backgroundAsk(input) {
    if (input != "acolyte") {
        console.log("no data for");
    } else {
        console.log("Class: " + input);
        var url = api_background + input;
        // background_input = input;
        console.log(url);
        const response = await fetch(url);
        const data = await response.json();
        printBackgroundData(data);
    }
}

async function alignmentAsk(input) {
    if (input == "None") {
        document.getElementById("alignment_choice").textContent = "None";
    } else {
        console.log("alignment: " + input);
        var url = api_alignment + input;
        //aligemnt_input = input;
        console.log(url);
        const response = await fetch(url);
        const data = await response.json();
        printAlignmentData(data);
    }
}

async function spellsAsk(input) {
    console.log("Spells for: " + input);
    var url = api_classes + input + api_spells;
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    printSpellsData(data);
}

async function certianSpellsAsk(input) {
    console.log("Spells: " + input);
    var url = api_OneSpell + input;
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    printInfo_One_Spell(data);
}

// async function proficienciesAsk(input) {
//     console.log("Proficiencies for: " + input);
//     var url = api_classes + input + api_proficiencies;
//     console.log(url);
//     const response = await fetch(url);
//     const data = await response.json();
//     printListOfEquimentOptions(data);
// }

async function equimentAsk(input) {
    console.log("Equiment for: " + input);
    var url = api_equiment + input;
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    printEquimentData(data);
}

async function abilityAsk(input) {
    console.log("Ability for: " + input);
    var url = api_scores + input;
    //console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    getAblityScore(data);
}

async function languageAsk(input) {
    console.log("lanage: " + input);
    //race_input = input;
    var url = api_language + '/' + input;
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    printLanguageData(data);
}

// async function setLanguageList() {
//     //race_input = input;
//     var url = api_language;
//     console.log(url);
//     const response = await fetch(url);
//     const data = await response.json();
//     selectLanguageOptions(data);
// }

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
    printBonusData(ability_bonuses);
    console.log("printing");
}

async function printClassData(data) {
    console.log(data);
    const { index, name, hit_die, proficiency_choices, starting_equipment_options, proficiencies, saving_throws, starting_equipment,
        class_levels, multi_classing, subclasses, spellcasting, spells } = data;

    //selectSkillsOptions(proficiency_choices); //// Having issues with 
    console.log(name);
    console.log(hit_die);
    // if (spells != undefined) {
    //     spellsAsk(spells);
    // }

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
    createListOfEquimentOptions(proficiencies);
    console.log(spellcasting);
    casting.textContent = getInfoNames(spellcasting);
    otherClasses.textContent = getNames(subclasses);

    console.log("printing page 2");
}

async function printSpellsData(data) {
    const { count, results } = data;

    var spellsAllowed = document.getElementById('spells');

    spellsAllowed.textContent = getNames(results);

    var spellRange = document.getElementById('spell_range');
    var spellInfo = document.getElementById('spell_info');
    var spellName = document.getElementById('spell_name');

    if (count != 0) {
        createListOfSpellOptions(results);
    } else {
        spellName.textContent = "None";
        spellInfo.textContent = "None";
        spellRange.textContent = "None";
    }
    console.log("printing page 2 in print spells");
}

async function printInfo_One_Spell(data) {
    console.log(data);
    const { name, desc, range } = data;

    console.log(name);
    var spellRange = document.getElementById('spell_range');
    var spellInfo = document.getElementById('spell_info');
    var spellName = document.getElementById('spell_name');

    spellName.textContent = name;
    spellInfo.textContent = desc;
    spellRange.textContent = range;
}

async function printAlignmentData(data) {
    console.log("Aligemnet" + data);
    const { desc } = data
    document.getElementById("alignment_choice").textContent = desc;
}

async function printBackgroundData(data) {
    console.log("background" + data);
    const { name, language_options, starting_proficiencies, starting_equipment, feature,
        starting_equipment_options, personality_traits, ideals, bonds, flaws } = data;


    var beginnerSkills = document.getElementById('skills_needed');
    var wantedLanguages = document.getElementById("languages_options")
    var background_info = document.getElementById('background_des');

    var language_Array;

    if (language_options == undefined) {
        wantedLanguages.textContent = "None";
    } else {
        console.log(language_options);
        language_Array = language_options.from.map(function (el) {
            return el.name;
        });
        wantedLanguages.textContent = language_Array.join(',     ');
    }

    // var background_Array = feature.map(function (el) {
    //     return el.desc;
    // });
    // background_info.textContent = background_Array.join(',     ');

    background_info.textContent = feature.desc;
    beginnerSkills.textContent = getNames(starting_proficiencies);
    console.log("printing page 3");
}

async function printAblityScoreData() {

    document.getElementById("STR").textContent = rollsForScore();
    document.getElementById('INT').textContent = rollsForScore();
    document.getElementById('WIS').textContent = rollsForScore();
    document.getElementById('CON').textContent = rollsForScore();
    document.getElementById("DEX").textContent = rollsForScore();
    document.getElementById('CHA').textContent = rollsForScore();

    console.log("results");
}

async function printAblityScoreInfo() {

    var str_des = document.getElementById('STR_des');
    var wis_des = document.getElementById('WIS_des');
    var cha_des = document.getElementById('CHA_des');
    var con_des = document.getElementById('CON_des');
    var int_des = document.getElementById('INT_des');
    var dex_des = document.getElementById('DEX_des');

    var wis_output
    var cha_output;
    var con_output;
    var int_output;
    var dex_output;
    var str_output;

    setTimeout(function () {
        str_output = abilityAsk('str');
    }, 1000);
    setTimeout(function () {
        wis_output = abilityAsk('wis');
    }, 1000);
    setTimeout(function () {
        cha_output = abilityAsk('cha');
    }, 1000);
    setTimeout(function () {
        con_output = abilityAsk('con');
    }, 1000);
    setTimeout(function () {
        int_output = abilityAsk('int');
    }, 1000);
    setTimeout(function () {
        dex_output = abilityAsk('dex');
    }, 1000);

    setTimeout(function () {
        str_des.textContent = str_output.toString();
        console.log(str_output.toString());          //// DON"T UNDERSTAND WHY IT WON'T WORK
        wis_des.textContent = wis_output.toString();
        cha_des.textContent = cha_output.toString();
        con_des.textContent = con_output.toString();
        int_des.textContent = int_output.toString();
        dex_des.textContent = dex_output.toString();
    }, 3000);

    //console.log(getAblityScore('str'));

    // setTimeout(function () {
    //     cha_des.textContent = getAblityScore('cha');
    // }, 5000);
    // setTimeout(function () {
    //     wis_des.textContent = getAblityScore('wis');
    // }, 5000);
    // setTimeout(function () {
    //     str_des.textContent = getAblityScore('str');
    // }, 5000);
    // setTimeout(function () {
    //     con_des.textContent = getAblityScore('con');
    // }, 5000);
    // setTimeout(function () {
    //     int_des.textContent = getAblityScore('int');
    // }, 5000);
    // setTimeout(function () {
    //     dex_des.textContent = getAblityScore('dex');
    // }, 5000);
}

async function getAblityScore(data) {
    //console.log(data);
    const { desc, skills } = data;
    //console.log(desc);
    // var text = desc.toString();
    // console.log(text);
    return desc;
    // console.log(data);
    // const { desc, skills } = data;
    // return desc;
    // setTimeout(function () {
    //     console.log(data);
    //     const { desc, skills } = data;
    //     console.log(desc);
    //     return desc;
    // }, 5000);
}

async function printLanguageData(data) {
    const { typical_speakers } = data
    document.getElementById("lang_des").textContent = typical_speakers;
}


async function printBonusData(data) {
    console.log(data);
    var array = getNameBonuses(data);
    console.log(array[0]);
    var array_BounusName = getArrayOfNames(array);
    console.log(array_BounusName[0]);
    var array_Bounus = getArrayOfNumberBonuses(data);
    console.log("Bonus " + array_BounusName);
    console.log("Number Bonus " + array_Bounus);
    for (var i = 0; i < array_BounusName.length; i++) {
        if (array_BounusName[i] == "CON") {
            document.getElementById("CON_bonus").textContent = array_Bounus[i];
        } else if (array_BounusName[i] == "CHA") {
            document.getElementById("CHA_bonus").textContent = array_Bounus[i];
        } else if (array_BounusName[i] == "DEX") {
            document.getElementById("DEX_bonus").textContent = array_Bounus[i];
        } else if (array_BounusName[i] == "STR") {
            document.getElementById("STR_bonus").textContent = array_Bounus[i];
        } else if (array_BounusName[i] == "INT") {
            document.getElementById("INT_bonus").textContent = array_Bounus[i];
        } else if (array_BounusName[i] == "WIS") {
            document.getElementById("WIS_bonus").textContent = array_Bounus[i];
        }
    }

}


async function createListOfEquimentOptions(data) {
    console.log(data);
    var array_weapons = getArrayOfIndexs(data);
    console.log("array_weapons " + array_weapons)
    // var array_certain_weapons;
    // console.log(array_weapons[0]);
    // var url;
    // for (var i = 0; i < array_weapons.length; i++) {
    //     url = equimentAsk(array_weapons[i]);
    //     console.log(url);
    //     array_certain_weapons.push(url); 
    // }
    let list = document.getElementById("weaponList");
    array_weapons.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = item;
        list.appendChild(li);
    })
}

async function createListOfSpellOptions(data) {
    console.log(data);
    var array_spells = getArrayOfIndexs(data);
    console.log("array_spells " + array_spells)
    let list = document.getElementById("spellList");
    array_spells.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = item;
        list.appendChild(li);
    })
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

function getArrayOfNames(link) {
    var empty = "None"
    if (dataValid(link)) {
        var array = link.map(function (el) {
            return el.name;
        });
        return array;//.join(',     ');
    } else {
        return empty;
    }
}

function getArrayOfIndexs(link) {
    var empty = "None"
    if (dataValid(link)) {
        var array = link.map(function (el) {
            return el.index;
        });
        return array;//.join(',     ');
    } else {
        return empty;
    }
}

function selectSkillsOptions(link) {
    //proficiency_choices
    console.log(link);
    var array = link.includes('from');
    console.log(array);
    var proficiency_options_Array = link.from.map(function (el) {
        return el.name;
    });
    // var array = proficiency_options_Array.map(function (el) {
    //     return el.name;
    // });
    console.log(proficiency_options_Array);
    //console.log("Choices "+ proficiency_options_Array); 
    let list = document.getElementById("skilsList");
    link.forEach((item) => {
        let = document.createElement("li");
        li.innerText = item;
        list.appendChild(li);
    });
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

function getArrayOfNumberBonuses(link) {
    var empty = "None"
    if (dataValid(link)) {
        var array = link.map(function (el) {
            return el.bonus;
        });
        return array;//.join(',     ');
    } else {
        return empty;
    }
}

function getNameBonuses(link) {
    var empty = "None"
    if (dataValid(link)) {
        var array = link.map(function (el) {
            return el.ability_score;
        });
        return array;//.join(',     ');
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

    var sum = totalRolls.reduce((a, b) => a + b, 0)
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
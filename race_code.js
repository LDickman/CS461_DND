import { fetchDataFromAPI, clickOnDropDownMenu, getListToHTML, getNames, getArrayOfNames, getArrayOfIndexs, getInfoNames, getNumberChoose,
    getNumberBonuses, getArrayOfNumberBonuses, getNameBonuses, settingValueOfScore, clearAllFromList} from './help.js';
import {setupPage4, printBonusData, clearAbilityScoreBonuses } from './ability_score_code.js';
const api_race = 'https://www.dnd5eapi.co/api/races/';

export async function setupPage1() {
    console.log("starting");
    raceChoice();
}

function raceChoice() {
    var ul = document.getElementById('raceList');
    var button = document.getElementById('race_option');
    console.log(ul);
    clickOnDropDownMenu(ul, raceAsk, button);
}

async function raceAsk(input) {
    console.log("Race: " + input);
    var url = api_race + input;
    console.log(url);
    const data = await fetchDataFromAPI(url);
    printRaceData(data);
}

async function printRaceData(data) {
    clearAbilityScoreBonuses();
    console.log(data);
    const { name, speed, ability_bonuses, alignment, age, size_description, starting_proficiencies,
        starting_proficiency_options, language_desc, traits, subraces } = data;


    if (starting_proficiency_options == undefined) {
        document.querySelector("#race-skill").textContent = "None";
    } else {
        var proficiency_options_Array = starting_proficiency_options.from.map(function (el) {
            return el.name;
        });
        document.querySelector("#race-skill").textContent = proficiency_options_Array.join(',     ');
    }

    console.log("Name " + name);

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
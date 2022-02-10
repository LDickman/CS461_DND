import {
    fetchDataFromAPI, clickOnDropDownMenu, getNames, getArrayOfNames,
    getNumberBonuses, getListCheckBoxes, clearAllFromList} from './help.js';
import { printBonusData, clearAbilityScoreBonuses } from './ability_score_code.js';
const api_race = 'https://www.dnd5eapi.co/api/races/';
const api_language = 'https://www.dnd5eapi.co/api/languages';
let race_laguages;
let userOtherProficieces = document.getElementById("char_other_proficiences");
let raceName = document.getElementById('char_race');
let userSpeed = document.getElementById("char_speed");
let race_page1_reults = document.querySelector("#results");
let race_page1_name = document.querySelector('#name');
let race_page1_speed = document.querySelector('#speed_race');
let race_page1_size = document.querySelector('#size');
let race_page1_age = document.querySelector('#race-age');
let race_page1_aligemnt = document.querySelector('#race-alignment');
let race_page1_language = document.querySelector('#language');
let race_page1_weapon = document.querySelector("#weapon");
let race_page1_subraces = document.querySelector("#subraces");
let race_page1_bonuses = document.querySelector("#bonuses");
let userRaceTraits = document.getElementById("char_traits");
let Languagelist = document.getElementById("languageList");
let userRaceLanguages = document.getElementById("char_language");

export async function setupPage1() {
    raceChoice();
}

function raceChoice() {
    let ul = document.getElementById('raceList');
    let button = document.getElementById('race_option');
    clickOnDropDownMenu(ul, raceAsk, button);
}

async function raceAsk(input) {
    let url = api_race + input;
    const data = await fetchDataFromAPI(url);
    getLanuage();
    printRaceData(data);
}

async function getLanuage() {
    let url = api_language;
    const data = await fetchDataFromAPI(url);
    printLangaugeList(data);
}


async function printRaceData(data) {
    clearAbilityScoreBonuses();
    clearAllFromList(Languagelist);
    const { name, speed, ability_bonuses, alignment, age, size_description, starting_proficiencies,
        starting_proficiency_options, languages, language_desc, traits, subraces } = data;


    await gettingSkillsDataOfRace(starting_proficiency_options);

    race_laguages = getArrayOfNames(languages);
    userRaceLanguages.textContent =  getNames(languages);
    race_page1_reults.textContent = getNames(traits);
    userRaceTraits.textContent = getNames(traits);
    race_page1_name.textContent = name;
    raceName.textContent = name;
    race_page1_speed.textContent = speed;
    userSpeed.textContent = speed + " ft";
    race_page1_size.textContent = size_description;
    race_page1_age.textContent = age;
    race_page1_aligemnt.textContent = alignment;
    race_page1_language.textContent = language_desc;
    race_page1_weapon.textContent = getNames(starting_proficiencies);
    userOtherProficieces.textContent = getNames(starting_proficiencies);
    race_page1_subraces.textContent = getNames(subraces);
    race_page1_bonuses.textContent = getNumberBonuses(ability_bonuses);
    printBonusData(ability_bonuses);
}

async function printLangaugeList(data) {
    let list = document.getElementById("languageList");
    const { count, results } = data;
    let names = getArrayOfNames(results)
    await createListOfLaguageOptions(names, list);
}

async function createListOfLaguageOptions(array, list) {
    let items = array;
    for (let j = 0; j < items.length; j++) {
        for (let i = 0; i < race_laguages.length; i++) {
            if (items[j] === race_laguages[i]) {
                items.splice(j, 1);
                i--;
                j--;
            }
        }
    }
    getListCheckBoxes(items, list);
}

async function gettingSkillsDataOfRace(data) {
    if (data == undefined) {
        document.querySelector("#race-skill").textContent = "None";
    } else {
        let proficiency_options_Array = data.from.map(function (el) {
            return el.name;
        });
        document.querySelector("#race-skill").textContent = proficiency_options_Array.join(',     ');
    }
}
import { fetchDataFromAPI, clickOnDropDownMenu, creatingListofArrayForEquiment, createListOfEquimentOptions, getNames, getListToHTML, getArrayOfNames, createListOfProficiencyOptions, getArrayOfIndexs, getInfoNames, getNumberChoose,
    getNumberBonuses, getListCheckBoxes, getArrayOfNumberBonuses, getNameBonuses, settingValueOfScore, clearAllFromList, getEquimentListData} from './help.js';
import { setupPage4, printBonusData, clearAbilityScoreBonuses } from './ability_score_code.js';
const api_race = 'https://www.dnd5eapi.co/api/races/';
const api_language = 'https://www.dnd5eapi.co/api/languages';
let race_input;
let race_laguages;

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
    race_input = input;
    var url = api_race + input;
    console.log(url);
    const data = await fetchDataFromAPI(url);
    getLanuage();
    printRaceData(data);
}

async function getLanuage() {
    var url = api_language;
    console.log(url);
    const data = await fetchDataFromAPI(url);
    printLangaugeList(data);
}


async function printRaceData(data) {
    var Languagelist = document.getElementById("languageList");
    clearAbilityScoreBonuses();
    clearAllFromList(Languagelist);
    console.log(data);
    const { name, speed, ability_bonuses, alignment, age, size_description, starting_proficiencies,
        starting_proficiency_options, languages, language_desc, traits, subraces } = data;


    if (starting_proficiency_options == undefined) {
        document.querySelector("#race-skill").textContent = "None";
    } else {
        var proficiency_options_Array = starting_proficiency_options.from.map(function (el) {
            return el.name;
        });
        document.querySelector("#race-skill").textContent = proficiency_options_Array.join(',     ');
    }

    console.log("Name " + name);
    race_laguages = getArrayOfNames(languages);
    console.log("race_laguages");
    console.log(race_laguages);
    //createBoxes(getArrayOfNames(languages));
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

export function getRaceInput() {
    return race_input;
}

async function printLangaugeList(data) {
    var list = document.getElementById("languageList");
    const { count, results } = data;
    let names = getArrayOfNames(results)
    await createListOfLaguageOptions(names, list);
}

async function createListOfLaguageOptions(array, list) {
    var items = array;
    //var language_names = new Array;
    console.log("createListOfLaguageOptions");
    console.log(array);
    console.log(race_laguages);
    for (var j = 0; j < items.length; j++) {
        for (var i = 0; i < race_laguages.length; i++) {
            if (items[j] === race_laguages[i]) {
                //language_names.push(items[j]);
                items.splice(j, 1);
                i--;
                j--;
            }
        }
    }
    console.log("language_names");
    console.log(items);

    getListCheckBoxes(items, list);
}
import {
    fetchDataFromAPI, clickOnDropDownMenu, getListToHTML, getNames, getArrayOfNames, getArrayOfIndexs, getInfoNames, getNumberChoose,
    getNumberBonuses, getArrayOfNumberBonuses, getNameBonuses, settingValueOfScore, clearAllFromList
} from './help.js';
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

// async function createBoxes(language_Array) {
//     // console.log(language_Array);
//     // var section = document.getElementById('speech_options');
//     // var boxes = section.getElementsByClassName('chk');
//     // console.log("boxes");
//     // console.log(boxes);
//     // console.log(boxes.length);
//     // var texts = section.getElementsByClassName('txt');
//     // console.log("texts");
//     // console.log(texts[0].textContent);
//     // console.log(texts.length);
//     // for (var i = 0; i < boxes.length; i++) {
//     //     for (var j = 0; j < language_Array.length; j++) {
//     //         var box = boxes[i];
//     //         var txt = texts[i];
//     //         if (txt.textContent == language_Array[j]) {
//     //             console.log("txt.textContent");
//     //             console.log(txt.textContent);
//     //             box.removeChild(box.firstChild);
//     //             txt.removeChild(txt.firstChild);
//     //             // box.parentNode.removeChild(box);
//     //             // txt.parentNode.removeChild(txt);
//     //         }
//     //     }
//     // }

//     let data = await getLanuages();

//     const { count, results } = data;
//     let languages = getArrayOfNames(results);

//     for (var i = 0; i < count; i++) {
//         for (var i = 0; i < language_Array.length; i++) {
//             if (languages[i] != language_Array[i]) {
//                 var checkbox = document.createElement('input');
//                 checkbox.type = 'checkbox';
//                 checkbox.id = languages[i];
//                 checkbox.name = 'language';
//                 checkbox.value = languages[i];

//                 var label = document.createElement('label')
//                 label.htmlFor = languages[i];
//                 label.appendChild(document.createTextNode(languages[i]));

//                 var br = document.createElement('br');

//                 var container = document.getElementById('container');
//                 container.appendChild(checkbox);
//                 container.appendChild(label);
//                 container.appendChild(br);

//             }
//         }
//     }
// }


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

    //getListToHTML(language_names, list);
    getListCheckBoxes(items, list);
}

function getListCheckBoxes(array, list){
    console.log("laguage Array");
    console.log(array);
    for (var i = 0; i < array.length; i++) {
            var checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = array[i];
            checkbox.name = 'language';
            checkbox.value = array[i];
            checkbox.onclick = checkboxSlecetion();

            var label = document.createElement('label')
            label.htmlFor = array[i];
            label.appendChild(document.createTextNode(array[i]));

            var br = document.createElement('br');

            //var container = document.getElementById('container');
            list.appendChild(checkbox);
            list.appendChild(label);
            list.appendChild(br);
    }
}

let selected = 0;
function checkboxSlecetion() {
    var Languagelist = document.getElementById("languageList");
    // Get the checkbox
    var checkBox = Languagelist.getElementsByTagName('input');
    console.log(checkBox);

    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      selected++;
    }
    if (selected === 2) {
        return false;
    }
  }
import { fetchDataFromAPI, clickOnDropDownMenu, creatingListofArrayForEquiment, createListOfEquimentOptions, getNames, getListToHTML, getArrayOfNames, createListOfProficiencyOptions, getArrayOfIndexs, getInfoNames, getNumberChoose,
    getNumberBonuses, getListCheckBoxes, getArrayOfNumberBonuses, getNameBonuses, settingValueOfScore, clearAllFromList, getEquimentListData} from './help.js';

const api_proficiencies = '/proficiencies/'
const api_skill = 'https://www.dnd5eapi.co/api/skills/';
const api_classes = 'https://www.dnd5eapi.co/api/classes/';

export function skillChoice() {
    let ul = document.getElementById('skillList');
    let ul2 = document.getElementById('skill2List');
    let button = document.getElementById('skill_option');
    let button2 = document.getElementById('skill_option2');
    console.log(ul);
    clickOnDropDownMenu(ul2, skillAsk, button2);
    clickOnDropDownMenu(ul, skillAsk, button);
}

export async function proficiencyAsk(input) {
    let url = api_classes + input + api_proficiencies;
    const data = await fetchDataFromAPI(url);
    console.log("proficiencies for: " + input);
    console.log(data);
    getProficiencyData(data);
}

async function skillAsk(input) {
    console.log("Skill: " + input);
    let url = api_skill + input;
    console.log(url);
    const data = await fetchDataFromAPI(url);
    printSkillsData(data);
}

async function getProficiencyData(data) {
    let weapon_list = document.getElementById("weaponList");
    let armor_list = document.getElementById("armorList");
    let shield_list = document.getElementById("shieldList");
    let kit_list = document.getElementById("kitList");
    const { count, results } = data;

    createListOfEquimentOptions(results, weapon_list, armor_list, shield_list, kit_list);
}

async function printSkillsData(data) {
    console.log(data);
    const { name, desc } = data;

    let skill_info = document.getElementById('Pro_info');
    let skill_name = document.getElementById('Pro_name');
    skill_name.textContent = name
    skill_info.textContent = desc;

}
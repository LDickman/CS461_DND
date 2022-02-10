import { fetchDataFromAPI, clickOnDropDownMenu, createListOfEquimentOptions } from './help.js';

const api_proficiencies = '/proficiencies/'
const api_skill = 'https://www.dnd5eapi.co/api/skills/';
const api_classes = 'https://www.dnd5eapi.co/api/classes/';
  
export function skillChoice() {
    let ul = document.getElementById('skillList');
    let ul2 = document.getElementById('skill2List');
    let ul3 = document.getElementById('skill3List');
    let button = document.getElementById('skill_option');
    let button2 = document.getElementById('skill_option2');
    let button3 = document.getElementById('skill_option3');
    clickOnDropDownMenu(ul2, skillAsk, button2);
    clickOnDropDownMenu(ul, skillAsk, button);
    clickOnDropDownMenu(ul3, skillAsk, button3);
}

export async function proficiencyAsk(input) {
    let url = api_classes + input + api_proficiencies;
    const data = await fetchDataFromAPI(url);
    getProficiencyData(data);
}

async function skillAsk(input) {
    let url = api_skill + input;
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
    const { name, desc } = data;

    let skill_info = document.getElementById('Pro_info');
    let skill_name = document.getElementById('Pro_name');
    skill_name.textContent = name
    skill_info.textContent = desc;
}
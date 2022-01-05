import { fetchDataFromAPI, clickOnDropDownMenu, getNames, getListToHTML, getArrayOfNames, getArrayOfIndexs, getArrayDescription} from './help.js';
const api_OneSpell = 'https://www.dnd5eapi.co/api/spells/';
const api_spells = '/levels/1/spells';
const api_classes = 'https://www.dnd5eapi.co/api/classes/';
const api_spellcasting = '/spellcasting';
let userAbilitySpell = document.getElementById('char_ability');
let userAbilitySpellBonus = document.getElementById('char_spell_bonus');
let userSpellDC = document.getElementById('char_DC');
let userWIS_skill = document.getElementById("WIS_bonus");
let userCHAR_skill = document.getElementById("CHA_bonus");
let userINT_skill = document.getElementById("INT_bonus");
let userDieRoll = document.getElementById('hit');
let spell_descirtion = document.getElementById('spell_ability_info');
let extra_spell_descrition = document.getElementById('extra_spell_ability_info');

export async function setupPage6() {
    console.log("starting 6");
    spellChoice();
}

export async function spellsAsk(input) {
    console.log("Spells for: " + input);
    let url = api_classes + input + api_spells;
    const data = await fetchDataFromAPI(url);
    printSpellsData(data);
}

export async function spellCastingAsk(input) {
    console.log("SpellCasting for: " + input);
    let url = api_classes + input + api_spellcasting;
    const data = await fetchDataFromAPI(url);
    printSpellCastingData(data);
}

function spellChoice() {
    let ul = document.getElementById('spellList');
    let button = document.getElementById('spell_option');
    let ul2 = document.getElementById('spellList2');
    let button2 = document.getElementById('spell_option2');
    let ul3 = document.getElementById('spellList3');
    let button3 = document.getElementById('spell_option3');
    let ul4 = document.getElementById('spellList4');
    let button4 = document.getElementById('spell_option4');
    console.log(ul);
    clickOnDropDownMenu(ul, certianSpellsAsk, button);
    clickOnDropDownMenu(ul2, certianSpellsAsk, button2);
    clickOnDropDownMenu(ul3, certianSpellsAsk, button3);
    clickOnDropDownMenu(ul4, certianSpellsAsk, button4);
}

async function certianSpellsAsk(input) {
    console.log("Spells: " + input);
    let url = api_OneSpell + input;
    const data = await fetchDataFromAPI(url);
    printInfo_One_Spell(data);
}

async function printInfo_One_Spell(data) {
    console.log(data);
    const { name, desc, range } = data;

    console.log(name);
    let spellRange = document.getElementById('spell_range');
    let spellInfo = document.getElementById('spell_info');
    let spellName = document.getElementById('spell_name');

    spellName.textContent = name;
    spellInfo.textContent = desc;
    spellRange.textContent = range;
}

async function printSpellsData(data) {
    let list = document.getElementById("spellList");
    let list2 = document.getElementById("spellList2");
    let list3 = document.getElementById("spellList3");
    let list4 = document.getElementById("spellList4");
    const { count, results } = data;

    let spellsAllowed = document.getElementById('spells');

    spellsAllowed.textContent = getNames(results);

    let spellRange = document.getElementById('spell_range');
    let spellInfo = document.getElementById('spell_info');
    let spellName = document.getElementById('spell_name');

    if (count != 0) {
        await createListOfSpellOptions(results, list);
        await createListOfSpellOptions(results, list2);
        await createListOfSpellOptions(results, list3);
        await createListOfSpellOptions(results, list4);
    } else {
        await createListOfSpellOptions("None", list);
        await createListOfSpellOptions("None", list2);
        await createListOfSpellOptions("None", list3);
        await createListOfSpellOptions("None", list4);
        spellName.textContent = "None";
        spellInfo.textContent = "None";
        spellRange.textContent = "None";
    }
}

async function printSpellCastingData(data) {
    let list = document.getElementById("extra_spells");
    const { level, spellcasting_ability, info } = data;

    let spellsAbility = document.getElementById('spell_ability');
    
    spellsAbility.textContent = spellcasting_ability.name;
    userAbilitySpell.textContent = spellcasting_ability.name;
    calculatingSpellBonuses(spellcasting_ability.name, parseInt(userDieRoll.textContent));
    let array_spellcasting = getArrayOfNames(info);
    console.log("array_spellcasting");
    console.log(array_spellcasting);
    let array_spellcasting_info =  getArrayDescription(info);
    console.log("array_spellcasting_info");
    console.log(array_spellcasting_info);
    await getListToHTML(array_spellcasting, list);
    let array_size = array_spellcasting_info.length;
    console.log(array_size);
    list.onclick = function (event) {
        let target = event.target; // Getting which <li> was clicked
        let id = target.id; // Getting the value of the li that was clicked
        console.log(id);
        checkUserClick(id, array_size, array_spellcasting, array_spellcasting_info);
    }
}

/// Instead of having a long listed created in HTML, this generates the list in 
/// JavaScript of the Spells options, depending on the class selected
async function createListOfSpellOptions(data, list) {
    let array_spells;
    if (data == "None") {
        array_spells = ["None"];
    } else {
        array_spells = getArrayOfIndexs(data);
    }
    console.log("array_spells ");
    console.log(array_spells);
    await getListToHTML(array_spells, list);
}

function calculatingSpellBonuses(ability, hit){
    if (ability == "WIS") {
        userAbilitySpellBonus.textContent = parseInt(userWIS_skill.textContent);
        userSpellDC = hit + parseInt(userCHAR_skill.textContent);
    } 
    if (ability == "CHA"){
        userAbilitySpellBonus.textContent = parseInt(userCHAR_skill.textContent); 
        userSpellDC.textContent = hit + parseInt(userCHAR_skill.textContent);
        parseInt(userCHAR_skill)
    }
    if (ability == "INT"){
        userAbilitySpellBonus.textContent = parseInt(userINT_skill.textContent);
        userSpellDC.textContent = hit + parseInt(userINT_skill.textContent);
    }
}

function checkUserClick(id, array_size, array_spellcasting, array_spellcasting_info){
    if (id == "Cantrips"); {
        spell_descirtion.textContent = array_spellcasting_info[0][0];
        extra_spell_descrition.textContent = array_spellcasting_info[1];
    }
    if (id == "Spell Slots"){
        spell_descirtion.textContent = array_spellcasting_info[2];
        extra_spell_descrition.textContent = "";
    } 
    if (id == "Spells Known of 1st Level and Higher"){
        spell_descirtion.textContent = array_spellcasting_info[2];
        extra_spell_descrition.textContent = "";
    }
    if (id == "Preparing and Casting Spells"){
        extra_spell_descrition.textContent = "";
        if (array_size == 6) {
            spell_descirtion.textContent = array_spellcasting_info[3].values();
        } else {
            spell_descirtion.textContent = array_spellcasting_info[array_size-3];
        }
    }
    if (id == "Spellcasting Ability"){
        if (array_size == 6) {
            spell_descirtion.textContent = array_spellcasting_info[4].values();
        } else {
            spell_descirtion.textContent = array_spellcasting_info[array_size-2];
        }
        extra_spell_descrition.textContent = "";
    }
    if (id == "Ritual Casting"){
        if (array_size == 6) {
            spell_descirtion.textContent = array_spellcasting_info[5].values();
        } else {
            spell_descirtion.textContent = array_spellcasting_info[array_size-1];
        }
        extra_spell_descrition.textContent = "";
    }
    if (id == "Spellcasting Focus"){
        if (array_size == 6) {
            spell_descirtion.textContent = array_spellcasting_info[5].values();
        } else {
            spell_descirtion.textContent = array_spellcasting_info[array_size-1];
        }
        extra_spell_descrition.textContent ="";
    }
}
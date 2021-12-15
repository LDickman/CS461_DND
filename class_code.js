import { fetchDataFromAPI, clickOnDropDownMenu, creatingListofArrayForEquiment, createListOfEquimentOptions, getNames, getListToHTML, getArrayOfNames, createListOfProficiencyOptions, getArrayOfIndexs, getInfoNames, getNumberChoose,
    getNumberBonuses, getListCheckBoxes, getArrayNumberChooses, getArrayOfNumberBonuses, getNameBonuses, settingValueOfScore, clearAllFromList, getEquimentListData} from './help.js';
import {proficiencyAsk, skillChoice} from './skill_code.js';
import {setupPage6, spellsAsk, spellCastingAsk} from './spell_code.js';

const api_classes = 'https://www.dnd5eapi.co/api/classes/';
let option3_skillList = document.getElementById("skillOptions3");
let userHitDie =  document.getElementById('char_die_hit');
let userEquiment = document.getElementById('char_equiment');

export async function setupPage2() {
    console.log("starting 2");
    classChoice();
}

function classChoice() {
    let ul = document.getElementById('classList');
    let button = document.getElementById('class_option');
    console.log(ul);
    clickOnDropDownMenu(ul, classAsk, button);
}

async function classAsk(input) {
    console.log("Class: " + input);
    let url = api_classes + input;
    const data = await fetchDataFromAPI(url);
    printClassData(data);
    spellsAsk(input);
    spellCastingAsk(input);
    proficiencyAsk(input);
    skillChoice();
    // char_skill_list.textContent = skillArray.join(',     ');
}


async function printClassData(data) {
    let spell_list = document.getElementById("spellList");
    var spellCasting_list = document.getElementById("extra_spells");
    let weapon_list = document.getElementById("weaponList");
    let armor_list = document.getElementById("armorList");
    let shield_list = document.getElementById("shieldList");
    let kit_list = document.getElementById("kitList");
    let skill_list_1 = document.getElementById("skillList");
    let skill_list_2 = document.getElementById("skill2List");
    let skill_list_3 = document.getElementById("skill3List");
    clearAllFromList(spell_list);
    clearAllFromList(spellCasting_list);
    clearAllFromList(weapon_list);
    clearAllFromList(armor_list);
    clearAllFromList(shield_list);
    clearAllFromList(kit_list);
    clearAllFromList(skill_list_1);
    clearAllFromList(skill_list_2);
    clearAllFromList(skill_list_3);
    console.log(data);
    const { index, name, hit_die, proficiency_choices, starting_equipment_options, proficiencies, saving_throws, starting_equipment,
        class_levels, multi_classing, subclasses, spellcasting, spells } = data;

    console.log(name);
    console.log(hit_die);

    console.log(proficiency_choices);
    let array_skills = proficiency_choices.map(function (el) {
        return el.from;
    });


    let array_Skill_Names = new Array;
    for (let i = 0; i < array_skills.length; i++) {
        array_Skill_Names.push(getArrayOfIndexs(array_skills[i]));
    }

    await createListOfProficiencyOptions(array_Skill_Names, skill_list_1);
    await createListOfProficiencyOptions(array_Skill_Names, skill_list_2);
    await createListOfProficiencyOptions(array_Skill_Names, skill_list_3);

    let className = document.getElementById("class_name");
    let userClassName = document.getElementById("char_class");
    let die = document.getElementById('hit');
    let throwHits = document.getElementById('throws');
    let userSavingThrows = document.getElementById('char_saving_throws');

    let wantedEquiment = document.getElementById("preffer_equiment")
    let casting = document.getElementById('spellscasting');
    let otherClasses = document.getElementById("subclasses");
    let skillsNum = document.getElementById("skills");

    className.textContent = name;
    userClassName.textContent = name;
    die.textContent = hit_die;
    userHitDie.textContent = "1d"+ hit_die;
    throwHits.textContent = getNames(saving_throws);
    userSavingThrows.textContent = getNames(saving_throws);

    let arrSkillNumber = getArrayNumberChooses(proficiency_choices);
    skillsNum.textContent = arrSkillNumber[0];//getNumberChoose(proficiency_choices);
    if (arrSkillNumber[0] == 3) {
        option3_skillList.style.visibility = 'visible';
    }
    wantedEquiment.textContent = getNames(proficiencies);
    userEquiment.textContent = getNames(proficiencies);
    console.log(spellcasting);
    casting.textContent = getInfoNames(spellcasting);
    otherClasses.textContent = getNames(subclasses);

    console.log("printing page 2");
}
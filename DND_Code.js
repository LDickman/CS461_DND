import { fetchDataFromAPI, clickOnDropDownMenu, getNames, getListToHTML, getArrayOfNames, getArrayOfIndexs, getInfoNames, getNumberChoose,
    getNumberBonuses, getArrayOfNumberBonuses, getNameBonuses, settingValueOfScore, clearAllFromList} from './help.js';
import {setupPage1} from './race_code.js';
import {setupPage4, printBonusData, clearAbilityScoreBonuses } from './ability_score_code.js';
const api_classes = 'https://www.dnd5eapi.co/api/classes/';
const api_spells = '/levels/1/spells';
// const api_language = 'https://www.dnd5eapi.co/api/languages/';
const api_proficiencies = '/proficiencies/'
const api_alignment = 'https://www.dnd5eapi.co/api/alignments/';
const api_background = 'https://www.dnd5eapi.co/api/backgrounds/';
const api_OneSpell = 'https://www.dnd5eapi.co/api/spells/';
const api_equiment = 'https://www.dnd5eapi.co/api/equipment-categories/';
const api_skill = 'https://www.dnd5eapi.co/api/skills/';
const api_OneEquiment = 'https://www.dnd5eapi.co/api/equipment/'

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
    // setupPage5();
    setupPage6();
    setupPage7();
});


async function setupPage2() {
    console.log("starting 2");
    classChoice();
}

async function setupPage3() {
    console.log("starting 3");
    backgroundChoice();
    alignmentChoice();
}


async function setupPage6() {
    console.log("starting 6");
    spellChoice();
}

async function setupPage7() {
    console.log("starting 7");
    weaponChoice();
    // armorChoice();
}


function classChoice() {
    var ul = document.getElementById('classList');
    var button = document.getElementById('class_option');
    console.log(ul);
    clickOnDropDownMenu(ul, classAsk, button);
}

function backgroundChoice() {
    var ul = document.getElementById('backgroundList');
    var button = document.getElementById('background_option');
    console.log(ul);
    clickOnDropDownMenu(ul, backgroundAsk, button);
}

function alignmentChoice() {
    var ul = document.getElementById('alignmentList');
    var button = document.getElementById('alignment_option');
    console.log(ul);
    clickOnDropDownMenu(ul, alignmentAsk, button);
}

function weaponChoice() {
    var ul = document.getElementById('weaponList');
    var button = document.getElementById('weapon_option');
    var ul2 = document.getElementById('armorList');
    var button2 = document.getElementById('armor_option');
    var ul3 = document.getElementById('shieldList');
    var button3 = document.getElementById('shield_option');
    var ul4 = document.getElementById('kitList');
    var button4 = document.getElementById('kit_option');
    console.log(ul);
    clickOnDropDownMenu(ul, weaponAsk, button);
    clickOnDropDownMenu(ul2, armorAsk, button2);
    clickOnDropDownMenu(ul3, sheildAsk, button3);
    clickOnDropDownMenu(ul4, certianEquimentsAsk, button4);
}

// function armorChoice() {
//     var ul = document.getElementById('armorList');
//     var button = document.getElementById('armor_option');
//     console.log(ul);
//     clickOnDropDownMenu(ul, armorAsk, button);
// }

// function languageChoice() {
//     var ul = document.getElementById('languageList');
//     var ul2 = document.getElementById('language2List');
//     var button = document.getElementById('language_option');
//     var button2 = document.getElementById('language_option2');
//     console.log(ul);
//     clickOnDropDownMenu(ul2, languageAsk, button2);
//     clickOnDropDownMenu(ul, languageAsk, button);
// }

function skillChoice() {
    var ul = document.getElementById('skillList');
    var ul2 = document.getElementById('skill2List');
    var button = document.getElementById('skill_option');
    var button2 = document.getElementById('skill_option2');
    console.log(ul);
    clickOnDropDownMenu(ul2, skillAsk, button2);
    clickOnDropDownMenu(ul, skillAsk, button);
}

function spellChoice() {
    var ul = document.getElementById('spellList');
    var button = document.getElementById('spell_option');
    console.log(ul);
    clickOnDropDownMenu(ul, certianSpellsAsk, button);
}


async function classAsk(input) {
    console.log("Class: " + input);
    var url = api_classes + input;
    const data = await fetchDataFromAPI(url);
    printClassData(data);
    spellsAsk(input);
    proficiencyAsk(input);
    skillChoice();
}

// async function languageAsk(input) {
//     console.log("languge: " + input);
//     var url = api_language + input;
//     console.log(url);
//     const data = await fetchDataFromAPI(url);
//     printLanguageData(data)
//         (data);
// }

async function backgroundAsk(input) {
    if (input != "acolyte") {
        printExtraBackgroundData(input);
    } else if (input == "acolyte") {
        console.log("Class: " + input);
        var url = api_background + input;
        console.log(url);
        const data = await fetchDataFromAPI(url);
        printBackgroundData(data);
    }
}

async function alignmentAsk(input) {
    console.log("alignment: " + input);
    if (input == "None") {
        document.getElementById("alignment_choice").textContent = "None";
    } else {
        var url = api_alignment + input;
        const data = await fetchDataFromAPI(url);
        printAlignmentData(data);
    }
}

async function spellsAsk(input) {
    console.log("Spells for: " + input);
    var url = api_classes + input + api_spells;
    const data = await fetchDataFromAPI(url);
    printSpellsData(data);
}

async function proficiencyAsk(input) {
    var url = api_classes + input + api_proficiencies;
    const data = await fetchDataFromAPI(url);
    console.log("proficiencies for: " + input);
    console.log(data);
    getProficiencyData(data);
}

async function certianSpellsAsk(input) {
    console.log("Spells: " + input);
    var url = api_OneSpell + input;
    const data = await fetchDataFromAPI(url);
    printInfo_One_Spell(data);
}

async function skillAsk(input) {
    console.log("Skill: " + input);
    var url = api_skill + input;
    console.log(url);
    const data = await fetchDataFromAPI(url);
    printSkillsData(data);
}

async function equimentCategoryAsk(input) {
    ///console.log("Equiment for: " + input);
    var url = api_equiment + input;
    //var url = api_OneEquiment + input;
    const data = await fetchDataFromAPI(url);
    return await getEquimentListData(data);
    //getListofEquimentCategory(data)
}

async function certianEquimentsAsk(input) {
    console.log("Equiment for: " + input);
    var url = api_OneEquiment + input;
    const data = await fetchDataFromAPI(url);
    printInfo_One_Equiment(data);
}

async function armorAsk(input) {
    console.log("Equiment for: " + input);
    var url = api_OneEquiment + input;
    const data = await fetchDataFromAPI(url);
    printArmorInfo(data);
}

async function sheildAsk(input) {
    console.log("Equiment for: " + input);
    var url = api_OneEquiment + input;
    const data = await fetchDataFromAPI(url);
    printSheildInfo(data);
}

async function weaponAsk(input) {
    console.log("Equiment for: " + input);
    var url = api_OneEquiment + input;
    const data = await fetchDataFromAPI(url);
    printWeaponInfo(data);
}

async function printClassData(data) {
    let spell_list = document.getElementById("spellList")
    let weapon_list = document.getElementById("weaponList");
    let armor_list = document.getElementById("armorList");
    let shield_list = document.getElementById("shieldList");
    let kit_list = document.getElementById("kitList");
    let skill_list_1 = document.getElementById("skillList");
    let skill_list_2 = document.getElementById("skill2List");
    clearAllFromList(spell_list);
    clearAllFromList(weapon_list);
    clearAllFromList(armor_list);
    clearAllFromList(shield_list);
    clearAllFromList(kit_list);
    clearAllFromList(skill_list_1);
    clearAllFromList(skill_list_2);
    console.log(data);
    const { index, name, hit_die, proficiency_choices, starting_equipment_options, proficiencies, saving_throws, starting_equipment,
        class_levels, multi_classing, subclasses, spellcasting, spells } = data;

    console.log(name);
    console.log(hit_die);

    console.log(proficiency_choices);
    var array_skills = proficiency_choices.map(function (el) {
        return el.from;
    });


    var array_Skill_Names = new Array;
    for (var i = 0; i < array_skills.length; i++) {
        array_Skill_Names.push(getArrayOfIndexs(array_skills[i]));
    }

    await createListOfProficiencyOptions(array_Skill_Names, skill_list_1);
    await createListOfProficiencyOptions(array_Skill_Names, skill_list_2);

    var className = document.getElementById("class_name");
    var die = document.getElementById('hit');
    var throwHits = document.getElementById('throws');

    var wantedEquiment = document.getElementById("preffer_equiment")
    var casting = document.getElementById('spellscasting');
    var otherClasses = document.getElementById("subclasses");
    var skillsNum = document.getElementById("skills");

    className.textContent = name;
    die.textContent = hit_die;
    throwHits.textContent = getNames(saving_throws);

    skillsNum.textContent = getNumberChoose(proficiency_choices);
    wantedEquiment.textContent = getNames(proficiencies);
    console.log(spellcasting);
    casting.textContent = getInfoNames(spellcasting);
    otherClasses.textContent = getNames(subclasses);

    console.log("printing page 2");
}

// async function printLanguageData(data) {
//     var list = document.getElementById("spellList");
//     const { count, results } = data;

//     var spellsAllowed = document.getElementById('spells');

//     spellsAllowed.textContent = getNames(results);

//     var spellRange = document.getElementById('spell_range');
//     var spellInfo = document.getElementById('spell_info');
//     var spellName = document.getElementById('spell_name');

//     if (count != 0) {
//         createListOfSpellOptions(results, list);
//     } else {
//         createListOfSpellOptions("None", list);
//         spellName.textContent = "None";
//         spellInfo.textContent = "None";
//         spellRange.textContent = "None";
//     }
// }

async function printSpellsData(data) {
    var list = document.getElementById("spellList");
    const { count, results } = data;

    var spellsAllowed = document.getElementById('spells');

    spellsAllowed.textContent = getNames(results);

    var spellRange = document.getElementById('spell_range');
    var spellInfo = document.getElementById('spell_info');
    var spellName = document.getElementById('spell_name');

    if (count != 0) {
        await createListOfSpellOptions(results, list);
    } else {
        await createListOfSpellOptions("None", list);
        spellName.textContent = "None";
        spellInfo.textContent = "None";
        spellRange.textContent = "None";
    }
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

    var skill_info = document.getElementById('Pro_info');
    var skill_name = document.getElementById('Pro_name');
    skill_name.textContent = name
    skill_info.textContent = desc;

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
    var background_Skill_info = document.getElementById('background_Skill_info')

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

    var Skill_array = getNames(starting_proficiencies);
    background_info.textContent = feature.desc;
    beginnerSkills.textContent = Skill_array;

    var items = Skill_array.toString().split(",");
    var skill_names = new Array;
    for (var i = 0, j = items.length; i < j; i++) {
        skill_names.push(items[i].replace("Skill:", ""));
    }

    background_Skill_info.textContent = skill_names;
    console.log("printing page 3");
}

async function printExtraBackgroundData(input) {
    console.log("background" + input);

    var beginnerSkills = document.getElementById('skills_needed');
    var wantedLanguages = document.getElementById("languages_options")
    var background_info = document.getElementById('background_des');
    var background_Skill_info = document.getElementById('background_Skill_info')

    if (input == "criminal") {
        beginnerSkills.textContent = "Deception, Stealth";
        wantedLanguages.textContent = "None";
        background_info.textContent = 'You are an experienced criminal with a history of' +
            ' breaking the law. You have spent a lot of time among ' +
            'other criminals and still have contacts within the' +
            'criminal underworld. You’re far closer than most people ' +
            'to the world of murder, theft, and violence that pervades ' +
            'the underbelly of civilization, and you have survived up to ' +
            'this point by flouting the rules and regulations of society ' +
            'You have a reliable and trustworthy contact who acts as ' +
            'your liaison to a network of other criminals. You know ' +
            'how to get messages to and from your contact, even over ' +
            'great distances; specifically, you know ' +
            'the local messengers, corrupt caravan masters, ' +
            'and seedy sailors who can deliver messages for you.';

        background_Skill_info.textContent = "Deception, Stealth";
    } else if (input == "folk-hero") {
        beginnerSkills.textContent = "Animal Handling, Survival";
        wantedLanguages.textContent = "None"
        background_info.textContent = "Since you come from the ranks of the common folk, you fit in among them with ease. You can find a place to hide, rest, or recuperate among other commoners, unless you have shown yourself to be a danger to them. They will shield you from the law or anyone else searching for you, though they will not risk their lives for you.";
        background_Skill_info.textContent = "Animal Handling, Survival";
    } else if (input == "noble") {
        beginnerSkills.textContent = "History, Persuasion";
        wantedLanguages.textContent = "One extra lanuage to select from";
        background_info.textContent = "Thanks to your noble birth, people are inclined to think the best of you. You are welcome in high society, and people assume you have the right to be wherever you are. The common folk make every effort to accommodate you and avoid your displeasure, and other people of high birth treat you as a member of the same social sphere. You can secure an audience with a local noble if you need to.";
        background_Skill_info.textContent = "History, Persuasion";
    } else if (input == "sage") {
        beginnerSkills.textContent = "Arcana, History"
        wantedLanguages.textContent = "Any";
        background_info.textContent = "When you attempt to learn or recall a piece of lore, if you do not know that information, you often know where and from whom you can obtain it. Usually, this information comes from a library, scriptorium, university, or a sage or other learned person or creature. Your DM might rule that the knowledge you seek is secreted away in an almost inaccessible place, or that it simply cannot be found. Unearthing the deepest secrets of the multiverse can require an adventure or even a whole campaign";
        background_Skill_info.textContent = "Arcana, History";
    } else if (input == "soldier") {
        beginnerSkills.textContent = "Athletics, Intimidation";
        wantedLanguages.textContent = "None"
        background_info.textContent = "You have a military rank from your career as a soldier. Soldiers loyal to your former military organization still recognize your authority and influence, and they defer to you if they are of a lower rank. You can invoke your rank to exert influence over other soldiers and requisition simple equipment or horses for temporary use. You can also usually gain access to friendly military encampments and fortresses where your rank is recognized";
        background_Skill_info.textContent = "Athletics, Intimidation";
    }
    console.log("printing page 3");
}

/// Creates the list of all the indexs within the weapons/armor/sheilds/kits equiment-catergoy API
async function getEquimentListData(data) {
    const { index, name, equipment } = data;
    console.log("Within getEquimentListData")

    let equiment_options_Array = equipment.map(function (el) {
        return el.index;
    });
    console.log("equiment_options_Array");
    console.log(equiment_options_Array);
    return equiment_options_Array;
}

async function printArmorInfo(data) {
    const { name, index, equipment_category, armor_category,
        armor_class, str_minimum, stealth_disadvantage, weight, cost } = data;

    var equimentInfo = document.getElementById('equiment_name');
    var weightInfo = document.getElementById('weight');
    var rangeInfo = document.getElementById('range');
    var range_CAT = document.getElementById('range_cat');
    var danageInfo = document.getElementById('damage_info');
    var costrInfo = document.getElementById('cost_info');
    var equimentINfo = document.getElementById('equiment_info');
    var stealth_info = document.getElementById('stealth_info');
    var str_needed = document.getElementById('musle_info');
    var damageRoll = document.getElementById('damage_roll');

    equimentInfo.textContent = name;
    weightInfo.textContent = weight;
    rangeInfo.textContent = "None";
    range_CAT.textContent = "None";
    danageInfo.textContent = "None";
    costrInfo.textContent = "" + cost["quantity"] + " "+ cost["unit"] +"";
    equimentINfo.textContent = "None";
    stealth_info.textContent = stealth_disadvantage;
    str_needed.textContent = str_minimum;
    damageRoll.textContent = "None";
}

async function printSheildInfo(data) {
    const { name, index, equipment_category, armor_category,
        armor_class, str_minimum, stealth_disadvantage, weight, cost } = data;

    var equimentInfo = document.getElementById('equiment_name');
    var weightInfo = document.getElementById('weight');
    var rangeInfo = document.getElementById('range');
    var danageInfo = document.getElementById('damage_info');
    var costrInfo = document.getElementById('cost_info');
    var equimentINfo = document.getElementById('equiment_info');
    var stealth_info = document.getElementById('stealth_info');
    var str_needed = document.getElementById('musle_info');
    var damageRoll = document.getElementById('damage_roll');

    equimentInfo.textContent = name;
    weightInfo.textContent = weight;
    rangeInfo.textContent = "None";
    danageInfo.textContent = "None";
    costrInfo.textContent = "" + cost["quantity"] + " "+ cost["unit"] +"";
    equimentINfo.textContent = "None";
    stealth_info.textContent = stealth_disadvantage;
    str_needed.textContent = str_minimum;
    damageRoll.textContent = "None";
}

async function printWeaponInfo(data) {
    const { index, name, equipment_category, weapon_category,
        category_range, cost, damage, range, weight } = data;
    
    console.log("cost");
    console.log(cost);
    var equimentInfo = document.getElementById('equiment_name');
    var weightInfo = document.getElementById('weight');
    var rangeInfo = document.getElementById('range');
    var range_CAT = document.getElementById('range_cat');
    var danageInfo = document.getElementById('damage_info');
    var costrInfo = document.getElementById('cost_info');
    var equimentINfo = document.getElementById('equiment_info');
    var damageRoll = document.getElementById('damage_roll');
    
    equimentInfo.textContent = name;
    weightInfo.textContent = weight;
    rangeInfo.textContent =  "" + range["normal"] + " feet. Long is "+ range["long"] +"";
    range_CAT.textContent = category_range;
    danageInfo.textContent = "None";
    console.log(cost["quantity"]);
    costrInfo.textContent = "" + cost["quantity"] + " "+ cost["unit"] +"";
    equimentINfo.textContent = "None";
    damageRoll.textContent = "None";
}

async function printInfo_One_Equiment(data) {
    const { index, name, cost, weight, desc } = data;

    var equimentInfo = document.getElementById('equiment_name');
    var weightInfo = document.getElementById('weight');
    var rangeInfo = document.getElementById('range');
    var range_CAT = document.getElementById('range_cat');
    var danageInfo = document.getElementById('damage_info');
    var costrInfo = document.getElementById('cost_info');
    var equimentINfo = document.getElementById('equiment_info');
    var danageRoll = document.getElementById('damage_roll');
    
    equimentInfo.textContent = name;
    weightInfo.textContent = weight;
    rangeInfo.textContent = "None";
    range_CAT.textContent = "None";
    danageInfo.textContent = "None";
    costrInfo.textContent = "" + cost["quantity"] + " "+ cost["unit"] +"";
    equimentINfo.textContent = desc;
    danageRoll.textContent = "None"
}

/// Instead of having a long listed created in HTML, this generates the list in 
/// JavaScript of the Spells options, depending on the class selected
async function createListOfEquimentOptions(data, list, list_2, list_3, list_4) {
    console.log("Equiment");
    console.log(data);
    var array_equiment = getArrayOfIndexs(data);
    let array_armor = new Array;
    let array_weapon = new Array;
    let All_weapon_indexs = new Array
    let array_shield = new Array;
    let array_kit = new Array;
    for (var i = 0; i < array_equiment.length; i++) {
        if (array_equiment[i].includes("armor")) {
            array_armor.push(array_equiment[i]);
        } else if (array_equiment[i].includes("shields")) {
            array_shield.push(array_equiment[i]);
        } else if (array_equiment[i].includes("kit")) {
            array_kit.push(array_equiment[i]);
        } else {
            array_weapon.push(array_equiment[i]);
        }
    }

    console.log("array_weapon");
    console.log(array_weapon);

    for (var i = 0; i < array_weapon.length; i++) {
        if (array_weapon[i].includes("-weapons")) {
            console.log("Array index: " + array_weapon[i]);
            let data = await equimentCategoryAsk(array_weapon[i]);
            console.log("All_weapon_indexs");
            All_weapon_indexs.push(data);
            array_weapon.splice(i, 1);
            i--;
        } else if (array_weapon[i].includes("saving-throw")) {
            array_weapon.splice(i, 1);
            i--;
        }
    }
    console.log("After Removing certian elements from array_weapon");
    for (var i = 0; i < array_weapon.length; i++) {
        let word = array_weapon[i]
        let new_word = word.slice(0, word.length - 1);
        array_weapon[i] = new_word;
    }
    console.log(array_weapon);

    var string_of_indexs = All_weapon_indexs.toString().split(",");
    var idex_names_weapons = new Array;

    for (var i = 0, j = string_of_indexs.length; i < j; i++) {
        idex_names_weapons.push(string_of_indexs[i]);
    }
    console.log("idex_names");
    console.log(idex_names_weapons);
    // // All_weapon_indexs.push(array_weapon);
    // console.log("All_weapon_indexs")
    // console.log(All_weapon_indexs);

    let items = array_weapon.toString().split(",");
    for (var i = 0, j = items.length; i < j; i++) {
        idex_names_weapons.push(items[i]);
    }

    console.log("array_armor");
    console.log(array_armor);
    let armor_names = await creatingListofArrayForEquiment(array_armor);
    console.log("armor names");
    console.log(armor_names);
    let shield_names = await creatingListofArrayForEquiment(array_shield);
    ///let kit_names = await creatingListofArrayForEquiment(array_kit);

    //console.log("array_weapons " + array_weapon)
    await getListToHTML(idex_names_weapons, list);
    await getListToHTML(armor_names, list_2);
    //getListToHTML(array_armor, list_2);
    await getListToHTML(shield_names, list_3);
    await getListToHTML(array_kit, list_4);
}

async function creatingListofArrayForEquiment(array) {
    let new_array = new Array;
    for (var i = 0; i < array.length; i++) {
        console.log("Array index: " + array[i]);
        let data = await equimentCategoryAsk(array[i]);
        console.log("creatingListofArrayForEquiment");
        //console.log(array);
        //console.log(data);
        new_array.push(data);
    }

    var items = new_array.toString().split(",");
    var equiment_names = new Array;

    for (var i = 0, j = items.length; i < j; i++) {
        equiment_names.push(items[i]);
    }
    return equiment_names;
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
    //array_spells.push("None");
    console.log("array_spells ");
    console.log(array_spells);
    await getListToHTML(array_spells, list);
}

/// Instead of having a long listed created in HTML, this generates the list in 
/// JavaScript of the skill options
async function createListOfProficiencyOptions(array, list) {
    var items = array.toString().split(",");
    var skill_names = new Array;

    for (var i = 0, j = items.length; i < j; i++) {
        if (items[i].includes("skill-")) {
            skill_names.push(items[i].replace("skill-", ""));
        }
    }
    await getListToHTML(skill_names, list);
}
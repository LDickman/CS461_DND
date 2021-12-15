import {
    fetchDataFromAPI, clickOnDropDownMenu, creatingListofArrayForEquiment, createListOfEquimentOptions, getNames, getListToHTML, getArrayOfNames, createListOfProficiencyOptions, getArrayOfIndexs, getInfoNames, getNumberChoose,
    getNumberBonuses, getListCheckBoxes, getArrayOfNumberBonuses, getNameBonuses, settingValueOfScore, clearAllFromList, getEquimentListData
} from './help.js';
const api_scores = 'https://www.dnd5eapi.co/api/ability-scores/';
let userSTR = document.getElementById("char_STR")
let userDEX = document.getElementById('char_DEX');
let userWIS = document.getElementById("char_WIS");
let userCHAR = document.getElementById("char_CHAR");
let userINT = document.getElementById("char_INT")
let userCON = document.getElementById('char_CON');
let userSTR_skill = document.getElementById("char_STR_skill")
let userDEX_skill = document.getElementById('char_DEX_skill');
let userWIS_skill = document.getElementById("char_WIS_skill");
let userCHAR_skill = document.getElementById("char_CHAR_skill");
let userINT_skill = document.getElementById("char_INT_skill")
let userCON_skill = document.getElementById('char_CON_skill');
let die = document.getElementById('hit');
let userHit = document.getElementById('char_hit');
let userMaxHit = document.getElementById('char_max_hit');
let userIntinative =  document.getElementById('char_init');

export async function setupPage4() {
    printAblityScoreInfo();
    var button = document.querySelector('#roll');
    button.addEventListener('click', (event) => {
        printAblityScoreData();
    });
}

async function abilityAsk(input) {
    console.log("Ability for: " + input);
    var url = api_scores + input;
    const data = await fetchDataFromAPI(url);
    getAblityScore(data, input);
}

async function printAblityScoreData() {

    document.getElementById("STR").textContent = rollsForScore();
    document.getElementById('INT').textContent = rollsForScore();
    document.getElementById('WIS').textContent = rollsForScore();
    document.getElementById('CON').textContent = rollsForScore();
    document.getElementById("DEX").textContent = rollsForScore();
    document.getElementById('CHA').textContent = rollsForScore();
    addTotalForAbilityScore();
    console.log("results");
    userSTR_skill.textContent = document.getElementById("STR_bonus").textContent;
    userDEX_skill.textContent = document.getElementById("DEX_bonus").textContent;
    userWIS_skill.textContent = document.getElementById("WIS_bonus").textContent;
    userCHAR_skill.textContent = document.getElementById("CHA_bonus").textContent;
    userINT_skill.textContent = document.getElementById("INT_bonus").textContent;
    userCON_skill.textContent = document.getElementById("CON_bonus").textContent;
    userSTR.textContent = document.getElementById('STR').textContent;
    userWIS.textContent = document.getElementById('WIS').textContent;
    userCHAR.textContent = document.getElementById('CHA').textContent;
    userCON.textContent = document.getElementById('CON').textContent;
    userINT.textContent = document.getElementById('INT').textContent;
    userDEX.textContent = document.getElementById('DEX').textContent;
    userMaxHit.textContent =  " "+ die.textContent + " + " + document.getElementById("CON_bonus").textContent +"";
    userHit.textContent =  parseInt(die.textContent) + parseInt(document.getElementById("CON_bonus").textContent);
    userIntinative.textContent = document.getElementById("DEX_bonus").textContent
}

async function printAblityScoreInfo() {
    var wis_output
    var cha_output;
    var con_output;
    var int_output;
    var dex_output;
    var str_output;

    str_output = await abilityAsk('str');
    wis_output = await abilityAsk('wis');
    cha_output = await abilityAsk('cha');
    int_output = await abilityAsk('int');
    dex_output = await abilityAsk('dex');
    con_output = await abilityAsk('con');
}

async function getAblityScore(data, input) {
    const { desc, skills } = data;

    var str_des = document.getElementById('STR_des');
    var wis_des = document.getElementById('WIS_des');
    var cha_des = document.getElementById('CHA_des');
    var con_des = document.getElementById('CON_des');
    var int_des = document.getElementById('INT_des');
    var dex_des = document.getElementById('DEX_des');

    var str_info = document.getElementById('STR_info');
    var wis_info = document.getElementById('WIS_info');
    var cha_info = document.getElementById('CHA_info');
    var con_info = document.getElementById('CON_info');
    var int_info = document.getElementById('INT_info');
    var dex_info = document.getElementById('DEX_info');

    if (input == 'str') {
        str_des.textContent = desc;
        str_info.textContent = getNames(skills);
    } else if (input == 'wis') {
        wis_des.textContent = desc;
        wis_info.textContent = getNames(skills);
    } else if (input == 'int') {
        int_des.textContent = desc;
        int_info.textContent = getNames(skills);
    } else if (input == 'cha') {
        cha_des.textContent = desc;
        cha_info.textContent = getNames(skills);
    } else if (input == 'dex') {
        dex_des.textContent = desc;
        dex_info.textContent = getNames(skills);
    } else if (input == 'con') {
        con_des.textContent = desc;
        con_info.textContent = "For Everything";
    }
}

export async function printBonusData(data) {
    let str_bonus = document.getElementById('STR_bonus');
    let wis_bonus = document.getElementById('WIS_bonus');
    let cha_bonus = document.getElementById('CHA_bonus');
    let con_bonus = document.getElementById('CON_bonus');
    let int_bonus = document.getElementById('INT_bonus');
    let dex_bonus = document.getElementById('DEX_bonus');
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
            con_bonus.textContent = array_Bounus[i];
            con_bonus.value = array_Bounus[i];
        } else if (array_BounusName[i] == "CHA") {
            cha_bonus.textContent = array_Bounus[i];
            cha_bonus.value = array_Bounus[i];
        } else if (array_BounusName[i] == "DEX") {
            dex_bonus.textContent = array_Bounus[i];
            dex_bonus.value = array_Bounus[i];
        } else if (array_BounusName[i] == "STR") {
            str_bonus.textContent = array_Bounus[i];
            str_bonus.value = array_Bounus[i];
        } else if (array_BounusName[i] == "INT") {
            int_bonus.textContent = array_Bounus[i];
            int_bonus.value = array_Bounus[i];
        } else if (array_BounusName[i] == "WIS") {
            wis_bonus.textContent = array_Bounus[i];
            wis_bonus.value = array_Bounus[i];
        }
    }
    addTotalForAbilityScore();
}

function addTotalForAbilityScore() {
    let str_total = document.getElementById('STR_total');
    let wis_total = document.getElementById('WIS_total');
    let cha_total = document.getElementById('CHA_total');
    let con_total = document.getElementById('CON_total');
    let int_total = document.getElementById('INT_total');
    let dex_total = document.getElementById('DEX_total');

    let str_bonus = document.getElementById('STR_bonus');
    let wis_bonus = document.getElementById('WIS_bonus');
    let cha_bonus = document.getElementById('CHA_bonus');
    let con_bonus = document.getElementById('CON_bonus');
    let int_bonus = document.getElementById('INT_bonus');
    let dex_bonus = document.getElementById('DEX_bonus');

    console.log("str_bonus.textContent");
    console.log(str_bonus.textContent);

    console.log("str_bonus.value");
    console.log(str_bonus.value);

    settingValueOfScore(str_bonus);
    settingValueOfScore(wis_bonus);
    settingValueOfScore(con_bonus);
    settingValueOfScore(cha_bonus);
    settingValueOfScore(dex_bonus);
    settingValueOfScore(int_bonus);

    let str = document.getElementById('STR');
    let wis = document.getElementById('WIS');
    let cha = document.getElementById('CHA');
    let con = document.getElementById('CON');
    let int = document.getElementById('INT');
    let dex = document.getElementById('DEX');

    calcForAbilityScoreModifier(str_bonus.value, parseInt(str.textContent), str_bonus);
    calcForAbilityScoreModifier(wis_bonus.value, parseInt(wis.textContent), wis_bonus);
    calcForAbilityScoreModifier(cha_bonus.value, parseInt(cha.textContent), cha_bonus);
    calcForAbilityScoreModifier(con_bonus.value, parseInt(con.textContent), con_bonus);
    calcForAbilityScoreModifier(int_bonus.value, parseInt(int.textContent), int_bonus);
    calcForAbilityScoreModifier(dex_bonus.value, parseInt(dex.textContent), dex_bonus);

    str_total.textContent = (parseInt(str_bonus.textContent) + parseInt(str.textContent));
    wis_total.textContent = (parseInt(wis_bonus.textContent) + parseInt(wis.textContent));
    cha_total.textContent = (parseInt(cha_bonus.textContent) + parseInt(cha.textContent));
    con_total.textContent = (parseInt(con_bonus.textContent) + parseInt(con.textContent));
    int_total.textContent = (parseInt(int_bonus.textContent) + parseInt(int.textContent));
    dex_total.textContent = (parseInt(dex_bonus.textContent) + parseInt(dex.textContent));
}

/// Clears all the ability score, so that the pervious scores are not still taken into effect
export function clearAbilityScoreBonuses() {
    document.getElementById("CON_bonus").textContent = 0;
    document.getElementById("CHA_bonus").textContent = 0;
    document.getElementById("DEX_bonus").textContent = 0;
    document.getElementById("STR_bonus").textContent = 0;
    document.getElementById("INT_bonus").textContent = 0;
    document.getElementById("WIS_bonus").textContent = 0;
}

// This generates 1 roll for the 6 sided dice that has possible to roll from numbers 1 - 6
function rollOneDice() {
    let min = Math.ceil(1);
    let max = Math.floor(6);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// This generates all 3 rolls of a 6-sided dice for 1 ability score
// EX: rolls: 1, 3, 4   Ability score is 8
function rollsForScore() {
    var totalRolls = [];
    for (var i = 0; i <= 2; i++) {
        totalRolls.push(rollOneDice())
    }

    var sum = totalRolls.reduce((a, b) => a + b, 0)
    return (sum);
}

function calcForAbilityScoreModifier(modifier, score, text) {
    switch (score) {
        case 3:
            text.textContent = (modifier - 4);
            console.log(text);
            break;
        case 4:
        case 5:
            text.textContent = (modifier - 3);
            break;
        case 6:
        case 7:
            text.textContent = (modifier - 2);
            console.log(text);
            break;
        case 8:
        case 9:
            text.textContent = (modifier - 1);
            console.log(text);
            break;
        case 10:
        case 11:
            text.textContent = (modifier + 0);
            console.log(text);
            break;
        case 12:
        case 13:
            text.textContent = (modifier + 1);
            console.log(text);
            break;
        case 14:
        case 15:
            text.textContent = (modifier + 2);
            console.log(text);
            break;
        case 16:
        case 17:
            text.textContent = (modifier + 3);
            console.log(text);
            break;
        case 18:
            text.textContent = (modifier + 4);
            console.log(text);
            break;
    }
}
import { fetchDataFromAPI, clickOnDropDownMenu, creatingListofArrayForEquiment, createListOfEquimentOptions, getNames, getListToHTML, getArrayOfNames, createListOfProficiencyOptions, getArrayOfIndexs, getInfoNames, getNumberChoose,
    getNumberBonuses, getListCheckBoxes, getArrayOfNumberBonuses, getNameBonuses, settingValueOfScore, clearAllFromList, getEquimentListData} from './help.js';
import {setupPage1} from './race_code.js';
import {setupPage7, equimentCategoryAsk } from './equiment_code.js';
import {setupPage6, spellsAsk} from './spell_code.js';
import {setupPage3} from './background.js';
import {setupPage4, printBonusData, clearAbilityScoreBonuses } from './ability_score_code.js';
import {proficiencyAsk, skillChoice} from './skill_code.js';
import {setupPage2} from './class_code.js';

window.addEventListener('load', (event) => {
    console.log("page is loaded");
    setupPage1();
    setupPage2();
    setupPage3();
    setupPage4();
    setupPage6();
    setupPage7();
});

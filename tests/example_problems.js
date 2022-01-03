// import {
//   fetchDataFromAPI, clickOnDropDownMenu, creatingListofArrayForEquiment, createListOfEquimentOptions, getNames, getListToHTML, getArrayOfNames, createListOfProficiencyOptions, getArrayOfIndexs, getInfoNames, getNumberChoose,
//   getNumberBonuses, getListCheckBoxes, getArrayOfNumberBonuses, getNameBonuses, settingValueOfScore, clearAllFromList, getEquimentListData
// } from '../help.js';
// import {proficiencyAsk, skillChoice} from '../skill_code.js';
// import {setupPage6, spellsAsk, spellCastingAsk} from '../spell_code.js';
// import {rollOneDice, rollsForScore} from '../ability_score_code.js';

function isValidUrl(_string) {
    let url_string; 
    try {
      url_string = new URL(_string);
    } catch (_) {
      return false;  
    }
    return url_string.protocol === "http:" || url_string.protocol === "https:" ;
  }
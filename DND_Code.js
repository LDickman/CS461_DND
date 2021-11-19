import {
    fetchDataFromAPI, clickOnDropDownMenu, creatingListofArrayForEquiment, createListOfEquimentOptions, getNames, getListToHTML, getArrayOfNames, createListOfProficiencyOptions, getArrayOfIndexs, getInfoNames, getNumberChoose,
    getNumberBonuses, getListCheckBoxes, getArrayOfNumberBonuses, getNameBonuses, settingValueOfScore, clearAllFromList, getEquimentListData
} from './help.js';
import { setupPage1 } from './race_code.js';
import { setupPage7, equimentCategoryAsk } from './equiment_code.js';
import { setupPage6, spellsAsk } from './spell_code.js';
import { setupPage3 } from './background.js';
import { setupPage4, printBonusData, clearAbilityScoreBonuses } from './ability_score_code.js';
import { proficiencyAsk, skillChoice } from './skill_code.js';
import { setupPage2 } from './class_code.js';

//<script>
// function openPage(evt, pageName) {
//     // Declare all variables
//     let i, tabcontent, tablinks;

//     // Get all elements with class="tabcontent" and hide them
//     tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tabcontent.length; i++) {
//         tabcontent[i].style.display = "none";
//     }

//     // Get all elements with class="tablinks" and remove the class "active"
//     tablinks = document.getElementsByClassName("tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//         tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }

//     // Show the current tab, and add an "active" class to the button that opened the tab
//     document.getElementById(pageName).style.display = "block";
//     evt.currentTarget.className += " active";
// }

// /* When the user clicks on the button,
// toggle between hiding and showing the dropdown content */
// function raceSelect() {
//     document.getElementById("raceDropdown").classList.toggle("show");
//     console.log("at the dropdowm bar");
// }

// function classSelect() {
//     document.getElementById("classDropdown").classList.toggle("show");
//     console.log("at the dropdowm bar");
// }

// function backgroundSelect() {
//     document.getElementById("backgroundDropdown").classList.toggle("show");
//     console.log("at the dropdowm bar");
// }

// function alignmentSelect() {
//     document.getElementById("alignmentDropdown").classList.toggle("show");
//     console.log("at the dropdowm bar");
// }

// function moneySelect() {
//     document.getElementById("moneyDropdown").classList.toggle("show");
//     console.log("at the dropdowm bar");
// }

// function weaponSelect() {
//     document.getElementById("weaponDropdown").classList.toggle("show");
//     console.log("at the dropdowm bar");
// }

// function armorSelect() {
//     document.getElementById("armorDropdown").classList.toggle("show");
//     console.log("at the dropdowm bar");
// }

// function shieldSelect() {
//     document.getElementById("shieldDropdown").classList.toggle("show");
//     console.log("at the dropdowm bar");
// }

// function kitSelect() {
//     document.getElementById("kitDropdown").classList.toggle("show");
//     console.log("at the dropdowm bar");
// }

// function spellSelect() {
//     document.getElementById("spellDropdown").classList.toggle("show");
//     console.log("at the dropdowm bar");
// }

// function skillSelect() {
//     document.getElementById("skillDropdown").classList.toggle("show");
//     console.log("at the dropdowm bar");
// }

// function skill2Select() {
//     document.getElementById("skill2Dropdown").classList.toggle("show");
//     console.log("at the dropdowm bar");
// }

// // Close the dropdown menu if the user clicks outside of it
// window.onclick = function (event) {
//     if (!event.target.matches('.dropbtn')) {
//         let dropdowns = document.getElementsByClassName("dropdown-content");
//         let i;
//         for (i = 0; i < dropdowns.length; i++) {
//             let openDropdown = dropdowns[i];
//             if (openDropdown.classList.contains('show')) {
//                 openDropdown.classList.remove('show');
//             }
//         }
//     }
// }
// </script>

window.addEventListener('load', (event) => {
    console.log("page is loaded");
    setupPage1();
    setupPage2();
    setupPage3();
    setupPage4();
    setupPage6();
    setupPage7();
});

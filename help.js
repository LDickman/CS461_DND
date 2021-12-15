import {setupPage7, equimentCategoryAsk } from './equiment_code.js';
let char_skill_list = document.getElementById("char_skills");
let char_spell_list = document.getElementById("char_spells");

/// Function that returns the from API
export async function fetchDataFromAPI(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
}

export function clickOnDropDownMenu(ul, func, button) {
    let items = ul.getElementsByTagName('li');
    console.log(button.textContent);
    console.log(items);
    ul.addEventListener("click", function (e) {
        for (let i = 0; i < items.length; i++) {
            if (e.target == items[i]) {
                console.log(items[i].textContent);
                func(items[i].textContent);
                button.textContent = items[i].textContent;
                let spellArray = [document.getElementById('spell_option').textContent, document.getElementById('spell_option2').textContent, document.getElementById('spell_option3').textContent, document.getElementById('spell_option4').textContent];
                char_spell_list.textContent = spellArray.join(',     ');
                let skillArray = [document.getElementById('skill_option').textContent, document.getElementById('skill_option2').textContent, document.getElementById('skill_option3').textContent];
                char_skill_list.textContent = skillArray.join(',     ');
            }
        }
    });
}

// Creates the list for the dropdown menue in the HTML
export async function getListToHTML(array, list) {
    array.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = item;
        li.value = item;
        li.id = item;
        list.appendChild(li);
    })
}

/// Function that gets the names within the object Array 
/// within the free API access DND e5 documentation and have it converted to a string
export function getNames(link) {
    let empty = "None";
    if (dataValid(link)) {
        let array = link.map(function (el) {
            return el.name;
        });
        return array.join(',     ');
    } else {
        return empty;
    }
}

export function getArrayDescription(link) {
    let empty = "None";
    if (dataValid(link)) {
        let array = link.map(function (el) {
            return el.desc;
        });
        return array;//.join(',     ');
    } else {
        return empty;
    }
}

/// Function that gets the names within the object Array 
/// within the free API access DND e5 documentation and have it converted to a Array, 
// This function is to help to create the list of options with JS instead within the HTML section
export function getArrayOfNames(link) {
    let empty = "None";
    if (dataValid(link)) {
        let array = link.map(function (el) {
            return el.name;
        });
        return array;//.join(',     ');
    } else {
        return empty;
    }
}

/// Function that gets the index within the object Array 
/// within the free API access DND e5 documentation and have it converted to a Array, 
// This function is to help to create the list of options with JS instead within the HTML section
export function getArrayOfIndexs(link) {
    let empty = "None";
    if (dataValid(link)) {
        let array = link.map(function (el) {
            return el.index;
        });
        return array;
    } else {
        return empty;
    }
}


/// Function that gets the name within the object Array called info
/// within the free API access DND e5 documentation and have it converted to a string 
export function getInfoNames(link) {
    let empty = "None";
    if (dataValid(link)) {
        let array = link.info.map(function (el) {
            return el.name;
        });
        return array.join(',     ');
    } else {
        return empty;
    }
}


/// Function that gets the chooses within the object Array
/// within the free API access DND e5 documentation and have it converted to a String 
export function getNumberChoose(link) {
    let empty = "None";
    if (dataValid(link)) {
        let array = link.map(function (el) {
            return el.choose;
        });
        return array.join(',     ');
    } else {
        return empty;
    }
}
 export function getArrayNumberChooses(link) {
    if (dataValid(link)) {
        let array = link.map(function (el) {
            return el.choose;
        });
        return array;
    } else {
        return 0;
    }
 }

/// Function that gets the bonus within the object Array called info
/// within the free API access DND e5 documentation and have it converted to a string 
export function getNumberBonuses(link) {
    let empty = "None";
    if (dataValid(link)) {
        let array = link.map(function (el) {
            return el.bonus;
        });
        return array.join(',     ');
    } else {
        return empty;
    }
}

/// Function that gets the bonuses within the object Array 
/// within the free API access DND e5 documentation and have it converted to a Array, 
// This function is to help to create the list of options with JS instead within the HTML section
export function getArrayOfNumberBonuses(link) {
    let empty = "None";
    let emptyArray = new Array;
    if (dataValid(link)) {
        let array = link.map(function (el) {
            return el.bonus;
        });
        return array;
    } else {
        emptyArray.push(empty);
        return emptyArray;
    }
}

/// Function that gets the ability_score within the object Array 
/// within the free API access DND e5 documentation and have it converted to a Array, 
// This function is to help to create the list of options with JS instead within the HTML section
export function getNameBonuses(link) {
    let empty = "None";
    let emptyArray = new Array;
    if (dataValid(link)) {
        let array = link.map(function (el) {
            return el.ability_score;
        });
        return array;//.join(',     ');
    } else {
        emptyArray.push(empty);
        return emptyArray;
    }
}

/// This function checks if the link or data provided from the data is 
// undefined or not
function dataValid(data) {
    if (data == undefined) {
        return false;
    } else if (data != undefined) {
        return true;
    }
}

/// Sets the value of the score, so that nothing is undefined
export function settingValueOfScore(score) {
    if (score.value == undefined) {
        score.textContent = 0;
        score.value = 0;
    }
}

/// Used to clear the list from pervious selection
export function clearAllFromList(ul) {
    while (ul.firstChild) ul.removeChild(ul.firstChild);
}

/// creates list of items in checkbox format
export function getListCheckBoxes(array, list){
    console.log("Array");
    console.log(array);
    for (let i = 0; i < array.length; i++) {
            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = array[i];
            checkbox.name = 'language';
            checkbox.value = array[i];
            checkbox.onclick = checkboxSlecetion(list, settingLimitLanguageCheckBox());

            let label = document.createElement('label')
            label.htmlFor = array[i];
            label.appendChild(document.createTextNode(array[i]));

            let br = document.createElement('br');

            list.appendChild(checkbox);
            list.appendChild(label);
            list.appendChild(br);
    }
}

function checkboxSlecetion(list, limit) {
    let checkBox = list.getElementsByTagName('input');
    for (let i = 0; i < checkBox.length; i++) {
        checkBox[i].onclick = function() {
            let checkedcount = 0;
            for (let i = 0; i < checkBox.length; i++) {
                checkedcount += (checkBox[i].checked) ? 1 : 0;
            }
            if (checkedcount > limit) {
                console.log("You can select maximum of " + limit + " checkboxes.");
                alert("You can select maximum of " + limit + " checkboxes.");                       
                this.checked = false;
            }
        }
    }
  }

function settingLimitLanguageCheckBox(){
    let wantedLanguages = document.getElementById("languages_options");
    let number;
    if (wantedLanguages.textContent == "None"){
        number = 0;
    } else {
        number = 1;
    }
    return number;
}

  /// Creates the list of all the indexs within the weapons/armor/sheilds/kits equiment-catergoy API
export async function getEquimentListData(data) {
    const { index, name, equipment } = data;
    console.log("Within getEquimentListData")

    let equiment_options_Array = equipment.map(function (el) {
        return el.index;
    });
    console.log("equiment_options_Array");
    console.log(equiment_options_Array);
    return equiment_options_Array;
}

/// Instead of having a long listed created in HTML, this generates the list in 
/// JavaScript of the skill options
export async function createListOfProficiencyOptions(array, list) {
    let items = array.toString().split(",");
    let skill_names = new Array;

    for (let i = 0, j = items.length; i < j; i++) {
        if (items[i].includes("skill-")) {
            skill_names.push(items[i].replace("skill-", ""));
        }
    }
    await getListToHTML(skill_names, list);
}

/// Instead of having a long listed created in HTML, this generates the list in 
/// JavaScript of the equiment options, depending on the class selected
export async function createListOfEquimentOptions(data, list, list_2, list_3, list_4) {
    console.log("Equiment");
    console.log(data);
    let array_equiment = getArrayOfIndexs(data);
    let array_armor = new Array;
    let array_weapon = new Array;
    let All_weapon_indexs = new Array
    let array_shield = new Array;
    let array_kit = new Array;
    for (let i = 0; i < array_equiment.length; i++) {
        if (array_equiment[i].includes("all-armor")) {
            array_armor.push("armor");
        } else if (array_equiment[i].includes("armor")) {
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

    for (let i = 0; i < array_weapon.length; i++) {
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
    for (let i = 0; i < array_weapon.length; i++) {
        let word = array_weapon[i]
        let new_word = word.slice(0, word.length - 1);
        array_weapon[i] = new_word;
    }
    console.log(array_weapon);

    let string_of_indexs = All_weapon_indexs.toString().split(",");
    let idex_names_weapons = new Array;

    for (let i = 0, j = string_of_indexs.length; i < j; i++) {
        idex_names_weapons.push(string_of_indexs[i]);
    }
    console.log("idex_names");
    console.log(idex_names_weapons);
    // // All_weapon_indexs.push(array_weapon);
    // console.log("All_weapon_indexs")
    // console.log(All_weapon_indexs);

    let items = array_weapon.toString().split(",");
    for (let i = 0, j = items.length; i < j; i++) {
        idex_names_weapons.push(items[i]);
    }

    console.log("array_armor");
    console.log(array_armor);
    let armor_names = await creatingListofArrayForEquiment(array_armor);
    console.log("armor names");
    console.log(armor_names);
    let shield_names = await creatingListofArrayForEquiment(array_shield);

    await getListToHTML(idex_names_weapons, list);
    await getListToHTML(armor_names, list_2);
    await getListToHTML(shield_names, list_3);
    await getListToHTML(array_kit, list_4);
}

export async function creatingListofArrayForEquiment(array) {
    let new_array = new Array;
    for (let i = 0; i < array.length; i++) {
        console.log("Array index: " + array[i]);
        let data = await equimentCategoryAsk(array[i]);
        console.log("creatingListofArrayForEquiment");
        new_array.push(data);
    }

    let items = new_array.toString().split(",");
    let equiment_names = new Array;

    for (let i = 0, j = items.length; i < j; i++) {
        equiment_names.push(items[i]);
    }
    return equiment_names;
}
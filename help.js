import { equimentCategoryAsk } from './equiment_code.js';
let char_skill_list = document.getElementById("char_skills");
let char_spell_list = document.getElementById("char_spells");
let extra_laugunage = document.getElementById("extra_languages");
let lanuages_slection = new Array;

export async function fetchDataFromAPI(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export function clickOnDropDownMenu(ul, func, button) {
    let items = ul.getElementsByTagName('li');
    ul.addEventListener("click", function (e) {
        for (let i = 0; i < items.length; i++) {
            if (e.target == items[i]) {
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

export async function getListToHTML(array, list) {
    array.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = item;
        li.value = item;
        li.id = item;
        list.appendChild(li);
    })
}

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
        return array;
    } else {
        return empty;
    }
}

export function getArrayOfNames(link) {
    let empty = "None";
    if (dataValid(link)) {
        let array = link.map(function (el) {
            return el.name;
        });
        return array;
    } else {
        return empty;
    }
}

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

export function getNameBonuses(link) {
    let empty = "None";
    let emptyArray = new Array;
    if (dataValid(link)) {
        let array = link.map(function (el) {
            return el.ability_score;
        });
        return array;
    } else {
        emptyArray.push(empty);
        return emptyArray;
    }
}

function dataValid(data) {
    if (data == undefined) {
        return false;
    } else if (data != undefined) {
        return true;
    }
}

export function settingValueOfScore(score) {
    if (score.value == undefined) {
        score.textContent = 0;
        score.value = 0;
    }
}

export function clearAllFromList(ul) {
    while (ul.firstChild) ul.removeChild(ul.firstChild);
}

export function getListCheckBoxes(array, list) {
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
        checkBox[i].onclick = function () {
            let checkedcount = 0;
            for (let i = 0; i < checkBox.length; i++) {
                checkedcount += (checkBox[i].checked) ? 1 : 0;
                if (checkBox[i].checked) {
                    if (lanuages_slection.length < limit){
                        lanuages_slection.push(checkBox[i].value);
                        extra_laugunage.textContent = lanuages_slection.join(',     ');
                    } else {
                        lanuages_slection.pop();
                    }
                }
            }
            if (checkedcount > limit) {
                lanuages_slection.pop();
                alert("You can select maximum of " + limit + " checkboxes.");
                this.checked = false;
            }
        }
    }
}

function settingLimitLanguageCheckBox() {
    let wantedLanguages = document.getElementById("languages_options");
    let number;
    if (wantedLanguages.textContent == "None") {
        number = 0;
    } else {
        number = 1;
    }
    return number;
}

export async function getEquimentListData(data) {
    const { index, name, equipment } = data;
    let equiment_options_Array = equipment.map(function (el) {
        return el.index;
    });
    return equiment_options_Array;
}

export async function getEquimentListData_ThenSendToHTML(data, list) {
    const { index, name, equipment } = data;
    let equiment_options_Array = equipment.map(function (el) {
        return el.index;
    });
    equiment_options_Array.push("None")
    await getListToHTML(equiment_options_Array, list);
}

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

export async function createListOfEquimentOptions(data, list, list_2, list_3, list_4) {
    let array_equiment = getArrayOfIndexs(data);
    let array_armor = new Array;
    let array_weapon = new Array;
    let All_weapon_indexs = new Array
    let array_shield = new Array;
    let array_kit = ["None"];
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
    await sendingDataToHTML(array_weapon, All_weapon_indexs, array_armor, array_shield, list, list_2, list_3, array_kit, list_4);
}

async function sendingDataToHTML(array_weapon, All_weapon_indexs, array_armor, array_shield, list, list_2, list_3, array_kit, list_4) {
    await getRidOfUnnecssaryWords(array_weapon, All_weapon_indexs);

    let idex_names_weapons = gettingCorrectNameOfEquiment(All_weapon_indexs, array_weapon);

    let armor_names = await creatingListofArrayForEquiment(array_armor);
    let shield_names = await creatingListofArrayForEquiment(array_shield);

    await getListToHTML(idex_names_weapons, list);
    await getListToHTML(armor_names, list_2);
    await getListToHTML(shield_names, list_3);
    await getListToHTML(array_kit, list_4);
}

function gettingCorrectNameOfEquiment(All_weapon_indexs, array_weapon) {
    let string_of_indexs = All_weapon_indexs.toString().split(",");
    let idex_names_weapons = new Array;

    for (let i = 0, j = string_of_indexs.length; i < j; i++) {
        idex_names_weapons.push(string_of_indexs[i]);
    }

    let items = array_weapon.toString().split(",");
    for (let i = 0, j = items.length; i < j; i++) {
        idex_names_weapons.push(items[i]);
    }
    return idex_names_weapons;
}

async function getRidOfUnnecssaryWords(array_weapon, All_weapon_indexs) {
    for (let i = 0; i < array_weapon.length; i++) {
        if (array_weapon[i].includes("-weapons")) {
            let data = await equimentCategoryAsk(array_weapon[i]);
            All_weapon_indexs.push(data);
            array_weapon.splice(i, 1);
            i--;
        } else if (array_weapon[i].includes("saving-throw")) {
            array_weapon.splice(i, 1);
            i--;
        }
    }

    for (let i = 0; i < array_weapon.length; i++) {
        let word = array_weapon[i]
        let new_word = word.slice(0, word.length - 1);
        array_weapon[i] = new_word;
    }
}

export async function creatingListofArrayForEquiment(array) {
    let new_array = new Array;
    for (let i = 0; i < array.length; i++) {
        let data = await equimentCategoryAsk(array[i]);
        new_array.push(data);
    }
    let items = new_array.toString().split(",");
    let equiment_names = new Array;
    for (let i = 0, j = items.length; i < j; i++) {
        equiment_names.push(items[i]);
    }
    equiment_names.push("None");
    return equiment_names;
}

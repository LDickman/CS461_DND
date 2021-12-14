import {
    fetchDataFromAPI, clickOnDropDownMenu, creatingListofArrayForEquiment, createListOfEquimentOptions, getNames, getListToHTML, getArrayOfNames, createListOfProficiencyOptions, getArrayOfIndexs, getInfoNames, getNumberChoose,
    getNumberBonuses, getListCheckBoxes, getArrayOfNumberBonuses, getNameBonuses, settingValueOfScore, clearAllFromList, getEquimentListData
} from './help.js';

const api_equiment = 'https://www.dnd5eapi.co/api/equipment-categories/';
const api_OneEquiment = 'https://www.dnd5eapi.co/api/equipment/';
let money_value = "";

export async function setupPage7() {
    console.log("starting 7");
    weaponChoice();
    moneyChoice();
}

function moneyChoice() {
    let ul = document.getElementById('moneyList');
    let button = document.getElementById('money_option');
    console.log(ul);
    clickOnDropDownMenu(ul, getValueofCurrency, button);
}

function weaponChoice() {
    let ul = document.getElementById('weaponList');
    let button = document.getElementById('weapon_option');
    let ul2 = document.getElementById('armorList');
    let button2 = document.getElementById('armor_option');
    let ul3 = document.getElementById('shieldList');
    let button3 = document.getElementById('shield_option');
    let ul4 = document.getElementById('kitList');
    let button4 = document.getElementById('kit_option');
    console.log(ul);
    clickOnDropDownMenu(ul, weaponAsk, button);
    clickOnDropDownMenu(ul2, armorAsk, button2);
    clickOnDropDownMenu(ul3, sheildAsk, button3);
    clickOnDropDownMenu(ul4, certianEquimentsAsk, button4);
}

export async function equimentCategoryAsk(input) {
    ///console.log("Equiment for: " + input);
    let url = api_equiment + input;
    //let url = api_OneEquiment + input;
    const data = await fetchDataFromAPI(url);
    return await getEquimentListData(data);
    //getListofEquimentCategory(data)
}

async function certianEquimentsAsk(input) {
    console.log("Equiment for: " + input);
    let url = api_OneEquiment + input;
    const data = await fetchDataFromAPI(url);
    printInfo_One_Equiment(data);
}

async function armorAsk(input) {
    console.log("Equiment for: " + input);
    let url = api_OneEquiment + input;
    const data = await fetchDataFromAPI(url);
    printArmorInfo(data);
}

async function sheildAsk(input) {
    console.log("Equiment for: " + input);
    let url = api_OneEquiment + input;
    const data = await fetchDataFromAPI(url);
    printSheildInfo(data);
}

async function weaponAsk(input) {
    console.log("Equiment for: " + input);
    let url = api_OneEquiment + input;
    const data = await fetchDataFromAPI(url);
    printWeaponInfo(data);
}

function getValueofCurrency(input) {
    console.log("money value of user");
    if (input == "Copper (cp)") {
        console.log("cp");
        money_value = "cp";
    } else if (input == "Silver (sp)") {
        console.log("sp");
        money_value = "sp";
    } else if (input == "Electrum (ep)") {
        console.log("ep");
        money_value = "ep";
    } else if (input == "Gold (gp)") {
        console.log("gp");
        money_value = "gp";
    } else if (input == "Platinum (pp)") {
        console.log("pp");
        money_value = "pp";
    }
    let spending_money = document.getElementById("money");
    console.log("spending_money in dropdown menue");
    console.log(spending_money.value);
    let money_leftover = document.getElementById("money_left");
    money_leftover.textContent = spending_money.value;
    money_leftover.value = spending_money.value;
    let armor = document.getElementById("money_armor");
    let weapon = document.getElementById("money_weapon");
    let kit = document.getElementById("money_kit");
    let shield = document.getElementById("money_sheild");
    armor.textContent = 0;
    weapon.textContent = 0;
    kit.textContent = 0;
    shield.textContent = 0;
    armor.value = 0;
    weapon.value = 0;
    kit.value = 0;
    shield.value = 0;
    console.log("money_value");
    console.log(money_value);
}

async function printArmorInfo(data) {
    const { name, index, equipment_category, armor_category,
        armor_class, str_minimum, stealth_disadvantage, weight, cost } = data;

    let spending_money = document.getElementById("money");
    console.log("spending_money");
    console.log(spending_money.value);
    let money_leftover = document.getElementById("money_left");
    money_leftover.textContent = spending_money.value;
    money_leftover.value = spending_money.value;
    console.log("money_leftover");
    console.log(money_leftover.value);
    let armor_money = document.getElementById('money_armor');

    let equimentInfo = document.getElementById('equiment_name');
    let weightInfo = document.getElementById('weight');
    let rangeInfo = document.getElementById('range');
    let range_CAT = document.getElementById('range_cat');
    let danageInfo = document.getElementById('damage_info');
    let costrInfo = document.getElementById('cost_info');
    let equimentINfo = document.getElementById('equiment_info');
    let stealth_info = document.getElementById('stealth_info');
    let str_needed = document.getElementById('musle_info');
    let damageRoll = document.getElementById('damage_roll');

    equimentInfo.textContent = name;
    weightInfo.textContent = weight;
    rangeInfo.textContent = "None";
    range_CAT.textContent = "None";
    danageInfo.textContent = "None";
    costrInfo.textContent = "" + cost["quantity"] + " " + cost["unit"] + "";
    console.log(cost["quantity"]);
    equimentINfo.textContent = "None";
    stealth_info.textContent = stealth_disadvantage;
    str_needed.textContent = str_minimum;
    damageRoll.textContent = "None";
    armor_money.textContent = calculateMoneySpent(spending_money, money_leftover, cost["quantity"], cost["unit"]);
    armor_money.value = calculateMoneySpent(spending_money, money_leftover, cost["quantity"], cost["unit"]);
    let shield = document.getElementById("money_sheild");
    let weapon = document.getElementById("money_weapon");
    let kit = document.getElementById("money_kit");
    TotalMoneySpent(money_leftover, armor_money, shield, weapon, kit);
}

async function printSheildInfo(data) {
    const { name, index, equipment_category, armor_category,
        armor_class, str_minimum, stealth_disadvantage, weight, cost } = data;

    let spending_money = document.getElementById("money");
    console.log("spending_money");
    console.log(spending_money.value);
    let money_leftover = document.getElementById("money_left");
    money_leftover.textContent = spending_money.value;
    money_leftover.value = spending_money.value;
    console.log("money_leftover");
    console.log(money_leftover.value);
    let money_sheild = document.getElementById("money_sheild");

    let equimentInfo = document.getElementById('equiment_name');
    let weightInfo = document.getElementById('weight');
    let rangeInfo = document.getElementById('range');
    let danageInfo = document.getElementById('damage_info');
    let costrInfo = document.getElementById('cost_info');
    let equimentINfo = document.getElementById('equiment_info');
    let stealth_info = document.getElementById('stealth_info');
    let str_needed = document.getElementById('musle_info');
    let damageRoll = document.getElementById('damage_roll');

    equimentInfo.textContent = name;
    weightInfo.textContent = weight;
    rangeInfo.textContent = "None";
    danageInfo.textContent = "None";
    costrInfo.textContent = "" + cost["quantity"] + " " + cost["unit"] + "";
    console.log(cost["quantity"]);
    equimentINfo.textContent = "None";
    stealth_info.textContent = stealth_disadvantage;
    str_needed.textContent = str_minimum;
    damageRoll.textContent = "None";
    money_sheild.textContent = calculateMoneySpent(spending_money, money_leftover, cost["quantity"], cost["unit"]);
    money_sheild.value = calculateMoneySpent(spending_money, money_leftover, cost["quantity"], cost["unit"]);
    let armor = document.getElementById("money_armor");
    let weapon = document.getElementById("money_weapon");
    let kit = document.getElementById("money_kit");
    TotalMoneySpent(money_leftover, armor, money_sheild, weapon, kit);
}

async function printWeaponInfo(data) {
    const { index, name, equipment_category, weapon_category,
        category_range, cost, damage, range, weight } = data;

    let spending_money = document.getElementById("money");
    console.log("spending_money");
    console.log(spending_money.value);
    let money_leftover = document.getElementById("money_left");
    money_leftover.textContent = spending_money.value;
    money_leftover.value = spending_money.value;
    console.log("money_leftover");
    console.log(money_leftover.value);
    let money_weapon = document.getElementById("money_weapon");
    
    let equimentInfo = document.getElementById('equiment_name');
    let weightInfo = document.getElementById('weight');
    let rangeInfo = document.getElementById('range');
    let range_CAT = document.getElementById('range_cat');
    let danageInfo = document.getElementById('damage_info');
    let costrInfo = document.getElementById('cost_info');
    let equimentINfo = document.getElementById('equiment_info');
    let damageRoll = document.getElementById('damage_roll');

    equimentInfo.textContent = name;
    weightInfo.textContent = weight;
    rangeInfo.textContent = "" + range["normal"] + " feet. Long is " + range["long"] + "";
    range_CAT.textContent = category_range;
    danageInfo.textContent = "None";
    console.log(cost["quantity"]);
    costrInfo.textContent = "" + cost["quantity"] + " " + cost["unit"] + "";
    equimentINfo.textContent = "None";
    damageRoll.textContent = "None";
    money_weapon.textContent = calculateMoneySpent(spending_money, money_leftover, cost["quantity"], cost["unit"]);
    money_weapon.value = calculateMoneySpent(spending_money, money_leftover, cost["quantity"], cost["unit"]);
    let armor = document.getElementById("money_armor");
    let sheild = document.getElementById("money_sheild");
    let kit = document.getElementById("money_kit");
    TotalMoneySpent(money_leftover, armor, sheild, money_weapon, kit);
}

async function printInfo_One_Equiment(data) {
    const { index, name, cost, weight, desc } = data;

    let spending_money = document.getElementById("money");
    console.log("spending_money");
    console.log(spending_money.value);
    let money_leftover = document.getElementById("money_left");
    money_leftover.textContent = spending_money.value;
    money_leftover.value = spending_money.value;
    console.log("money_leftover");
    console.log(money_leftover.value);
    let money_kit = document.getElementById("money_kit");

    let equimentInfo = document.getElementById('equiment_name');
    let weightInfo = document.getElementById('weight');
    let rangeInfo = document.getElementById('range');
    let range_CAT = document.getElementById('range_cat');
    let danageInfo = document.getElementById('damage_info');
    let costrInfo = document.getElementById('cost_info');
    let equimentINfo = document.getElementById('equiment_info');
    let danageRoll = document.getElementById('damage_roll');

    equimentInfo.textContent = name;
    weightInfo.textContent = weight;
    rangeInfo.textContent = "None";
    range_CAT.textContent = "None";
    danageInfo.textContent = "None";
    costrInfo.textContent = "" + cost["quantity"] + " " + cost["unit"] + "";
    equimentINfo.textContent = desc;
    danageRoll.textContent = "None";
    money_kit.textContent = calculateMoneySpent(spending_money, money_leftover, cost["quantity"], cost["unit"]);
    money_kit.value = calculateMoneySpent(spending_money, money_leftover, cost["quantity"], cost["unit"]);
    let armor = document.getElementById("money_armor");
    let sheild = document.getElementById("money_sheild");
    let weapon = document.getElementById("money_weapon");
    TotalMoneySpent(money_leftover, armor, sheild, weapon, money_kit);
}

function calculateMoneySpent(spending_money, money_leftover, cost, cost_value) {
    let total = 0;
    let currecny = money_value;
    console.log(money_leftover.value);
    console.log("currecny");
    console.log(currecny);
    console.log(cost_value);
    if (currecny == 'cp') {
        if (cost_value == 'sp') {
            total = (parseInt(spending_money.value) - (parseInt(cost) / 10));
            // money_leftover.textContent = (parseInt(spending_money.value) - (parseInt(cost)/10));
        } else if (cost_value == 'ep') {
            total = (parseInt(spending_money.value) - (parseInt(cost) / 50));
            // money_leftover.textContent = (parseInt(spending_money.value) - (parseInt(cost)/50));
        } else if (cost_value == 'gp') {
            total = (parseInt(spending_money.value) - (parseInt(cost) / 100));
            // money_leftover.textContent = (parseInt(spending_money.value) - (parseInt(cost)/100));
        } else if (cost_value == 'pp') {
            total = (parseInt(spending_money.value) - (parseInt(cost) / 1000));
            // money_leftover.textContent = (parseInt(spending_money.value) - (parseInt(cost)/1000));
        } else {
            // money_leftover.textContent = (parseInt(spending_money.value) - parseInt(cost));
            total = (parseInt(spending_money.value) - parseInt(cost));
        }
    } else if (currecny == 'sp') {
        if (cost_value == 'cp') {
            // money_leftover.textContent = (parseInt(spending_money.value) - (parseInt(cost)*10));
            total = (parseInt(spending_money.value) - (parseInt(cost) * 10));
        } else if (cost_value == 'ep') {
            // money_leftover.textContent = (parseInt(spending_money.value) - (parseInt(cost)/5));
            total = (parseInt(spending_money.value) - (parseInt(cost) / 5));
        } else if (cost_value == 'gp') {
            // money_leftover.textContent = (parseInt(spending_money.value) - (parseInt(cost)/10));
            total = (parseInt(spending_money.value) - (parseInt(cost) / 10));
        } else if (cost_value == 'pp') {
            // money_leftover.textContent = (parseInt(spending_money.value) - (parseInt(cost)/100));
            total = (parseInt(spending_money.value) - (parseInt(cost) / 100));
        } else {
            // money_leftover.textContent = (parseInt(spending_money.value) - parseInt(cost));
            total = (parseInt(spending_money.value) - parseInt(cost));;
        }
    } else if (currecny == 'ep') {
        if (cost_value == 'sp') {
            // money_leftover.textContent = (parseInt(spending_money.value) - (parseInt(cost)*5));
            total = (parseInt(spending_money.value) - (parseInt(cost) * 5));
        } else if (cost_value == 'cp') {
            // money_leftover.textContent = (parseInt(spending_money.value) - (parseInt(cost)*50));
            total = (parseInt(spending_money.value) - (parseInt(cost) * 50));
        } else if (cost_value == 'gp') {
            // money_leftover.textContent = (parseInt(spending_money.value) - (parseInt(cost)/2));
            total = (parseInt(spending_money.value) - (parseInt(cost) / 2));
        } else if (cost_value == 'pp') {
            // money_leftover.textContent = (parseInt(spending_money.value) - (parseInt(cost)/20));
            total = (parseInt(spending_money.value) - (parseInt(cost) / 20));
        } else {
            // money_leftover.textContent = (parseInt(spending_money.value) - parseInt(cost));
            total = (parseInt(spending_money.value) - parseInt(cost));
        }
    } else if (currecny == 'gp') {
        if (cost_value == 'sp') {
            // money_leftover.textContent = (parseInt(spending_money.value) - (parseInt(cost)*10));
            total = (parseInt(spending_money.value) - (parseInt(cost) * 10));
        } else if (cost_value == 'ep') {
            // money_leftover.textContent = (parseInt(spending_money.value) - (parseInt(cost)*2));
            total = (parseInt(spending_money.value) - (parseInt(cost) * 2));
        } else if (cost_value == 'cp') {
            // money_leftover.textContent = (parseInt(spending_money.value) - (parseInt(cost)*100));
            total = (parseInt(spending_money.value) - (parseInt(cost) * 100));
        } else if (cost_value == 'pp') {
            // money_leftover.textContent = (parseInt(spending_money.value) - (parseInt(cost)/10));
            total = (parseInt(spending_money.value) - (parseInt(cost) / 10));
        } else {
            // money_leftover.textContent = (parseInt(spending_money.value) - parseInt(cost));
            total = (parseInt(spending_money.value) - (parseInt(cost) / 10));
        }
    } else if (currecny == 'pp') {
        if (cost_value == 'sp') {
            total = (parseInt(spending_money.value) - (parseInt(cost) * 100));
            //money_leftover.textContent = (parseInt(spending_money.value) - (parseInt(cost)*100));
        } else if (cost_value == 'ep') {
            total = (parseInt(spending_money.value) - (parseInt(cost) * 20));
            //money_leftover.textContent = (parseInt(spending_money.value) - (parseInt(cost)*20));
        } else if (cost_value == 'gp') {
            total = (parseInt(spending_money.value) - (parseInt(cost) * 10));
            //money_leftover.textContent = (parseInt(spending_money.value) - (parseInt(cost)*10));
        } else if (cost_value == 'cp') {
            total = (parseInt(spending_money.value) - (parseInt(cost) * 1000));
            //money_leftover.textContent = (parseInt(spending_money.value) - (parseInt(cost)*1000));
        } else {
            total = (parseInt(spending_money.value) - parseInt(cost));
            // money_leftover.textContent = (parseInt(spending_money.value) - parseInt(cost));
        }
    }
    // console.log("money_leftover");
    // console.log(money_leftover.textContent);
    console.log("total");
    console.log(total);
    return total;
}

function TotalMoneySpent(money_leftover, armor, shield, weapon, kit) {
    let money_total = 0;
    let money_total_armor = 0;
    let money_total_sheild = 0;
    let money_total_kit = 0;
    let money_total_weapon = 0;
    if (armor.value == 0) { 
        armor.value = 0; 
    } else {
        money_total_armor = parseInt(money_leftover.value) - armor.value;
    }
    if (shield.value == 0) { 
        shield.value = 0; 
    } else {
        money_total_sheild = parseInt(money_leftover.value) - shield.value;
    }
    if (weapon.value == 0) { 
        weapon.value = 0; 
    } else {
        money_total_weapon = parseInt(money_leftover.value) - weapon.value;
    } 
    if (kit.value == 0) { 
        kit.value = 0; 
    } else {
        money_total_kit = parseInt(money_leftover.value) - kit.value;
    }
    console.log("armor_value"); 
    console.log(armor.value);
    console.log("sheild_value");
    console.log(shield.value);
    console.log("weapon_value");
    console.log(weapon.value);
    console.log("kit_value");
    console.log(kit.value);
    money_total = parseInt(money_leftover.value) - (money_total_kit + money_total_sheild + money_total_weapon + money_total_armor);
    money_leftover.textContent = money_total;
}
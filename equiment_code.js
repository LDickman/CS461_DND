import { fetchDataFromAPI, clickOnDropDownMenu, getEquimentListData } from './help.js';

const api_equiment = 'https://www.dnd5eapi.co/api/equipment-categories/';
const api_OneEquiment = 'https://www.dnd5eapi.co/api/equipment/';
let userArmorProtect = document.getElementById("char_armor_class");
let userDex = document.getElementById("DEX_bonus");
let userSTR = document.getElementById("STR_bonus");
let money_value = "";
let ul = document.getElementById('weaponList');
let button = document.getElementById('weapon_option');
let ul2 = document.getElementById('armorList');
let button2 = document.getElementById('armor_option');
let ul3 = document.getElementById('shieldList');
let button3 = document.getElementById('shield_option');
let ul4 = document.getElementById('kitList');
let button4 = document.getElementById('kit_option');
let armor = document.getElementById("money_armor");
let weapon = document.getElementById("money_weapon");
let kit = document.getElementById("money_kit");
let shield = document.getElementById("money_sheild");
let money_leftover = document.getElementById("money_left");
let spending_money = document.getElementById("money");
let equimentInfo = document.getElementById('equiment_name');
let equimentPortect = document.getElementById("armor_prot");
let weightInfo = document.getElementById('weight');
let rangeInfo = document.getElementById('range');
let range_CAT = document.getElementById('range_cat');
let danageInfo = document.getElementById('damage_info');
let costrInfo = document.getElementById('cost_info');
let equimentINfo = document.getElementById('equiment_info');
let stealth_info = document.getElementById('stealth_info');
let str_needed = document.getElementById('musle_info');
let damageRoll = document.getElementById('damage_roll');

let money_total = 0;
let money_total_armor = 0;
let money_total_sheild = 0;
let money_total_kit = 0;
let money_total_weapon = 0;

export async function setupPage7() {
    weaponChoice();
    moneyChoice();
}

function moneyChoice() {
    let ul = document.getElementById('moneyList');
    let button = document.getElementById('money_option');
    clickOnDropDownMenu(ul, getValueofCurrency, button);
}

function weaponChoice() {
    clickOnDropDownMenu(ul, weaponAsk, button);
    clickOnDropDownMenu(ul2, armorAsk, button2);
    clickOnDropDownMenu(ul3, sheildAsk, button3);
    clickOnDropDownMenu(ul4, certianEquimentsAsk, button4);
}

export async function equimentCategoryAsk(input) {
    let url = api_equiment + input;
    const data = await fetchDataFromAPI(url);
    return await getEquimentListData(data);
}

async function certianEquimentsAsk(input) {
    if (input == "None"){
        settingValuesToNoneAndZero(kit);
    } else {
        let url = api_OneEquiment + input;
        const data = await fetchDataFromAPI(url);
        printInfo_One_Equiment(data);
    }
}

async function armorAsk(input) {
    if (input == "None") {
        settingValuesToNoneAndZero(armor)
    } else {
        let url = api_OneEquiment + input;
        const data = await fetchDataFromAPI(url);
        printArmorInfo(data);
    }
}

async function sheildAsk(input) {
    if (input == "None") {
        settingValuesToNoneAndZero(shield);
    } else {
        let url = api_OneEquiment + input;
        const data = await fetchDataFromAPI(url);
        printSheildInfo(data);
    }
}

async function weaponAsk(input) {
    if (input == "None") {
        settingValuesToNoneAndZero(weapon);
    } else {
        let url = api_OneEquiment + input;
        const data = await fetchDataFromAPI(url);
        printWeaponInfo(data);
    }
}

function getValueofCurrency(input) {
    if (input == "Copper (cp)") {
        money_value = "cp";
    } else if (input == "Silver (sp)") {
        money_value = "sp";
    } else if (input == "Electrum (ep)") {
        money_value = "ep";
    } else if (input == "Gold (gp)") {
        money_value = "gp";
    } else if (input == "Platinum (pp)") {
        money_value = "pp";
    }
    money_leftover.textContent = spending_money.value;
    money_leftover.value = spending_money.value;
    settingValuestoZero(armor, weapon, shield, kit);
}

function settingValuestoZero(armor_price, weapon_price, shield_price, kit_price) {
    armor_price.textContent = 0;
    weapon_price.textContent = 0;
    kit_price.textContent = 0;
    shield_price.textContent = 0;
    armor_price.value = 0;
    weapon_price.value = 0;
    kit_price.value = 0;
    shield_price.value = 0;
}

async function printArmorInfo(data) {
    const { name, index, equipment_category, armor_category,
        armor_class, str_minimum, stealth_disadvantage, weight, cost } = data;

    let userArmor = document.getElementById("char_armor");
    userArmor.textContent = name;
    money_leftover.textContent = spending_money.value;
    money_leftover.value = spending_money.value;
    let armor_money = document.getElementById('money_armor');

    equimentInfo.textContent = name;
    weightInfo.textContent = weight;
    equimentPortect.textContent = armor_class.base;
    userArmorProtect.textContent = parseInt(equimentPortect.textContent) + parseInt(userDex.textContent);
    userArmorProtect.value = parseInt(armor_class) + parseInt(userDex.textContent);
    rangeInfo.textContent = "None";
    range_CAT.textContent = "None";
    danageInfo.textContent = "None";
    costrInfo.textContent = "" + cost["quantity"] + " " + cost["unit"] + "";
    equimentINfo.textContent = "None";
    stealth_info.textContent = stealth_disadvantage;
    str_needed.textContent = str_minimum;
    damageRoll.textContent = "None";
    armor_money.textContent = calculateMoneySpent(spending_money, money_leftover, cost["quantity"], cost["unit"]);
    armor_money.value = calculateMoneySpent(spending_money, money_leftover, cost["quantity"], cost["unit"]);
    TotalMoneySpent(money_leftover, armor_money, shield, weapon, kit);
}

async function printSheildInfo(data) {
    const { name, armor_class, str_minimum, stealth_disadvantage, weight, cost } = data;

    money_leftover.textContent = spending_money.value;
    money_leftover.value = spending_money.value;
    let money_sheild = document.getElementById("money_sheild");
    let userShield = document.getElementById("char_sheild");
    userShield.textContent = name;

    equimentInfo.textContent = name;
    weightInfo.textContent = weight;
    equimentPortect.textContent = armor_class.base;
    userArmorProtect.textContent = parseInt(equimentPortect.textContent) + userArmorProtect.value;
    rangeInfo.textContent = "None";
    danageInfo.textContent = "None";
    costrInfo.textContent = "" + cost["quantity"] + " " + cost["unit"] + "";
    equimentINfo.textContent = "None";
    stealth_info.textContent = stealth_disadvantage;
    str_needed.textContent = str_minimum;
    damageRoll.textContent = "None";
    money_sheild.textContent = calculateMoneySpent(spending_money, money_leftover, cost["quantity"], cost["unit"]);
    money_sheild.value = calculateMoneySpent(spending_money, money_leftover, cost["quantity"], cost["unit"]);
    TotalMoneySpent(money_leftover, armor, money_sheild, weapon, kit);
}

async function printWeaponInfo(data) {
    const { index, name, equipment_category, weapon_category,
        category_range, cost, damage, range, weight } = data;

    money_leftover.textContent = spending_money.value;
    money_leftover.value = spending_money.value;
    let money_weapon = document.getElementById("money_weapon");
    let userWeapon = document.getElementById("char_weapon");
    let attackBonus = 2 + parseInt(userSTR.textContent);
    userWeapon.textContent = name + "      Attack Bonus: " + attackBonus + "      Damage Type: " + damage.damage_dice + " " + damage.damage_type.name;

    equimentInfo.textContent = name;
    weightInfo.textContent = weight;
    rangeInfo.textContent = "" + range["normal"] + " feet. Long is " + range["long"] + "";
    range_CAT.textContent = category_range;
    danageInfo.textContent = damage.damage_type.name;
    costrInfo.textContent = "" + cost["quantity"] + " " + cost["unit"] + "";
    equimentINfo.textContent = "None";
    stealth_info.textContent = "None"
    str_needed.textContent = "None"
    equimentPortect.textContent = "None";
    userArmorProtect.textContent = "None"
    damageRoll.textContent = damage.damage_dice;
    money_weapon.textContent = calculateMoneySpent(spending_money, money_leftover, cost["quantity"], cost["unit"]);
    money_weapon.value = calculateMoneySpent(spending_money, money_leftover, cost["quantity"], cost["unit"]);
    let armor = document.getElementById("money_armor");
    let sheild = document.getElementById("money_sheild");
    let kit = document.getElementById("money_kit");
    TotalMoneySpent(money_leftover, armor, sheild, money_weapon, kit);
}

async function printInfo_One_Equiment(data) {
    const { index, name, cost, weight, desc } = data;

    money_leftover.textContent = spending_money.value;
    money_leftover.value = spending_money.value;
    let money_kit = document.getElementById("money_kit");
    let userKit = document.getElementById("char_kit");
    let sheild = document.getElementById("money_sheild");
    userKit.textContent = name;

    equimentInfo.textContent = name;
    weightInfo.textContent = weight;
    rangeInfo.textContent = "None";
    range_CAT.textContent = "None";
    danageInfo.textContent = "None";
    costrInfo.textContent = "" + cost["quantity"] + " " + cost["unit"] + "";
    equimentINfo.textContent = desc;
    stealth_info.textContent = "None"
    str_needed.textContent = "None"
    damageRoll.textContent = "None";
    money_kit.textContent = calculateMoneySpent(spending_money, money_leftover, cost["quantity"], cost["unit"]);
    money_kit.value = calculateMoneySpent(spending_money, money_leftover, cost["quantity"], cost["unit"]);
    TotalMoneySpent(money_leftover, armor, sheild, weapon, money_kit);
}

function calculateMoneySpent(spending_money, money_leftover_total, cost, cost_value) {
    let total = 0;
    let currecny = money_value;
    if (currecny == 'cp') {
        if (cost_value == 'sp') {
            total = (parseInt(spending_money.value) - (parseInt(cost) / 10));
        } else if (cost_value == 'ep') {
            total = (parseInt(spending_money.value) - (parseInt(cost) / 50));
        } else if (cost_value == 'gp') {
            total = (parseInt(spending_money.value) - (parseInt(cost) / 100));
        } else if (cost_value == 'pp') {
            total = (parseInt(spending_money.value) - (parseInt(cost) / 1000));
        } else {
            total = (parseInt(spending_money.value) - parseInt(cost));
        }
    } else if (currecny == 'sp') {
        if (cost_value == 'cp') {
            total = (parseInt(spending_money.value) - (parseInt(cost) * 10));
        } else if (cost_value == 'ep') {
            total = (parseInt(spending_money.value) - (parseInt(cost) / 5));
        } else if (cost_value == 'gp') {
            total = (parseInt(spending_money.value) - (parseInt(cost) / 10));
        } else if (cost_value == 'pp') {
            total = (parseInt(spending_money.value) - (parseInt(cost) / 100));
        } else {
            total = (parseInt(spending_money.value) - parseInt(cost));;
        }
    } else if (currecny == 'ep') {
        if (cost_value == 'sp') {
            total = (parseInt(spending_money.value) - (parseInt(cost) * 5));
        } else if (cost_value == 'cp') {
            total = (parseInt(spending_money.value) - (parseInt(cost) * 50));
        } else if (cost_value == 'gp') {
            total = (parseInt(spending_money.value) - (parseInt(cost) / 2));
        } else if (cost_value == 'pp') {
            total = (parseInt(spending_money.value) - (parseInt(cost) / 20));
        } else {
            total = (parseInt(spending_money.value) - parseInt(cost));
        }
    } else if (currecny == 'gp') {
        if (cost_value == 'sp') {
            total = (parseInt(spending_money.value) - (parseInt(cost) * 10));
        } else if (cost_value == 'ep') {
            total = (parseInt(spending_money.value) - (parseInt(cost) * 2));
        } else if (cost_value == 'cp') {
            total = (parseInt(spending_money.value) - (parseInt(cost) * 100));
        } else if (cost_value == 'pp') {
            total = (parseInt(spending_money.value) - (parseInt(cost) / 10));
        } else {
            total = (parseInt(spending_money.value) - (parseInt(cost) / 10));
        }
    } else if (currecny == 'pp') {
        if (cost_value == 'sp') {
            total = (parseInt(spending_money.value) - (parseInt(cost) * 100));
        } else if (cost_value == 'ep') {
            total = (parseInt(spending_money.value) - (parseInt(cost) * 20));
        } else if (cost_value == 'gp') {
            total = (parseInt(spending_money.value) - (parseInt(cost) * 10));
        } else if (cost_value == 'cp') {
            total = (parseInt(spending_money.value) - (parseInt(cost) * 1000));
        } else {
            total = (parseInt(spending_money.value) - parseInt(cost));
        }
    }
    return total;
}

function TotalMoneySpent(money_leftover_total, armor_price, shield_price, weapon_price, kit_price) {
    money_total_armor = checkingValueOfEquiment(armor_price, money_leftover_total);
    money_total_sheild = checkingValueOfEquiment(shield_price, money_leftover_total);
    money_total_weapon = checkingValueOfEquiment(weapon_price, money_leftover_total);
    money_total_kit = checkingValueOfEquiment(kit_price, money_leftover_total);
    money_total = parseInt(money_leftover_total.value) - (money_total_kit + money_total_sheild + money_total_weapon + money_total_armor);
    money_leftover_total.textContent = money_total;
}

function checkingValueOfEquiment(price, money){
    let total = 0;
    if (price.value == 0) {
        price.value = 0;
    } else {
        total = parseInt(money.value) - price.value;
    }
    return total;
}

function settingValuesToNoneAndZero(price) {
    price.textContent = 0;
    price.value = 0;
    descriptionIsSetToNone();
}

function descriptionIsSetToNone() {
    equimentInfo.textContent = "None";
    weightInfo.textContent = "None";
    rangeInfo.textContent = "None";
    range_CAT.textContent = "None";
    danageInfo.textContent = "None";
    costrInfo.textContent = "None";
    equimentINfo.textContent = "None";
    stealth_info.textContent = "None"
    str_needed.textContent = "None"
    equimentPortect.textContent = "None";
    userArmorProtect.textContent = "None"
    damageRoll.textContent = "None";
}
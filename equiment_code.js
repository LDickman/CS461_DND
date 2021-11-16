import { fetchDataFromAPI, clickOnDropDownMenu, creatingListofArrayForEquiment, createListOfEquimentOptions, getNames, getListToHTML, getArrayOfNames, createListOfProficiencyOptions, getArrayOfIndexs, getInfoNames, getNumberChoose,
    getNumberBonuses, getListCheckBoxes, getArrayOfNumberBonuses, getNameBonuses, settingValueOfScore, clearAllFromList, getEquimentListData} from './help.js';

const api_equiment = 'https://www.dnd5eapi.co/api/equipment-categories/';
const api_OneEquiment = 'https://www.dnd5eapi.co/api/equipment/'
let total = 0;
let money_value = "";

export async function setupPage7() {
    console.log("starting 7");
    weaponChoice();
    moneyChoice();
    // armorChoice();
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
    if (input == "Copper (cp)"){
        console.log("cp");
        money_value = "cp";
    } else if (input == "Silver (sp)"){
        console.log("sp");
        money_value = "sp";
    } else if (input == "Electrum (ep)"){
        console.log("ep");
        money_value = "ep";
    } else if (input == "Gold (gp)"){
        console.log("gp");
        money_value = "gp";
    } else if (input == "Platinum (pp)"){
        console.log("pp");
        money_value = "pp";
    }
    console.log("money_value");
    console.log(money_value);
}

async function printArmorInfo(data) {
    const { name, index, equipment_category, armor_category,
        armor_class, str_minimum, stealth_disadvantage, weight, cost } = data;

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
    costrInfo.textContent = "" + cost["quantity"] + " "+ cost["unit"] +"";
    equimentINfo.textContent = "None";
    stealth_info.textContent = stealth_disadvantage;
    str_needed.textContent = str_minimum;
    damageRoll.textContent = "None";
    calculateTotalMoneySpent(cost["quantity"], cost["unit"]);
}

async function printSheildInfo(data) {
    const { name, index, equipment_category, armor_category,
        armor_class, str_minimum, stealth_disadvantage, weight, cost } = data;

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
    costrInfo.textContent = "" + cost["quantity"] + " "+ cost["unit"] +"";
    equimentINfo.textContent = "None";
    stealth_info.textContent = stealth_disadvantage;
    str_needed.textContent = str_minimum;
    damageRoll.textContent = "None";
    calculateTotalMoneySpent(cost["quantity"], cost["unit"]);
}

async function printWeaponInfo(data) {
    const { index, name, equipment_category, weapon_category,
        category_range, cost, damage, range, weight } = data;
    
    console.log("cost");
    console.log(cost);
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
    rangeInfo.textContent =  "" + range["normal"] + " feet. Long is "+ range["long"] +"";
    range_CAT.textContent = category_range;
    danageInfo.textContent = "None";
    console.log(cost["quantity"]);
    costrInfo.textContent = "" + cost["quantity"] + " "+ cost["unit"] +"";
    equimentINfo.textContent = "None";
    damageRoll.textContent = "None";
    calculateTotalMoneySpent(cost["quantity"], cost["unit"]);
}

async function printInfo_One_Equiment(data) {
    const { index, name, cost, weight, desc } = data;

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
    costrInfo.textContent = "" + cost["quantity"] + " "+ cost["unit"] +"";
    equimentINfo.textContent = desc;
    danageRoll.textContent = "None";
    calculateTotalMoneySpent(cost["quantity"], cost["unit"]);
}

function calculateTotalMoneySpent(cost, cost_value){
    let money = document.getElementById("money");
    let spending_money = money.getElementsByTagName('input');
    console.log("spending_money");
    console.log(spending_money.textContent);
    let money_leftover = document.getElementById("money_left");
    money_leftover.textContent = spending_money.textContent;
    let currecny = money_value;
    console.log("currecny");
    console.log(currecny);
    if(currecny == 'cp') {
        if(cost_value == 'sp') {
            total = (parseInt(spending_money) - (parseInt(cost)/10));
            money_leftover.textContent = total;
        } else if (cost_value == 'ep') {
            total = (parseInt(spending_money) - (parseInt(cost)/50));
            money_leftover.textContent = total;
        } else if (cost_value == 'gp') {
            total = (parseInt(spending_money) - (parseInt(cost)/100));
            money_leftover.textContent = total;
        } else if (cost_value == 'pp') {
            total = (parseInt(spending_money) - (parseInt(cost)/1000));
            money_leftover.textContent = total;
        } else {
            total = (parseInt(spending_money) - parseInt(cost));
            money_leftover.textContent = total;
        }
    } else if(currecny == 'sp') {
        if(cost_value == 'cp') {
            total = (parseInt(spending_money) - (parseInt(cost)*10));
            money_leftover.textContent = total;
        } else if (cost_value == 'ep') {
            total = (parseInt(spending_money) - (parseInt(cost)/5));
            money_leftover.textContent = total;
        } else if (cost_value == 'gp') {
            total = (parseInt(spending_money) - (parseInt(cost)/10));
            money_leftover.textContent = total;
        } else if (cost_value == 'pp') {
            total = (parseInt(spending_money) - (parseInt(cost)/100));
            money_leftover.textContent = total;
        } else {
            total = (parseInt(spending_money) - parseInt(cost));
            money_leftover.textContent = total;
        }
    } else if(currecny == 'ep') {
        if(cost_value == 'sp') {
            total = (parseInt(spending_money) - (parseInt(cost)*5));
            money_leftover.textContent = total;
        } else if (cost_value == 'cp') {
            total = (parseInt(spending_money) - (parseInt(cost)*50));
            money_leftover.textContent = total;
        } else if (cost_value == 'gp') {
            total = (parseInt(spending_money) - (parseInt(cost)/2));
            money_leftover.textContent = total;
        } else if (cost_value == 'pp') {
            total = (parseInt(spending_money) - (parseInt(cost)/20));
            money_leftover.textContent = total;
        } else {
            total = (parseInt(spending_money) - parseInt(cost));
            money_leftover.textContent = total;
        }
    } else if(currecny == 'gp') {
        if(cost_value == 'sp') {
            total = (parseInt(spending_money) - (parseInt(cost)*10));
            money_leftover.textContent = total;
        } else if (cost_value == 'ep') {
            total = (parseInt(spending_money) - (parseInt(cost)*2));
            money_leftover.textContent = total;
        } else if (cost_value == 'cp') {
            total = (parseInt(spending_money) - (parseInt(cost)*100));
            money_leftover.textContent = total;
        } else if (cost_value == 'pp') {
            total = (parseInt(spending_money) - (parseInt(cost)/10));
            money_leftover.textContent = total;
        } else {
            total = (parseInt(spending_money) - parseInt(cost));
            money_leftover.textContent = total;
        }
    } else if(currecny == 'pp') {
        if(cost_value == 'sp') {
            total = (parseInt(spending_money) - (parseInt(cost)*100));
        } else if (cost_value == 'ep') {
            total = (parseInt(spending_money) - (parseInt(cost)*20));
            money_leftover.textContent = total;
        } else if (cost_value == 'gp') {
            total = (parseInt(spending_money) - (parseInt(cost)*10));
            money_leftover.textContent = total;
        } else if (cost_value == 'cp') {
            total = (parseInt(spending_money) - (parseInt(cost)*1000));
            money_leftover.textContent = total;
        } else {
            total = (parseInt(spending_money) - parseInt(cost));
            money_leftover.textContent = total;
        }
    }
    console.log("money_leftover");
    console.log(money_leftover.textContent);
    console.log("total");
    console.log(total);
}
import { getRaceInput } from './race_code.js';
import { getUserInputClass } from './class_code.js';

export async function setupLastPage() {
    console.log("final");
    await printUserInput();
}


export async function printUserInput() {
    let className = document.getElementById("char_class");
    let raceName = document.getElementById('char_race');
    let userBackground = document.getElementById('char_background');

    let userProficiences = document.getElementById("char_bonus")
    let userCasting = document.getElementById('char_casting');
    let userArmorClass = document.getElementById("char_armor_class");
    let userSpeed = document.getElementById("char_speed");
    let userSTR = document.getElementById("char_STR")
    let userDEX = document.getElementById('char_DEX');
    let userWIS = document.getElementById("char_WIS");
    let userCHAR = document.getElementById("char_CHAR");
    let userINT = document.getElementById("char_INT")
    let userCON = document.getElementById('char_CON');
    let userInitative = document.getElementById("char_init");
    let userSkill = document.getElementById("char_skills");
    let userWeapon = document.getElementById("char_weapon")
    let userSheild = document.getElementById('char_sheild');
    let userKit = document.getElementById("char_kit");
    let userLanguage = document.getElementById("char_language");
    let userOtherProficieces = document.getElementById("char_other_proficiences")
    let userSpellCasting = document.getElementById('char_casting');
    let userSpellAbility = document.getElementById("char_ability");
    let userDice = document.getElementById("char_DC");
    let userSpellBonus = document.getElementById("char_spell_bonus");
    let userSpells = document.getElementById("char_spells");

    console.log("User Class choice")
    console.log(getUserInputClass());
    className.textContent = getUserInputClass();
    raceName.textContent = getRaceInput();

    console.log("printing last page");
}


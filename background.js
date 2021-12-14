import { fetchDataFromAPI, clickOnDropDownMenu, creatingListofArrayForEquiment, createListOfEquimentOptions, getNames, getListToHTML, getArrayOfNames, createListOfProficiencyOptions, getArrayOfIndexs, getInfoNames, getNumberChoose,
    getNumberBonuses, getListCheckBoxes, getArrayOfNumberBonuses, getNameBonuses, settingValueOfScore, clearAllFromList, getEquimentListData} from './help.js';
const api_alignment = 'https://www.dnd5eapi.co/api/alignments/';
const api_background = 'https://www.dnd5eapi.co/api/backgrounds/';

export async function setupPage3() {
    console.log("starting 3");
    backgroundChoice();
    alignmentChoice();
}

function backgroundChoice() {
    let ul = document.getElementById('backgroundList');
    let button = document.getElementById('background_option');
    console.log(ul);
    clickOnDropDownMenu(ul, backgroundAsk, button);
}

function alignmentChoice() {
    let ul = document.getElementById('alignmentList');
    let button = document.getElementById('alignment_option');
    console.log(ul);
    clickOnDropDownMenu(ul, alignmentAsk, button);
}

async function backgroundAsk(input) {
    if (input != "acolyte") {
        printExtraBackgroundData(input);
    } else if (input == "acolyte") {
        console.log("Class: " + input);
        let url = api_background + input;
        console.log(url);
        const data = await fetchDataFromAPI(url);
        printBackgroundData(data);
    }
}

async function alignmentAsk(input) {
    let userAlignment = document.getElementById("char_alignment");
    userAlignment.textContent = input;
    console.log("alignment: " + input);
    if (input == "None") {
        document.getElementById("alignment_choice").textContent = "None";
    } else {
        let url = api_alignment + input;
        const data = await fetchDataFromAPI(url);
        printAlignmentData(data);
    }
}

async function printAlignmentData(data) {
    console.log("Aligemnet" + data);
    const { desc } = data
    document.getElementById("alignment_choice").textContent = desc;
}

async function printBackgroundData(data) {
    console.log("background" + data);
    const { name, language_options, starting_proficiencies, starting_equipment, feature,
        starting_equipment_options, personality_traits, ideals, bonds, flaws } = data;


    let beginnerSkills = document.getElementById('skills_needed');
    let userBackground = document.getElementById('char_background');
    let wantedLanguages = document.getElementById("languages_options");
    let background_info = document.getElementById('background_des');
    let background_Skill_info = document.getElementById('background_Skill_info')

    let language_Array;

    if (language_options == undefined) {
        wantedLanguages.textContent = "None";
    } else {
        console.log(language_options);
        language_Array = language_options.from.map(function (el) {
            return el.name;
        });
        wantedLanguages.textContent = language_Array.join(',     ');
    }

    let Skill_array = getNames(starting_proficiencies);
    background_info.textContent = feature.desc;
    beginnerSkills.textContent = Skill_array;

    let items = Skill_array.toString().split(",");
    let skill_names = new Array;
    for (let i = 0, j = items.length; i < j; i++) {
        skill_names.push(items[i].replace("Skill:", ""));
    }
    userBackground.textContent = name;
    background_Skill_info.textContent = skill_names;
    console.log("printing page 3");
}

async function printExtraBackgroundData(input) {
    console.log("background" + input);
    let userBackground = document.getElementById('char_background');
    let beginnerSkills = document.getElementById('skills_needed');
    let wantedLanguages = document.getElementById("languages_options");
    let background_info = document.getElementById('background_des');
    let background_Skill_info = document.getElementById('background_Skill_info');
    userBackground.textContent = input;

    if (input == "criminal") {
        beginnerSkills.textContent = "Deception, Stealth";
        wantedLanguages.textContent = "None";
        background_info.textContent = 'You are an experienced criminal with a history of' +
            ' breaking the law. You have spent a lot of time among ' +
            'other criminals and still have contacts within the' +
            'criminal underworld. You’re far closer than most people ' +
            'to the world of murder, theft, and violence that pervades ' +
            'the underbelly of civilization, and you have survived up to ' +
            'this point by flouting the rules and regulations of society ' +
            'You have a reliable and trustworthy contact who acts as ' +
            'your liaison to a network of other criminals. You know ' +
            'how to get messages to and from your contact, even over ' +
            'great distances; specifically, you know ' +
            'the local messengers, corrupt caravan masters, ' +
            'and seedy sailors who can deliver messages for you.';

        background_Skill_info.textContent = "Deception, Stealth";
    } else if (input == "folk-hero") {
        beginnerSkills.textContent = "Animal Handling, Survival";
        wantedLanguages.textContent = "None"
        background_info.textContent = "Since you come from the ranks of the common folk, you fit in among them with ease. You can find a place to hide, rest, or recuperate among other commoners, unless you have shown yourself to be a danger to them. They will shield you from the law or anyone else searching for you, though they will not risk their lives for you.";
        background_Skill_info.textContent = "Animal Handling, Survival";
    } else if (input == "noble") {
        beginnerSkills.textContent = "History, Persuasion";
        wantedLanguages.textContent = "One extra lanuage to select from";
        background_info.textContent = "Thanks to your noble birth, people are inclined to think the best of you. You are welcome in high society, and people assume you have the right to be wherever you are. The common folk make every effort to accommodate you and avoid your displeasure, and other people of high birth treat you as a member of the same social sphere. You can secure an audience with a local noble if you need to.";
        background_Skill_info.textContent = "History, Persuasion";
    } else if (input == "sage") {
        beginnerSkills.textContent = "Arcana, History"
        wantedLanguages.textContent = "Any";
        background_info.textContent = "When you attempt to learn or recall a piece of lore, if you do not know that information, you often know where and from whom you can obtain it. Usually, this information comes from a library, scriptorium, university, or a sage or other learned person or creature. Your DM might rule that the knowledge you seek is secreted away in an almost inaccessible place, or that it simply cannot be found. Unearthing the deepest secrets of the multiverse can require an adventure or even a whole campaign";
        background_Skill_info.textContent = "Arcana, History";
    } else if (input == "soldier") {
        beginnerSkills.textContent = "Athletics, Intimidation";
        wantedLanguages.textContent = "None"
        background_info.textContent = "You have a military rank from your career as a soldier. Soldiers loyal to your former military organization still recognize your authority and influence, and they defer to you if they are of a lower rank. You can invoke your rank to exert influence over other soldiers and requisition simple equipment or horses for temporary use. You can also usually gain access to friendly military encampments and fortresses where your rank is recognized";
        background_Skill_info.textContent = "Athletics, Intimidation";
    }
    console.log("printing page 3");
}

//import { async } from "regenerator-runtime";

var races;

var api = 'https://www.dnd5eapi.co/api/races/';
//var race = 'human'
var apiKey = '/traits'
var input;

window.addEventListener('load', (event) => {
    console.log("page is loaded");
    setup();
});

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function raceSelect() {
    document.getElementById("raceDropdown").classList.toggle("show");
  }

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    } else if (event.target.matches('.dropbtn')) {
        var text = dropdowns.getElementByName('race');
        raceAsk(text.value);
    }
}

// async function getInfo(eve) {
//     console.log("Get result for dropdown bar");
//     var text = document.getElementsByName('race');
//     console.log("dropdown bar list "+ text);

//     text.addEventListener('click', (event) => {
//         raceAsk(document.querySelector('.dropdown-content ul li').value);
//     });

// }

async function setup() {
    console.log("starting");
    var button = document.querySelector('#submit');
    console.log(input);
    button.addEventListener('click', (event) => {
        raceAsk(document.querySelector('#race').value);
    });

}

async function raceAsk(input) {
    console.log("Race: " + input);
    const url = api + input + apiKey;
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    printData(data);   //--- kept geeting error with function refereance
    // if (input != null) {
    //     console.log(input);
    //     const url = api + input + apiKey;
    //     console.log(url);
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     printData(data);
    // }
    //console.log("asking");
}

// export function gotData(data) {
//     //println(data);
//     races = data;
// }

async function printData(data) {
    console.log(data);
    const { count, results } = data;
    console.log("Count: " + count);
    console.log("Results: " + results);
    // const resultArray = Object.values(results);
    //document.querySelector("#results").textContent = results.toString();
    var String_Array = results.map(function (el) {
        return el.name;
    });
    var url_Array = results.map(function (el) {
        return el.url;
    });
    console.log(url_Array);
    //askTraits(url_Array);
    // var des_Array = url_Array.map( function( el ) {
    //     console.log(el.desc);
    //     return el.desc;
    // });
    //console.log(des_Array);
    document.querySelector("#results").textContent = String_Array.join(',     ');
    //document.querySelector("#des").textContent = des_Array.join(',     ');
    document.querySelector('#count').textContent = count;
    console.log("printing");
}

// async function askTraits(url) {
//     console.log(url);
//     // for (i = 0; i < url.length; i++){
//     // }
//     const response = await fetch(url);
//     const data = await response.json();
//     printInfo(data);
// }

// async function printInfo(data) {
//     var des_Array = url_Array.map( function( el ) {
//         console.log(el.desc);
//         return el.desc;
//     });
//     console.log(des_Array);
//     document.querySelector("#des").textContent = des_Array.join(',     ');
// }

// const api_url = 'https://www.dnd5eapi.co/api/races/human/?ability_bonuses';

// export function getSizeDes() {
//     const response = await fetch(api_url);
//     const data = await response.json();
//     const {size} = data;
//     document.getElementById('size_description').textContent = size;
// }

function getOneAbilityScores() {
    return Math.floor(Math.random() * 15);
}


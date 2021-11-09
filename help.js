/// Function that returns the from API
export async function fetchDataFromAPI(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
}

export function clickOnDropDownMenu(ul, func, button) {
    var items = ul.getElementsByTagName('li');
    console.log(button.textContent);
    console.log(items);
    //console.log(items[0].textContent);   // knows that textcontext works
    ul.addEventListener("click", function (e) {
        for (var i = 0; i < items.length; i++) {
            if (e.target == items[i]) {
                console.log(items[i].textContent);
                func(items[i].textContent);
                button.textContent = items[i].textContent;
            }
        }
    });
}

// Creates the list for the dropdown menue in the HTML
export async function getListToHTML(array, list) {
    array.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = item;
        list.appendChild(li);
    })
}

/// Function that gets the names within the object Array 
/// within the free API access DND e5 documentation and have it converted to a string
export function getNames(link) {
    var empty = "None";
    if (dataValid(link)) {
        var array = link.map(function (el) {
            return el.name;
        });
        return array.join(',     ');
    } else {
        return empty;
    }
}

/// Function that gets the names within the object Array 
/// within the free API access DND e5 documentation and have it converted to a Array, 
// This function is to help to create the list of options with JS instead within the HTML section
export function getArrayOfNames(link) {
    var empty = "None";
    if (dataValid(link)) {
        var array = link.map(function (el) {
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
    var empty = "None";
    if (dataValid(link)) {
        var array = link.map(function (el) {
            return el.index;
        });
        return array;//.join(',     ');
    } else {
        return empty;
    }
}


/// Function that gets the name within the object Array called info
/// within the free API access DND e5 documentation and have it converted to a string 
export function getInfoNames(link) {
    var empty = "None";
    if (dataValid(link)) {
        var array = link.info.map(function (el) {
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
    var empty = "None";
    if (dataValid(link)) {
        var array = link.map(function (el) {
            return el.choose;
        });
        return array.join(',     ');
    } else {
        return empty;
    }
}

/// Function that gets the bonus within the object Array called info
/// within the free API access DND e5 documentation and have it converted to a string 
export function getNumberBonuses(link) {
    var empty = "None";
    if (dataValid(link)) {
        var array = link.map(function (el) {
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
    var empty = "None";
    var emptyArray = new Array;
    if (dataValid(link)) {
        var array = link.map(function (el) {
            return el.bonus;
        });
        return array;//.join(',     ');
    } else {
        emptyArray.push(empty);
        return emptyArray;
    }
}

/// Function that gets the ability_score within the object Array 
/// within the free API access DND e5 documentation and have it converted to a Array, 
// This function is to help to create the list of options with JS instead within the HTML section
export function getNameBonuses(link) {
    var empty = "None";
    var emptyArray = new Array;
    if (dataValid(link)) {
        var array = link.map(function (el) {
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

/// creates list of langanges in checkbox format
export function getListCheckBoxes(array, list){
    console.log("Array");
    console.log(array);
    for (var i = 0; i < array.length; i++) {
            var checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = array[i];
            checkbox.name = 'language';
            checkbox.value = array[i];
            checkbox.onclick = checkboxSlecetion();

            var label = document.createElement('label')
            label.htmlFor = array[i];
            label.appendChild(document.createTextNode(array[i]));

            var br = document.createElement('br');

            list.appendChild(checkbox);
            list.appendChild(label);
            list.appendChild(br);
    }
}

function checkboxSlecetion() {
    var Languagelist = document.getElementById("languageList");
    // Get the checkbox
    var checkBox = Languagelist.getElementsByTagName('input');
    //setting limit of number of selected languages
    var limit = 2;
    for (var i = 0; i < checkBox.length; i++) {
        checkBox[i].onclick = function() {
            var checkedcount = 0;
            for (var i = 0; i < checkBox.length; i++) {
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
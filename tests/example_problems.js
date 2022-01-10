function isValidUrl(_string) {
  let url_string;
  try {
    url_string = new URL(_string);
  } catch (_) {
    return false;
  }
  return url_string.protocol === "http:" || url_string.protocol === "https:";
}

function ifUrlExist(url) {
  let request = new XMLHttpRequest();
  request.open('GET', url, false);
  request.send(); // there will be a 'pause' here until the response to come.
  // the object request will be actually modified
  if (request.status === 404) {
    return false;
  } else if (request.status != 404) {
    return true;
  }
}

/// Functions from the ability score page for rolling the dice
function rollsForScore(totalRolls) {
  var sum = totalRolls.reduce((a, b) => a + b, 0)
  return (sum);
}

function calcForAbilityScoreModifier(modifier, score) {
  switch (score) {
      case 3:
          return (modifier - 4);
      case 4:
      case 5:
          return (modifier - 3);
      case 6:
      case 7:
          return (modifier - 2);
      case 8:
      case 9:
          return (modifier - 1);
      case 10:
      case 11:
          return (modifier + 0);
      case 12:
      case 13:
          return (modifier + 1);
      case 14:
      case 15:
          return (modifier + 2);
      case 16:
      case 17:
          return (modifier + 3);
      case 18:
          return (modifier + 4);
  }
}
/// End of Functions from the ability score page for rolling the dice

//BOOLEAN VALUES

function welcomeToBoolean() {
  return false;
}

//IF STATEMENTS

function myTrueOrFlase(isItTrue) {
  if (isItTrue) {
    return "Yes it's true";
  }
  return "No it's false";
}
console.log(myTrueOrFlase(true));

function trueOrFlase(wasThatTrue) {
  if (wasThatTrue) {
    return "Yes that was true";
  }
  return "Yes that was false";
}
console.log(trueOrFlase(trueOrFlase));

//EQUAL AND/OR

function testEqual(val) {
  if (val == 12) {
    return "Equal";
  }
  return "Not Equal";
}
console.log(testEqual(10));

function testStrict(val) {
  if (val === 7) {
    return "Equal";
  }
  return "Not Equal";
}
console.log(testStrict(7));

function compareEquality(a, b) {
  if ((a = b)) {
    return "Equal";
  }
  return "Not Equal";
}
console.log(compareEquality(10, "10"));

function testNoEqual(val) {
  if (val != 50) {
    return "Not Equal";
  }
  return "Equal";
}
console.log(testNoEqual(20));

function testGreaterThan(val) {
  if (val > 100) {
    return "Over 100";
  }
  if (val > 10) {
    return "Over 10";
  }
  return "10 or Under";
}
console.log(testGreaterThan(10));

function testGreaterOrEqual(val) {
  if (val >= 50) {
    return "50 or Over";
  }
  if (val >= 20) {
    return "20 or over";
  }
  return "Less than 20";
}
console.log(testGreaterOrEqual(10));

function testLessThan(val) {
  if (val < 30) {
    return "30 or Under";
  }
  if (val < 20) {
    return "Under 20";
  }
  return "20 or over";
}
console.log(testLessThan(60));

function testLessOrEqual(val) {
  if (val <= 25) {
    return "Less than or equal to 25";
  }
  if (val <= 40) {
    return "Less than or equal to 40";
  }
  return "More than 40";
}
console.log(testLessOrEqual(50));

//AND OR OPERATOR

function testLogicalAnd(val) {
  if (val <= 50 && val >= 25) {
    return "Yes";
  }
  return "No";
}
console.log(testLogicalAnd(10));

function testLogicalOr(val) {
  if (val < 10 || val > 20) {
    return "Inside";
  }
  return "Outside";
}
console.log(testLogicalOr(5));

function testElse(val) {
  var result = "";
  if (val > 5) {
    result = "Bigger than five";
  } else {
    result = "5 or smaller";
  }
  return result;
}
console.log(testElse(7));

//ELsE IF

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}

console.log(testElseIf(8));

// LOGICAL ORDER

function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}
console.log(orderMyLogic(20));

//GOLf CODE

var names = [
  "Hole-in -one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];

function golfScore(par, stroke) {
  if (stroke == 1) {
    return names[0];
  } else if (stroke <= par - 2) {
    return names[1];
  } else if (stroke == par - 1) {
    return names[2];
  } else if (stroke == par) {
    return names[3];
  } else if (stroke == par + 1) {
    return names[4];
  } else if (stroke == par + 2) {
    return names[5];
  } else if (stroke == par + 3) {
    return names[6];
  }
}
console.log(golfScore(5, 4));

//SWITCH STATEMENTS

function caseInSwitch(val) {
  var answer = "";
  switch (val) {
    case 1:
      answer = "Alpha";
      break;
    case 2:
      answer = "Beta";
      break;
    case 3:
      answer = "Gamma";
      break;
    case 4:
      answer = "Delta";
      break;
    default:
      answer = "Rays";
      break;
  }
  return answer;
}
console.log(caseInSwitch(0));

//RETURNING BOLEAN VALUES

function isLess(a, b) {
  return a < b;
}
console.log(isLess(10, 15));

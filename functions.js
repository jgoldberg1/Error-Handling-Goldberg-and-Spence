/**
 * Removes part of string between two sub strings
 * @param {string} text The original string
 * @param {string} start The starting string
 * @param {string} end The ending string
 * @return {string} The string in between
 * @throws (Error} If start or end not found
 */
function between(string, start, end) {
    var startAt = string.indexOf(start);
    if (startAt == -1) {
        throw new Error("No start found: " + start);
    }
    startAt += start.length;
    var endAt = string.indexOf(end, startAt);
    if (endAt == -1) {
        throw new Error("No end found: " + end);
    }
    return string.slice(startAt, endAt);
}
/**
 * Returns an area code from a phone number: (###) ###-####
 * @param   {string} phoneNum The phone number
 * @returns {string} The area code
 * @throws {Error} If the format is incorrect
 */
function getAreaCode(phoneNum) {
    var areaCode;
    try {
        areaCode = between(phoneNum, "(", ")");
        areaCode = areaCode.trim();
        if (areaCode.length == 3 && Number(areaCode)) {
            return areaCode;
        }
        else {
            throw new Error("Invalid area code: " + areaCode);
        }
    }
    catch (error) {
        throw new Error("Invalid phone number: " + error.message);
    }
}

function getCentralCode(phoneNum) {
    var centralCode;
    try {
        centralCode = between(phoneNum, ")", "-");
        centralCode = centralCode.trim();
        if (centralCode.length == 3 && Number(centralCode)) {
            return centralCode;
        }
        else {
            throw new Error("Invalid CO code: " + centralCode);
        }
    }
    catch (error) {
        throw new Error("Invalid phone number: " + error.message);
    }
}

function displayCentralCode(inputId, outputId) {
    var outputTextCO = "";
    var phoneNum = document.getElementById(inputId).value;
    // Now try to get the code
    try {
        var centralCode = getCentralCode(phoneNum);
        outputTextCO = "Your central code is " + centralCode;
    }
    catch (error) {
        console.log(error.message);
        outputText = error.message;
    }
    document.getElementById(outputId).innerHTML = outputTextCO;
}
/**
 * Displays the area code for an inputted phone number
 * @param {string} inputId  The element id for the text box
 * @param {string} outputId The element id of message div
 */
function displayAreaCode(inputId, outputId) {
    var outputText = "";
    var phoneNum = document.getElementById(inputId).value;
    // Now try to get the code
    try {
        var areaCode = getAreaCode(phoneNum);
        outputText = "Your area code is " + areaCode;
    }
    catch (error) {
        console.log(error.message);
        outputText = error.message;
    }
    document.getElementById(outputId).innerHTML = outputText;
}

function after(string, start) {
    var emDash = string.indexOf(start);
    var startAt = emDash + 1;
    if (startAt == 10) {
    return string.slice(startAt);
    } else if (startAt == -1) {
        throw new Error("No start found: " + start);
    }
}


function getLineCode(phoneNum) {
var lineCode = "";
try {
    lineCode = after(phoneNum, "-")
    if (lineCode.length == 4) {
        return lineCode;
        } else {
            throw new Error("Invalid line code: " + lineCode);
        }
    } catch (error) {
        throw new Error("Invalid phone number: " + error.message);
    }

}


function displayLineCode(inputId, outputId) {
    var outputTextLC = "";
    var phoneNum = document.getElementById(inputId).value;
    // Now try to get the code
    try {
        var lineCode = getLineCode(phoneNum);
        outputTextLC = "Your line code is " + lineCode;
    }
    catch (error) {
        console.log(error.message);
        outputText = error.message;
    }
    document.getElementById(outputId).innerHTML = outputTextLC;
}



function validPhone(phoneNum) {
if (phoneNum.length == 14 && phoneNum.charAt(0).match("(") && phoneNum.charAt(1).match("[0-9]") && phoneNum.charAt(2).match("[1-9]") && phoneNum.charAt(3).match("[1-9]") && phoneNum.charAt(4).match(")") && phoneNum.charAt(5).match(" ") && phoneNum.charAt(6).match("[1-9]") && phoneNum.charAt(7).match("[1-9]") && phoneNum.charAt(8).match("[1-9]") && phoneNum.charAt(9).match("-") && phoneNum.charAt(10).match("[1-9]") && phoneNum.charAt(11).match("[1-9]") && phoneNum.charAt(12).match("[1-9]") && phoneNum.charAt(13).match("[1-9]")) {
return "Valid Phone Number";
}
else {
return "Invalid Phone Number";
}
}



function displayValidPhone(inputId, outputId) {
    var outputTextPN = "";
    var phoneNum = document.getElementById(inputId).value;
    try {
        var validNum = validPhone(phoneNum);
        outputTextPN = validNum;
    }
    catch(error) {
        console.log(error.message);
        outputText = error.message;
    }
    document.getElementById(outputId).innerHTML = outputTextPN;
}


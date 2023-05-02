function convertLength() {
    var length = parseFloat(document.getElementById("length").value);
    var lengthUnitFrom = document.getElementById("lengthUnitFrom").value;
    var lengthUnitTo = document.getElementById("lengthUnitTo").value;
    var result = 0;
	
  	if (lengthUnitFrom == "meters") {
      
      	if (lengthUnitTo == "kilometers") {
            result = length / 1000;
        } else if (lengthUnitTo == "feet") {
            result = length * 3.28084;
        } else if (lengthUnitTo == "inches") {
            result = length * 39.3701;
        } else {
            result = length;
        }
    } else if (lengthUnitFrom == "feet") {
        if (lengthUnitTo == "meters") {
            result = length / 3.28084;
        } else if (lengthUnitTo == "inches") {
            result = length * 12;
        } else {
            result = length;
        }
    } else if (lengthUnitFrom == "inches") {
        if (lengthUnitTo == "meters") {
            result = length / 39.3701;
        } else if (lengthUnitTo == "feet") {
            result = length / 12;
        } else {
            result = length;
        }
    }

    document.getElementById("lengthResult").innerHTML = length + " " + lengthUnitFrom + " = " + result.toFixed(2) + " " + lengthUnitTo;
}

// Area Conversion Function
function convertArea() {
    var area = document.getElementById("area").value;
    var areaUnitFrom = document.getElementById("areaUnitFrom").value;
    var areaUnitTo = document.getElementById("areaUnitTo").value;
    var result;

    if (areaUnitFrom == "squaremeters") {
        if (areaUnitTo == "squarefeet") {
            result = area * 10.7639;
        } else if (areaUnitTo == "squareinches") {
            result = area * 1550;
        }
    } else if (areaUnitFrom == "squarefeet") {
        if (areaUnitTo == "squaremeters") {
            result = area / 10.7639;
        } else if (areaUnitTo == "squareinches") {
            result = area * 144;
        }
    } else if (areaUnitFrom == "squareinches") {
        if (areaUnitTo == "squaremeters") {
            result = area / 1550;
        } else if (areaUnitTo == "squarefeet") {
            result = area / 144;
        }
    }

    document.getElementById("areaResult").innerHTML = area + " " + areaUnitFrom + " = " + result.toFixed(2) + " " + areaUnitTo;
}




function convertWeight() {
    var weight = parseFloat(document.getElementById("weight").value);
    var weightUnitFrom = document.getElementById("weightUnitFrom").value;
    var weightUnitTo = document.getElementById("weightUnitTo").value;
    var result = 0;

    if (weightUnitFrom == "kilograms") {
        if (weightUnitTo == "pounds") {
            result = weight * 2.20462;
        } else if (weightUnitTo == "ounces") {
            result = weight * 35.274;
        } else {
            result = weight;
        }
    } else if (weightUnitFrom == "pounds") {
        if (weightUnitTo == "kilograms") {
            result = weight / 2.20462;
        } else if (weightUnitTo == "ounces") {
            result = weight * 16;
        } else {
            result = weight;
        }
    } else if (weightUnitFrom == "ounces") {
        if (weightUnitTo == "kilograms") {
            result = weight / 35.274;
        } else if (weightUnitTo == "pounds") {
            result = weight / 16;
        } else {
            result = weight;
        }
    }
    
    document.getElementById("weightResult").innerHTML = weight + " " + weightUnitFrom + " = " + result.toFixed(2) + " " + weightUnitTo;

}

function convertTemperature() {
    var temperature = parseFloat(document.getElementById("temperature").value);
    var temperatureUnitFrom = document.getElementById("temperatureUnitFrom").value;
    var temperatureUnitTo = document.getElementById("temperatureUnitTo").value;
    var result = 0;

    if (temperatureUnitFrom == "celsius") {
        if (temperatureUnitTo == "fahrenheit") {
            result = (temperature * 9/5) + 32;
        } else if (temperatureUnitTo == "kelvin") {
            result = temperature + 273.15;
        } else {
            result = temperature;
        }
    } else if (temperatureUnitFrom == "fahrenheit") {
        if (temperatureUnitTo == "celsius") {
            result = (temperature - 32) * 5/9;
        } else if (temperatureUnitTo == "kelvin") {
        result = (temperature + 459.67) * 5/9;
        } else {
        result = temperature;
        }
        } else if (temperatureUnitFrom == "kelvin") {
        if (temperatureUnitTo == "celsius") {
        result = temperature - 273.15;
        } else if (temperatureUnitTo == "fahrenheit") {
        result = temperature * 9/5 - 459.67;
        } else {
        result = temperature;
        }
    }

    document.getElementById("temperatureResult").innerHTML = temperature + " " + temperatureUnitFrom + " = " + result.toFixed(2) + " " + temperatureUnitTo;

}
    
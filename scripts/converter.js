// This is the function that will convert celsius to fahrenheit
function celsiusToFahrenheit() {
    // Get the value of the input field with id="c"
    var celsius = document.getElementById("c").value;
    // Convert it to a number
    celsius = parseFloat(celsius);
    // Convert celsius to fahrenheit
    var fahrenheit = (celsius * 9 / 5) + 32;
    // Display the result
    document.getElementById("f").value = fahrenheit;
}

// This is the function that will convert kilograms to pounds
function kilogramToPound() {
    // Get the value of the input field with id="kg"
    var kilograms = document.getElementById("kg").value;
    // Convert it to a number
    kilograms = parseFloat(kilograms);
    // Convert kilograms to pounds
    var pounds = kilograms * 2.205;
    // Display the result
    document.getElementById("lbs").value = pounds;
}

// This is the function that will convert kilometers to miles
function kilometerToMile() {
    // Get the value of the input field with id="km"
    var kilometers = document.getElementById("km").value;
    // Convert it to a number
    kilometers = parseFloat(kilometers);
    // Convert kilometers to miles
    var miles = kilometers / 1.609;
    // Display the result
    document.getElementById("m").value = miles;
}
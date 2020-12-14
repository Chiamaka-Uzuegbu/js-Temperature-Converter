//Declaring variables
const inputValue = document.querySelector("#input");
const convertToCelcius = document.querySelector("#celcius");
const convertToFahrenheit = document.querySelector("#fahrenheit");
const display = document.querySelector("#display");

//creating the object literal
const temperatureConverter = {
    temperature : 0,

//Setting the temperature value
    setTemperature : function(value) {
        this.temperature = value;
    },

    //converts temperature to fahrenheit
    fahrenheitCalculator: function(){
        return (1.8 * this.temperature) + 32;
    },

    //converts temperature to celcius
    celciusCalculator: function() {
        return (5/9) * (this.temperature - 32);
    } 
}

//Assigning new temperature object
const newConverter = temperatureConverter;

//Event listener for celcius converter
convertToCelcius.addEventListener('click', function() {
    newConverter.setTemperature(inputValue.value);
    display.innerHTML = `${newConverter.temperature} degree fahrenheit is equal to <br> ${newConverter.celciusCalculator()} degree celcius`;
    console.log(
        (`${newConverter.temperature} degree fahrenheit converted to celcius is ${newConverter.celciusCalculator()}`)
    )
})

//Event listener for fahrenheit converter
convertToFahrenheit.addEventListener('click', function() {
    newConverter.setTemperature(inputValue.value);
    display.innerHTML = `${newConverter.temperature} degree celcius is equal to <br> ${newConverter.fahrenheitCalculator()} degree fahrenheit`;
    console.log(
        (`${newConverter.temperature} degree celcius converted to fahrenheit is ${newConverter.fahrenheitCalculator()}`)
    )
})

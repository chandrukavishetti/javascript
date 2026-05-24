const textBox = document.getElementById("textBox");
const toFahrenheitBtn = document.getElementById("toFahrenheit");
const toCelsiusBtn = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

function convert() {
    if (toFahrenheitBtn.checked) {
        temp = Number(textBox.value);
        temp = (temp * 9 / 5) + 32;
        result.textContent = temp.toFixed(1) + "°F";
    } else if (toCelsiusBtn.checked) {
        temp = Number(textBox.value);
        temp = (temp - 32) * 5 / 9;
        result.textContent = temp.toFixed(1) + "°C";
    } else {
        result.textContent = "you have not selected any conversion type";
    }
}
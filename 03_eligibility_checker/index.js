const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age = 0;

mySubmit.onclick = function () {
    age = myText.value;
    age = Number(age);

    if (age >= 100) {
        resultElement.textContent = "you are to old to enter the site";
    } else if (age == 0) {
        resultElement.textContent = "you cant enter the site";
    } else if (age >= 18) {
        resultElement.textContent = "you are eligible to enter the site";
    } else if (age < 0) {
        resultElement.textContent = "age cannot be negative";
    } else {
        resultElement.textContent = "you must 18+ to enter the site";
    }
}
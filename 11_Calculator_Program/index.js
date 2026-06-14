const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

document.querySelectorAll("#keys button").forEach(button => {
    const text = button.textContent;
    
    if (text === "C") {
        button.addEventListener("click", clearDisplay);
    } else if (text === "=") {
        button.addEventListener("click", calculate);
    } else {
        button.addEventListener("click", () => appendToDisplay(text));
    }
});
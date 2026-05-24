const minNum = 1;
const maxNum = 20;
let answer = Math.floor(Math.random() * (maxNum - minNum+1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while (running) {
    guess = window.prompt(`guess a number between ${minNum} and ${maxNum}`);
    guess = Number(guess);
    if (isNaN(guess)) {
        window.alert("please enter a valid number");
    } else if (guess < minNum || guess > maxNum) {
        window.alert(`please enter a number between ${minNum} and ${maxNum}`);
    } else {
        attempts++;
        if (guess < answer) {
            window.alert("too low! try again");
        } else if (guess > answer) {
            window.alert("too high! try again");
        } else {
            window.alert(`congratulations! you guessed the number ${answer} in ${attempts} attempts`);
            running = false;
        }
    }
}

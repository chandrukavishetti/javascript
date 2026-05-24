const decreaseBtn = document.getElementById("decrementButton");
const resetBtn = document.getElementById("resetButton");
const increaseBtn = document.getElementById("incrementButton");
const counteLabel = document.getElementById("countLabel");

let count = 0;

increaseBtn.onclick = function () {
    count++;
    counteLabel.innerText = count;
}

decreaseBtn.onclick = function () {
    count--;
    counteLabel.innerText = count;
}

resetBtn.onclick = function () {
    count = 0;
    counteLabel.innerText = count;
}
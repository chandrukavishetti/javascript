const myBox = document.getElementById("myBox");

myBox.addEventListener("click", event => {
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = " OHH 😮";
})

myBox.addEventListener("mouseover",event=>{
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = " Dont do it 😱";
});

myBox.addEventListener("mouseout",event=>{
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = " click me 😎";
});


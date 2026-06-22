// const myH1=document.getElementById("myH1");
// const myButton = document.getElementById("myButton");

// myH1.classList.add("enabled");

//1.
// myButton.classList.add("enabled");
// myButton.classList.remove("enabled")

//2.
// myButton.addEventListener("mouseover",event=>{
//     event.target.classList.add("hover");
// });

// myButton.addEventListener("mouseout",event=>{
//     event.target.classList.remove("hover");
// });

// //3.
// myButton.classList.add("enabled");

// myButton.addEventListener("click", event => {
//     if (event.target.classList.contains("disabled")) {
//         event.target.textContent += "😨";
//     } else {
//         event.target.classList.replace("enabled", "disabled");
//     }

// });


let buttons = document.querySelectorAll(".myButtons");

buttons.forEach(button => {
    button.classList.add("enabled");
});

// Hover effect - only works on enabled buttons
buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        if (event.target.classList.contains("enabled")) {
            event.target.classList.add("hover");
        }
    });
});

buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.classList.remove("hover");
    });
});

// Click to disable
buttons.forEach(button => {
    button.addEventListener("click", event => {
        let btn = event.target;
        btn.classList.remove("enabled", "hover");
        btn.classList.add("disabled");
        btn.disabled = true; // Actually disables the button
    });
});
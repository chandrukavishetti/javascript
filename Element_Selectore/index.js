//1.element or null
// const myHeading = document.getElementById("my-heading");
// myHeading.style.backgroundColor = "yellow";
// myHeading.style.textAlign = "center";

// console.log(myHeading);


//2.html collection
// const fruits = document.getElementsByClassName("fruits");
// fruits[0].style.backgroundColor = "yellow";

// Array.from(fruits).forEach(fruit => {
//     fruit.style.backgroundColor = "yellow";
// })


//3.html collection
// const h4Elements=document.getElementsByTagName("h4");
// const liElements=document.getElementsByTagName("li");
// console.log(h4Elements);

// h4Elements[1].style.backgroundColor="yellow";

// for(let h4Element of h4Elements){
//     h4Element.style.backgroundColor="yellow";
// }
// for(let liElement of liElements){
//     liElement.style.backgroundColor="lightgreen";
// }


// Array.from(h4Elements).forEach(h4Element=>{
//     h4Element.style.backgroundColor="yellow";
// });
// Array.from(liElements).forEach(liElement=>{
//     liElement.style.backgroundColor="lightgreen";
// });


//4.first element or null
// const element=document.querySelector(".fruits");
// element.style.backgroundColor="yellow";

//5.nodelist
const fruits=document.querySelectorAll(".fruits");
fruits[1].style.backgroundColor="yellow";
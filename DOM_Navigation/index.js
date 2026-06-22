//1.firstElementChildId

// const element=document.getElementById("fruits");
// const firstChild=element.firstElementChild;
// firstChild.style.backgroundColor="yellow";

//to select every element first child
// const ulElements=document.querySelectorAll("ul");
// ulElements.forEach(ulElement=>{
//     const firstChild=ulElement.firstElementChild;
//     firstChild.style.backgroundColor="yellow";
// })


//2.lastElementChild

// const element=document.getElementById("fruits");
// const lastChild=element.lastElementChild;
// lastChild.style.backgroundColor="yellow";


//to select the every last element 
// const ulElements=document.querySelectorAll("ul");
// ulElements.forEach(ulElement=>{
//     const lastChild=ulElement.lastElementChild;
//     lastChild.style.backgroundColor="yellow";
// })

//3.nextElementSibling
// const element=document.getElementById("carrots");
// const lastChild=element.nextElementSibling;
// lastChild.style.backgroundColor="yellow";


//4.previousElementSibling
// const element=document.getElementById("onions");
// const lastChild=element.previousElementSibling;
// lastChild.style.backgroundColor="yellow";


//5.parentElement
// const element=document.getElementById("carrots");
// const lastChild=element.parentElement;
// lastChild.style.backgroundColor="yellow";


//6.children
const element=document.getElementById("fruits");
const children=element.children;

Array.from(children).forEach(child=>{
    child.style.backgroundColor="yellow";
})

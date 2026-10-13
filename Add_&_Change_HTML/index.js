//1).
//1. create the element
const newH1=document.createElement("h1");

//2. add attributes/properties
newH1.textContent="Chandrashekhar";
newH1.id="myH1";
newH1.style.color="tomato";
newH1.style.textAlign="center";

//3.append element to dom
//document.getElementById("box1").append(newH1);
// document.getElementById("box2").append(newH1);

// const box2=document.getElementById("box2");
// document.body.insertBefore(newH1,box2);

// const boxes=document.querySelectorAll(".box");
// document.body.insertBefore(newH1,boxes[2]);

//remove html element
// document.getElementById("box1").removeChild(newH1);


//2).
const newListItem=document.createElement("li");

newListItem.textContent="coconut";
newListItem.id="coconut";
newListItem.style.fontWeight="bold";
newListItem.style.backgroundColor="lightgreen";

const banana=document.getElementById("banana");
document.getElementById("fruits").insertBefore(newListItem,banana);
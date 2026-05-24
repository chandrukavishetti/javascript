// console.log('hello');
// //window.alert("this is an alert");

// document.getElementById("myH1").textContent='hello';
// document.getElementById("myP").textContent='i like pizza';

//1. variables

// let age=25;
// let price=10.99;
// let gpa=2.1;
// let favorateFood="pizza";
// let email="chandrukavishetti26@gmail.com";

// console.log(typeof(gpa));
// console.log(age);
// console.log(`my favorate food is ${favorateFood}`);
// console.log(`my email is ${email}`);

// let online=true;
// let isStudent=false;

// console.log(`bro is online ${online}`);
// console.log(`bro is a student ${isStudent}`);

// let fullName="chandru kavishetti";
// let age=22;
// let isStudent=false;

// document.getElementById("p1").textContent=`my name is  : ${fullName}`;
// document.getElementById("p2").textContent=`my age is ${age}`;
// document.getElementById("p3").textContent=`i am a student ${isStudent}`;

//let students=30;

//students=students+1;
//students=students-1;
//students=students*2;
//students=students/2;
//students=students ** 2;
//students %= 7;
// students++;
//console.log(students);

//2. how to take input form userName=prompt("what is your name?");

// let username=prompt("what is your name?");
// console.log(`hello ${username}`);

// let username;

// document.getElementById("mySubmit").onclick = function () {
//     username = document.getElementById("myText").value;
//     document.getElementById("myH1").textContent=`hello ${username}`
//}


//3.type conversion
// let age=window.prompt("how old are you");
// age=Number(age);
// age+=1;
// console.log(age);

// let x="pizza";
// let y="pizza";
// let z="pizza";

// x=Number(x);
// y=String(y);
// z=Boolean(z);

// console.log(x,typeof x);
// console.log(y,typeof y);
// console.log(z,typeof z);

//4. const

// const PI=3.14159
// let radius;
// let circumference;

// //PI=4394; //here we cannot change the const value

//  document.getElementById("mySubmit").onclick=function(){
//     radius=document.getElementById("myText").value;
//     radius=Number(radius);
//     circumference=2*PI*radius;
//     document.getElementById("myH3").textContent=circumference +"cm";
//  }

//5.Math object

// let x = 3.99;
// let y = 2;
// let z;

// z = Math.ceil(x);
// z=Math.floor(x);
// z=Math.ceil(x);
// z=Math.trunc(x);
// z=Math.pow(x,y);
// z=Math.sqrt(x);
// z=Math.log(x);
// z=Math.sin(x);
// z=Math.cos(x);
// z=Math.tan(x);
// z=Math.abs(x);
// z=Math.sign(x);
// let max = Math.max(x, y, z);
// let min = Math.min(x, y, z);

// console.log(max);
// console.log(z);

//6. Random number generator

// const min=50;
// const max=100;

// // let randomNum=Math.floor(Math.random()*100)+1;
// // console.log(randomNum);

// //printing random number between some given ranges
// let randomNum=Math.floor(Math.random()*(max-min))+min;
// console.log(randomNum);

//7.if else statement
// let age=25;
// if(age>=18){
//     console.log("you are an adult");
// }
// else{
//     console.log("you are not an adult");
// }

//8. Turnery operator

// let age=25;
// let result=age>=18 ? "you are an adult" : "you are not an adult";
// console.log(result);

//9. switch statement
// let day=3;
// switch(day){
//     case 1:
//         console.log("monday");
//         break;
//     case 2:
//         console.log("tuesday");
//         break;
//     case 3:
//         console.log("wednesday");
//         break;
//     case 4:
//         console.log("thursday");
//         break;
//     case 5:
//         console.log("friday");
//         break;
//     case 6:
//         console.log("saturday");
//         break;
//     case 7:
//         console.log("sunday");
//         break;              
//     default:
//         console.log("invalid day");
// }

//10.string methods
// let str="hello world  ";
// console.log(str.charAt(0));
// console.log(str.indexOf("o"));
// console.log(str.lastIndexOf("o"));
// console.log(str.trim());
// console.log(str.startsWith("hello"));

// let phoneNumber="123-456-7890";
// let cleanedPhoneNumber=phoneNumber.replace(/-/g,"");
// console.log(cleanedPhoneNumber);

//11.string slicing
// let str="hello world";
// console.log(str.slice(0,5));
// console.log(str.slice(-5,-1));

//12.method chaining
//here no method chaining
// let username=window.prompt("what is your name?");
// username=username.trim();
// let letter=username.charAt(0);
// letter=letter.toUpperCase();
// let restOfName=username.slice(1);
// restOfName=restOfName.toLowerCase();
// let formattedName=letter+restOfName;
// console.log(formattedName);

//method chaining
// let username2=window.prompt("what is your name?");
// let formattedName2=username2.trim().charAt(0).toUpperCase() + username2.trim().slice(1).toLowerCase();
// console.log(formattedName2);

//13.logical operators
// const tempreature=200;
// if(tempreature>30 || tempreature<100){
//     console.log("the tempreature is just right");
// }else{
//     console.log("the tempreature is not just right");
// }

//14.strick equality operator
// const PI=3.14;
// if(PI==="3.14"){
//     console.log("the value of PI is correct");
// }else{
//     console.log("the value of PI is incorrect");
// }

//14.while loop
// let username="";
// while(username===""|| username===null){
//     username=window.prompt("what is your name?");
// } 
// console.log(`hello ${username}`);

//checking username and password
// let loggedIn = false;
// let username;
// let password;

// while (!loggedIn) {
//     username = window.prompt("enter your username");
//     password = window.prompt("enter your password"); 

//     if (username === "admin" && password === "admin123") {
//         loggedIn = true;
//         console.log("you are logged in");
//     } else {
//         console.log("invalid username or password");
//     }
// }

//15.for loop
// for(let i=1;i<=20;i++){
//     if(i==13){
//         continue;
//     }
//     console.log(i);
// }   

//16.fucntions
// function happyBirthday(name,age){
//     console.log(`happy birthday ${name}! you are ${age} years old!`);
// }
// happyBirthday("chandru",22);

// function add(x,y){
//     let result=x+y;
//     return result;
// }
// let answer=add(5,10);
// console.log(answer);

// function isEven(num){
//     if(num%2===0){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(isEven(5));

// function isValidEmail(email){
//     return email.includes("@")?true:false;
// }
// console.log(isValidEmail("chandrukavishetti@gmail.com"));

//17.variable scope
// let x=3;
// function1();
// function function1(){
//     let x=1;
//     console.log(x);
// }

//18.arrays
// let fruits=["apple","banana","orange"];
// fruits[1]="grapefruit";
// console.log(fruits[0]);
// console.log(fruits.length);
// fruits.push("grape");
// console.log(fruits);

// let fruits=["apple","banana","orange"];
// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i]);
// }

// for(let fruit of fruits){
//     console.log(fruit);
// }

//19.spread operator
// let numbers = [1, 2, 3];
// let maximum = Math.max(...numbers);
// let minimum = Math.min(...numbers);
// let username = "chandru";
// console.log(minimum);
// console.log(maximum);

// let username="bro code";
// let letters=[...username];
// console.log(letters);

// let fruits=["apple","banana","orange"];
// let vegitables=["carrot","broccoli","spinach"];
// let foods=[...fruits,...vegitables,"eggs","milk"];
// console.log(foods);

// function openFridge(...foods){
//     console.log(...foods);
// }
// function getFood(...foods){
//     return foods;
// }
// const food1="pizza";
// const food2="burger";
// const food3="sushi";
// openFridge(food1,food2,food3);
// const foods=getFood(food1,food2,food3);
// console.log(foods);

// function sum(...numbers){
//     let result=0;
//     for(let number of numbers){
//         result+=number;
//     }   
//     return result;
// }
// const total=sum(1,2,3,4,5);
// console.log(total);

// function getAverage(...numbers){
//     let result=0;
//     for(let number of numbers){
//         result+=number;
//     }   
//     return result/numbers.length;
// }
// const total=getAverage(1,2,3,4,5);
// console.log(total);

// function combineStrings(...strings){
//     return strings.join(" ");
// }   
// const combined=combineStrings("hello","world","this","is","bro","code");
// console.log(combined);
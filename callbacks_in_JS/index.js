//1)
// hello(wait);

// function hello(callback) {
//     console.log("Hello, World!");
//     callback();
// }

// function wait(){
//     console.log("Waiting for 2 seconds...");
// }

// function leave(){
//     console.log("Goodbye!");
// }

// function goodbye(){
//     console.log("Goodbye!");
// }

//2)
// sum(displayPage, 5, 10);

// function sum(callback,x,y){
//     let result = x+y;
//     callback(result);
// }
// function display(result){
//     console.log("The sum is: " + result);
// }

// function displayPage(result){
//     const h1 = document.getElementById("myH1");
//     h1.textContent = result;
// }


// //3) forEach example
// let numbers = [1, 2, 3, 4, 5];

// numbers.forEach(display);
// numbers.forEach(double);

// function double(element,index,array) {
//     array[index] = element * 2;
// }

// function display(number) {
//     console.log(number);
// }

// let fruits = ["Apple", "Banana", "Cherry"];
// fruits.forEach(upperCaseFruit);
// fruits.forEach(lowerCaseFruit);
// fruits.forEach(capitalize);
// fruits.forEach(display);

// function upperCaseFruit(element, index, array) {
//     array[index] = element.toUpperCase();
// }

// function lowerCaseFruit(element, index, array) {
//     array[index] = element.toLowerCase();
// }

// function capitalize(element, index, array) {
//     array[index] = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
// }

// function display(fruit) {
//     console.log(fruit);
// }

//4) .map()= accepts a callback function and creates a new array based on the return value of the callback function for each element in the original array. It does not modify the original array.

// const numbers = [1, 2, 3, 4, 5];
// const squares=numbers.map(square);
// const cubes=numbers.map(cube);

// function square(element){
//     return Math.pow(element,2);
// }

// function cube(element){
//     return Math.pow(element,3);
// }

// const students=["spongebob","patrick","sandy"];
// const studentsUpper=students.map(upperCase);
// const studentsLower=students.map(lowerCase);

// console.log(studentsUpper);
// console.log(studentsLower);

// function lowerCase(element){
//     return element.toLowerCase();
// }

// function upperCase(element){
//     return element.toUpperCase();
// }


// const dates=["2023-01-01","2023-02-14","2023-03-17"];
// const formattedDates=dates.map(formatDate);
// console.log(formattedDates);


// function formatDate(dateString){
//     const parts=dateString.split("-");
//     return `${parts[2]}/${parts[1]}/${parts[0]}`;
// }

//5) .filter()= creates a new array with all elements that pass the test implemented by the provided function. It does not modify the original array.
// let numbers = [1, 2, 3, 4, 5,6,7];
// let evenNumbers = numbers.filter(isEven);
// let oddNumbers = numbers.filter(isOdd);

// function isOdd(element) {
//     return element % 2 !== 0;
// }

// console.log(oddNumbers);

// function isEven(element) {
//     return element % 2 === 0;
// }
// console.log(evenNumbers);


// const ages= [12, 17, 20, 25, 30, 15];
// const adults=ages.filter(isAdult);

// console.log(adults); 

// function isAdult(age){
//     return age >= 18;
// }

// const words = ["hello", "world", "javascript", "programming"];

// const shortWords = words.filter(getShortWords);
// console.log(shortWords);

// const longWords = words.filter(getLongWords);
// console.log(longWords);

// function getShortWords(element){
//     return element.length < 6;
// }

// function getLongWords(element){
//     return element.length >= 6;
// }

//6) .reduce()= executes a reducer function on each element of the array, resulting in a single output value. It does not modify the original array.
// const prices = [10, 20, 30, 40, 50];
// const total=prices.reduce(sum);
// console.log(`$${total.toFixed(2)}`);

// function sum(accumulator, currentValue) {
//     return accumulator + currentValue;
// }

// const grades = [85, 90, 78, 92, 88];
// const maximaum=grades.reduce(findMaximum);
// const minimum=grades.reduce(findMinimum);

// console.log(`Maximum grade: ${maximaum}`);
// console.log(`Minimum grade: ${minimum}`);

// function findMaximum(max, current) {
//     return Math.max(max, current);
// }   

// function findMinimum(min, current) {
//     return Math.min(min, current);
// }

//7)function expression
// const hello=function(){
//     console.log("Hello, World!");   
// }
// hello();

// setTimeout(function() {
//     console.log("Hello, World!");
// }  , 2000);

// const numbers = [1, 2, 3, 4, 5,6];
// const squares=numbers.map(function(element){
//     return Math.pow(element,2);
// });

// const cubes=numbers.map(function(element){
//     return Math.pow(element,3);
// });
// const evenNumbers = numbers.filter(function(element){
//     return element % 2 === 0;
// });

// const oddNumbers = numbers.filter(function(element){
//     return element % 2 !== 0;
// }); 

// function square(element){
//     return Math.pow(element,2);
// }

// console.log("Squares:", squares);
// console.log("Cubes:", cubes);
// console.log("Even Numbers:", evenNumbers);
// console.log("Odd Numbers:", oddNumbers);

//8) Arrow function
// function hello(){
//     console.log("Hello, World!");   
// }
// hello();

// const hello=function(){
//     console.log("Hello, World!");   
// }
// hello();

// const hello = (name,age) => { console.log(`Hello, ${name}! You are ${age} years old.`); };
// hello("Alice",22);

// setTimeout(() => { console.log("Hello, World!"); }, 3000)

const numbers = [1, 2, 3, 4, 5,6];
const squares=numbers.map(element => Math.pow(element,2));
const evenNumbers = numbers.filter(element => element % 2 === 0);
const oddNumbers = numbers.filter(element => element % 2 !== 0);

console.log("Squares:", squares);
console.log("Even Numbers:", evenNumbers);
console.log("Odd Numbers:", oddNumbers);










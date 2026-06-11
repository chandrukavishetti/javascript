//1)Object in js
// const person={
//     firstName:"John",
//     lastName:"Doe",
//     age:30,
//     isEmployed:true,
//     sayHello:function(){
//         console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
//     }
// }
// const person2={
//     firstName:"Jane",
//     lastName:"Smith",
//     age:25,
//     isEmployed:false,
//     sayHello:()=>console.log(`Hello, my name is ${person2.firstName} ${person2.lastName}.`)
// }

// person.sayHello(); // Output: Hello, my name is John Doe.
// person2.sayHello(); // Output: Hello, my name is Jane Smith.

// console.log(person.firstName); // Accessing property using dot notation
// console.log(person["lastName"]); // Accessing property using bracket notation   
// console.log(person.age); // Accessing property using dot notation
// console.log(person["isEmployed"]); // Accessing property using bracket notation 

// console.log(person2.firstName); // Accessing property using dot notation
// console.log(person2["lastName"]); // Accessing property using bracket notation
// console.log(person2.age);
// console.log(person2["isEmployed"]);


// //2) Consrutor in js
// function Car(make,model,year,color){
//     this.make=make;
//     this.model=model;
//     this.year=year;
//     this.color=color;
//     this.drive=function(){
//         console.log(`The ${this.make} ${this.model} is driving.`);
//     }
// }
// const car1=new Car("Toyota","Camry",2020,"Red");
// const car2=new Car("Honda","Civic",2019,"Blue");
// console.log(car1);
// console.log(car2);
// car1.drive();
// car2.drive();


// //3)Class
// class Product{
//     constructor(name,price){
//         this.name=name;
//         this.price=price;
//     }
//     displyProduct(){
//         console.log(`Product: ${this.name}, Price: $${this.price}`);
//     }
//     calculateTotal(salesTax){
//         return this.price + (this.price * salesTax);
//     }
// }
// const salesTax=0.1;
// const product1=new Product("Laptop",999.99);
// const product2=new Product("Smartphone",599.99);
// console.log(product1);
// console.log(product2);
// product1.displyProduct();
// product2.displyProduct();
// console.log(`Total for ${product1.name}: $${product1.calculateTotal(salesTax)}`);
// console.log(`Total for ${product2.name}: $${product2.calculateTotal(salesTax)}`);


// //4)Static method
// class MathUtils{
//     static PI=3.14159;

//     static getDiametr(radius){
//         return 2 * this.PI * radius;
//     }

//     static getCircumference(radius){
//         return 2 * this.PI * radius;
//     }
//     static getArea(radius){
//         return this.PI * Math.pow(radius,2);
//     }
// }
// console.log(`PI: ${MathUtils.PI}`);
// console.log(`Diameter of circle with radius 5: ${MathUtils.getDiametr(5)}`);
// console.log(`Circumference of circle with radius 5: ${MathUtils.getCircumference(5)}`);
// console.log(`Area of circle with radius 5: ${MathUtils.getArea(5)}`);

// class User{
//     static userCount=0;
//     constructor(username){
//         this.username=username;
//         User.userCount++;
//     }   
//     static getUserCount(){
//         return User.userCount;
//     }
//     sayHello(){
//         console.log(`Hello, ${this.username}!`);
//     }   
// }
// const user1=new User("Alice");
// const user2=new User("Bob");
// const user3=new User("Charlie");
// console.log(`User: ${user1.username}, Total Users: ${User.userCount}`);
// console.log(`User: ${user2.username}, Total Users: ${User.userCount}`);
// console.log(`User: ${user3.username}, Total Users: ${User.userCount}`);

// user1.sayHello();
// user2.sayHello();
// user3.sayHello();
// User.getUserCount();
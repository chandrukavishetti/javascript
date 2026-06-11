//1)inheritance
//
// class Animal {
//     alive=true;
//     eat(){
//         console.log(`this ${this.constructor.name} is eating.`);
//     }
//     sleep(){
//         console.log(`this ${this.constructor.name} is sleeping.`);
//     }
// }
// class Rabbit extends Animal{
//     name="rabbit";
// }
// class Fish extends Animal{
//     name="fish";
// }   
// class Hawk extends Animal{
//     name="hawk";
// }
// const rabbit=new Rabbit();
// const fish=new Fish();
// const hawk=new Hawk();
// console.log(rabbit.alive);
// console.log(fish.alive);
// console.log(hawk.alive);
// rabbit.eat();
// fish.sleep();
// hawk.eat();


// //2)super keyword in js
// class Animal {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     move(speed) {
//         console.log(`this ${this.constructor.name} is moves at a speed of ${speed} km/h.`);
//     }
// }
// class Rabbit extends Animal {
//     constructor(name, age, runSpeed) {
//         super(name, age);
//         this.runSpeed = runSpeed;
//     }
//     run() {
//         console.log(`this ${this.constructor.name} is running at a speed of ${this.runSpeed} km/h.`);
//         super.move(this.runSpeed);
//     }
// }
// class Fish extends Animal {
//     constructor(name, age, swimSpeed) {
//         super(name, age);
//         this.swimSpeed = swimSpeed;
//     }
//     swim() {
//         console.log(`this ${this.constructor.name} is swimming at a speed of ${this.swimSpeed} km/h.`);
//         super.move(this.swimSpeed);
//     }
// }
// class Hawk extends Animal {
//     constructor(name, age, flySpeed) {
//         super(name, age);
//         this.flySpeed = flySpeed;
//     }
//     fly() {
//         console.log(`this ${this.constructor.name} is flying at a speed of ${this.flySpeed} km/h.`);
//         super.move(this.flySpeed);
//     }
// }
// const rabbit = new Rabbit("Bunny", 2, 10);
// const fish = new Fish("Nemo", 1, 5);
// const hawk = new Hawk("Eagle", 3, 20);

// console.log(rabbit.name, rabbit.age, rabbit.runSpeed);
// console.log(fish.name, fish.age, fish.swimSpeed);
// console.log(hawk.name, hawk.age, hawk.flySpeed);

// hawk.move(15);
// rabbit.run();
// fish.swim();



//3)getters and setters in js
// class Rectangle{
//     constructor(width,height){
//         this.width=width;
//         this.height=height;
//     }
//     set width(newWidth){
//         if(newWidth > 0){
//             this._width = newWidth;
//         }else{
//             console.log("Width must be a positive number.");
//         }
//     }

//     set height(newHeight){
//         if(newHeight > 0){
//             this._height = newHeight;
//         }else{
//             console.log("Height must be a positive number.");
//         }
//     }
//     get width(){
//         return this._width;
//     }
//     get height(){
//         return this._height;
//     }
//     get area(){
//         return this._width * this._height;
//     }
// }
// const rectangle=new Rectangle(5,10);
// rectangle.width=15;
// rectangle.height=5; 
// console.log(rectangle.width);
// console.log(rectangle.height);
// console.log(rectangle.area);


class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    set firstName(newFirstName) {
        if (typeof newFirstName === "string" && newFirstName.length > 0) {
            this._firstName = newFirstName;
        } else {
            console.error("first name must be a non-empty string");
        }
    }
    set lastNameName(newLastName) {
        if (typeof newLastName === "string" && newLastName.length > 0) {
            this._lastName = newLastName;
        } else {
            console.error("last name must be a non-empty string");
        }
    }
    set age(newAge) {
        if (typeof newAge === "number" && newAge >= 0) {
            this._age = newAge;
        } else {
            console.error("age must be positive and positive number");
        }
    }
    get firstName(){
        return this._firstName;
    }
        get lastName(){
        return this._lastName;
    }
        get age(){
        return this._age;
    }
    get fullName(){
        return this._firstName+" "+this._lastName;
    }
}
const person = new Person("sagar", 87, 78);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.fullName);
// const person={
//     fullName:"John Doe",
//     age:30,
//     isStudent:true,
//     hobbies:{
//         street:"123 conch st",
//         city:"Bikini Bottom",
//         country:"Ocean" 
//     }
// }
// console.log(person.fullName);
// console.log(person.hobbies.city);
// console.log(person.hobbies.country);

// for(const property in person.address){
//     console.log(person.address[property]);
// }


class Person{
    constructor(name,age,...address){
        this.name=name;
        this.age=age;
        this.address=new Address(...address);
    }
}
class Address{

    constructor(street,city,country){
        this.street=street;
        this.city=city;
        this.country=country;
    }
}

const person1=new Person("spongebob",30,"123 conch st.","bootam","Int.waters");
const person2=new Person("patric",32,"12 st.","bootam","Int.waters");
const person3=new Person("casemero",28,"church street.","bootam","Int.waters");

console.log(person1.address.street);
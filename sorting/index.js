//sort()
let fruits=["apple","orange","banana","coconut","pineapple"]
fruits.sort();
console.log(fruits);


let numbers=[1,10,2,9,3,8,4,5,7];
numbers.sort((a,b)=>a-b);
console.log(numbers);


const people=[{name:"spongebob",age:70,gpa:3.0},
{name:"vinicios",age:25,gpa:9.0},
{name:"mbappe",age:20,gpa:9.0}
]
people.sort((a,b)=>b.age-a.age);
console.log(people)

people.sort((a,b)=>a.name.localeCompare(b.name));
console.log(people);
const fruits = [{ name: "apple", color: "red", calories: 95 },
{ name: "orange", color: "orange", calories: 105 }];

console.log(fruits[0].name);
console.log(fruits[1].calories);

fruits.push({name:"grapes",color:"purple",calories:62});
console.log(fruits);
fruits.pop();
console.log(fruits);
// const names = ["samarth", "pawan", "sagar", "rohit"];
// const person = {
//     "name": "samarth",
//     "age": 20,
//     "isEmployee": true,
//     "hobbies": ["jallyfishing", "karate"]
// }
// const jsonPeople = [{
//     "name": "samarth",
//     "age": 25,
//     "isEmployee": true
// },
// {
//     "name": "pawan",
//     "age": 26,
//     "isEmployee": false
// },
// {
//     "name": "rohit",
//     "age": 35,
//     "isEmployee": true
// },
// {
//     "name": "sagar",
//     "age": 25,
//     "isEmployee": false
// }]

// const jsonString = JSON.stringify(names);
// console.log(jsonString);

// const jsonString1 = JSON.stringify(person);
// console.log(jsonString1);

// const jsonString2 = JSON.stringify(person);
// console.log(jsonString2);

fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value.isEmployed)))
    .catch(error => console.error(error));

//closure := 
// 
//A function degined inside of another function,
// the inner functionhas acces to the variables
// and scope of the outer function.
// allow for private variables and state maintenance
// used frequently in js frameworks : React,vue,angular


// function outer() {
//     let message = "helloo";
//     function inner() {
//         console.log(message);
//     }
//     inner();
// }
// outer();


// function createCounter() {

//     let count = 0;

//     function increment() {
//         count++;
//         console.log(`count increased to ${count}`);
//     }
//     function getCount(){
//         return count;
//     }
//     return { increment,getCount };
// }
// const counter = createCounter();
// counter.increment();
// counter.increment();
// counter.increment();



function createGame() {
    let score = 0;
    function increaseScore(points) {
        score += points;
        console.log(`+$(points)pts`);
    }
    function decreaseScore(points) {
        score -= points;
        console.log(`+$(points)pts`);
    }

    function getScore() {
        return score;
    }
    return {increaseScore,decreaseScore,getScore};
}

const game=createGame();
game.increaseScore(5);
game.increaseScore(6);
game.increaseScore(3);
console.log(`The final score is ${getScore} pts`)














increment();
increment();
increment();
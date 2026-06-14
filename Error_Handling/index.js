// try{
// console.log(x);
// }catch(erro){
//     console.log(error);
// }finally{
//     console.log("this always executes");
// }


try { 
    const dividend = Number(window.prompt("enter a dividend : ")); 
    const divisor = Number(window.prompt("enter a divisor : ")); 

    if (isNaN(dividend) || isNaN(divisor)) { 
        throw new Error("values must be a number"); 
    } 
    if (divisor == 0) { 
        throw new Error("you can't divide by zero"); 
    } 

    const result = dividend / divisor; 
    console.log(result); 
} catch (error) { 
    // Log the actual error message instead of the undefined result variable
    console.error(error.message); 
} 

console.log("you have reached the end");

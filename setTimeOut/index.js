// function sayHello(){
// window.alert("hello");
// }
// setTimeout(sayHello,3000);


// setTimeout(function(){window.alert("hello")},3000);

// const timeoutId=setTimeout(()=>window.alert("hello"),3000);
// clearTimeout(timeoutId);


let timeoutId;
function startTimer(){
    setTimeout(()=>window.alert("hello"),3000);
    console.log("starter");
}

function clearTimer(){
    clearTimeout(timeoutId);
    console.log("Cleared");
}
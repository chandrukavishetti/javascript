const myCheckBox=document.getElementById("myCheckBox");
const visaBtn=document.getElementById("visaBtn");
const masterCardBtn=document.getElementById("masterCardBtn");
const paypalBtn=document.getElementById("paypalBtn");
const mySubmit=document.getElementById("mySubmit");
const subResult=document.getElementById("subResult");
const paymentResult=document.getElementById("paymentResult");

mySubmit.onclick=function(){
    if(myCheckBox.checked){
        subResult.textContent="you are subscribed";
    }else{
        subResult.textContent="you are not subscribed";
    }
    if(visaBtn.checked){
        paymentResult.textContent="you are paying with visa card";
    }else if(masterCardBtn.checked){
        paymentResult.textContent="you are paying with mastercard";
    }else if(paypalBtn.checked){
        paymentResult.textContent="you are paying with paypal";
    }else{
        paymentResult.textContent="you have not selected any payment method";
    }
}
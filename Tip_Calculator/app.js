"use strict"

const bill = document.getElementById('bill');
const tip = document.getElementById('tip');
const btn = document.getElementById('btn');
const total =document.getElementById('total');


function calculate(){
    const billAmount =bill.value;
    const tipPercentage=tip.value;
    const totalTip =  (billAmount*(tipPercentage/100));
    total.innerHTML=`$${totalTip}`;
    console.log(totalTip);
    
console.log('click');

}
btn.addEventListener('click', calculate);
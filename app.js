function calculate(){
let amount = parseInt(document.querySelector('#input1').value);
let period = parseInt(document.querySelector('#input2').value);
let monthlyInstallment = Math.round(amount / period);
document.querySelector('span').innerHTML= "Rs. " +monthlyInstallment;
}
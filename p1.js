const prompt = require("prompt-sync")();
let num = Number(prompt("enter a number:"));
if(num%5==0)
{
    console.log(num + " is divisible by 5");            

}
else{
    console.log(num + " is not divisible by 5");
}
/*const prompt = require("prompt-sync")();

let input = prompt("Enter something: ");
console.log("You entered:", input);*/

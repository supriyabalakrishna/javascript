let num = 25;
const prompt = require("prompt-sync")();
let n = Number(prompt("enter a number"));
console.log(n);
if(n == num)
{
    console.log("you have guessed it correctly");
}
else
{
    console.log("you have guessed it wrong ");
}
const prompt = require("prompt-sync")();
let n = Number(prompt("enter a number"));
let sum = 0;
for(let i = 0 ; i <= n ; i++)
{
     sum = sum + i;
    
}
console.log(sum);
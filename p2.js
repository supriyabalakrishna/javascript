const prompt = require("prompt-sync")();
let num = Number(prompt("enter a number:"));
if(num > 90 && num  <= 100)
{
    console.log("A");
}
else if(num > 70 && num <= 89 )
{
    console.log("B");
}
else if(num >= 50 && num <= 69)
{
    console.log("C");
}
else if(num > 30 && num <= 49)
{
    console.log("F");
}
let num = [10, 20, 30, 40, 50];
console.log(num);
let name = ["Alice", "Bob", "Charlie"];
console.log(name);
console.log(num.length);
console.log(num[0]);
for( let i = 0 ; i <num.length ; i++)
    {
        console.log(num[i]);
    }
    for(let i = 0 ; i<name.length ; i++)
    {
        console.log(name[i]);
    }

    for(let i of name)
    {
        console.log(i);
    }
    for(i of num)
    {
        console.log(i);
    }
let num = [85,97,44,37,76,60];
    let sum = 0;
    for(let i = 0 ; i < num.length ; i++)
    {
        console.log(num[i]);
        
    }
    for(let i of num)
    {
        sum = sum + i;
    }
    console.log(sum);
    let avg = sum/num.length;
    console.log("Average is :"+avg);
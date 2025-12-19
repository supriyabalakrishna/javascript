const arrow = (str) =>
{
    let c = 0;
    for(const char of str)
    {
        if(char ==="a"|| char ==="e"|| char === "i"|| char === "o"|| char === "u")
        {
            c++;
        }
    }
    console.log(c);
}
arrow("abc");
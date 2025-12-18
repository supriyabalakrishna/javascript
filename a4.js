c = ["bloomberg","microsoft", "uber","google","IBM","netflix"]
console.log(c.shift());
console.log(c);
console.log(c.splice(c.indexOf("uber"), 1, "ola"));
console.log(c);
c.push("amazon");
console.log(c);
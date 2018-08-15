let setOfNumbers = [32,10,32,43,6,74,33,45];
let evensOnly = [];

for(i = 0; i <setOfNumbers.length; i++) {
    if(setOfNumbers[i] % 2 === 0) { 
       evensOnly.push(setOfNumbers[i]);
    }
    console.log(evensOnly);
}
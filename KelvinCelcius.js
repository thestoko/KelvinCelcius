//a varialbe named Kelvin = 293
let kelvin = 293; 
// a variable named celcius with a value Kelvin - 273
const celsius = kelvin - 273;
// a variable named Fahrenheit 
let fahrenheit = celsius * (9 / 5) + 32;
// ok 
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
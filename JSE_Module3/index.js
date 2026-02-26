// 3.0.10 SECTION PRACTICE

// Part 1
console.log(`{Result: ${2 * 3 + 1}`);      // expected 7  
console.log(`Result: ${2 ** 4}`);          // expected 16  
console.log(`Result: ${5 / 1}`);          // expected 5  
console.log(`Result: ${8 ** 2 - 5 ** 2}`);   // expected 39

// part 2
console.log(`Result: ${4 * 5 === 20}`);
console.log(`Result: ${6 * 5 !== "30"}`);
console.log(`Result: ${-17 < 0}`);  
console.log(`Result: ${25 > 1}`);  
console.log(`Result: ${2 + 2 * 2 > 4}`);

// Part 3
console.log(`Result of expression: ${true || false}`);  
console.log(`Result of expression: ${false || ! false}`);  
console.log(`Result of expression: ${false || false || true}`);  
console.log(`Result of expression: ${true || false || false || true}`);

//---------------


// 3.2.4 SECTION PRACTICE

// 
let width = prompt("Volume of the box, enter width", 0);
let height = prompt("Volume of the box, enter height", 0);
let length = prompt("Volume of the box, enter length", 0);
let volume = width * height * length;
alert(`Calculated box volume is ${volume}`);

//--------------------
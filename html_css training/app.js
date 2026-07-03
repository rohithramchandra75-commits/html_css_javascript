// 1. Hello World
console.log("Hello, World!");

// 2. Variables
let a = 10;
let b = 5;

// 3. Addition
let sum = a + b;
console.log("Sum:", sum);

// 4. Even or Odd
if (a % 2 === 0) {
    console.log(a + " is Even");
} else {
    console.log(a + " is Odd");
}

// 5. Largest Number
if (a > b) {
    console.log(a + " is greater than " + b);
} else {
    console.log(b + " is greater than " + a);
}

// 6. Loop (Print 1 to 5)
console.log("Numbers from 1 to 5:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// 7. Function
function greet(name) {
    return "Hello " + name;
}
console.log(greet("Rohith"));

// 8. Array
let numbers = [1, 2, 3, 4, 5];
console.log("Array:", numbers);

// 9. Loop through array
numbers.forEach(function(num) {
    console.log("Number:", num);
});
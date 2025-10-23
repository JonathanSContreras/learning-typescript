import promptSync from 'prompt-sync';

const prompt = promptSync();

/**
 * TypeScript Basics - Variables and Type Annotations
 *
 * Learn about:
 * - Variable declarations (let, const)
 * - Type annotations
 * - Type inference
 * - Basic types (string, number, boolean)
 */

// ============================================
// 1. TYPE ANNOTATIONS
// ============================================

// Explicit type annotation
let username: string = 'Jonathan';
let age: number = 21;
let isActive: boolean = true;

// Type inference (TypeScript infers the type)
let city = 'Houston'; // TypeScript knows this is a string
let count = 42; // TypeScript knows this is a number

console.log(`${username} is ${age} years old and lives in ${city}`);

// ============================================
// 2. CONST vs LET
// ============================================

const PI = 3.14159; // Cannot be reassigned
let temperature = 72; // Can be reassigned

// PI = 3.14; // Error: Cannot assign to 'PI' because it is a constant
temperature = 75; // OK

// ============================================
// 3. BASIC TYPES
// ============================================

// String
let message: string = 'Hello, TypeScript!';
let template: string = `The answer is ${42}`;

// Number (includes integers, floats, hex, binary, etc.)
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// Boolean
let isDone: boolean = false;
let hasError: boolean = true;

// ============================================
// 4. ANY TYPE (use sparingly! kinda defeats the purpose of TS)
// ============================================

let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false; // okay, definitely a boolean

// 'any' opts out of type checking - avoid when possible!

// ============================================
// 5. UNDEFINED AND NULL
// ============================================

let u: undefined = undefined;
let n: null = null;

// By default null and undefined are subtypes of all other types
// With strictNullChecks, they're only assignable to unknown, any, and their respective types

// ============================================
// PRACTICE EXERCISES
// ============================================

// TODO: Declare a variable for a person's name (string)
// Your code here:
const my_name: string = "Jonathan";
const my_password: string = "securePassword123";


// TODO: Declare a variable for a product price (number)
// Your code here:
const product_price: number = 29.99;

// TODO: Declare a variable to track if a user is logged in (boolean)
// Your code here:
let is_logged_in: boolean = true;


// TODO: Create a template string that uses the variables above
const userNameInput = prompt("Enter your name: ");
const passwordInput = prompt("Enter your password: ");

if (userNameInput === my_name && passwordInput === my_password){
    is_logged_in = true;
} else{
    is_logged_in = false;
}

// Your code here:
if (is_logged_in){
    console.log(`Welcome back, ${my_name}! The price of your selected product is $${product_price}.`);
} else{
    console.log(`Hello, guest! The price of our featured product is $${product_price}.`);
}


console.log("");
console.log("");
console.log("");

// ============================================
// NOTES
// ============================================

/*
Key Takeaways:
1. Always prefer const over let when the value won't change
2. TypeScript can infer types - you don't always need explicit annotations
3. Avoid 'any' type when possible - it defeats the purpose of TypeScript
4. Use type annotations to make your code more explicit and self-documenting
*/

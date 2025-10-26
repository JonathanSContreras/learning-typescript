/**
 * TypeScript - Arrays and Tuples
 *
 * Learn about:
 * - Array type annotations
 * - Array methods with types
 * - Tuples (fixed-length arrays with specific types)
 * - Readonly arrays
 */

// ============================================
// 1. ARRAYS - Two Syntaxes
// ============================================

// Syntax 1: Type[]
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ['Alice', 'Bob', 'Charlie'];
let flags: boolean[] = [true, false, true];

// Syntax 2: Array<Type>
let scores: Array<number> = [100, 95, 87, 92];
let fruits: Array<string> = ['apple', 'banana', 'orange'];

// Mixed array (not recommended, but possible with union types)
let mixed: (string | number)[] = ['text', 42, 'more text', 100];

console.log(numbers[0]); // 1
console.log(names.length); // 3

for (let i = 0; i< names.length; i++) {
  console.log(`Name at index ${i}: ${names[i]}`);
}

for (const flag of flags) {
  console.log(`Flag value: ${flag}`);
}
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

// ============================================
// 2. ARRAY METHODS WITH TYPES
// ============================================

// TypeScript knows the types through the operations
const doubled = numbers.map((n) => n * 2); // number[]
const evens = numbers.filter((n) => n % 2 === 0); // number[]
const sum = numbers.reduce((acc, n) => acc + n, 0); // number

// String array methods
const uppercase = names.map((name) => name.toUpperCase()); // string[]
const longNames = names.filter((name) => name.length > 4); // string[]

console.log('Doubled:', doubled);
console.log('Evens:', evens);
console.log('Sum:', sum);

// ============================================
// 3. TUPLES - Fixed Length, Specific Types
// ============================================

// Tuple: [string, number]
let person: [string, number] = ['Alice', 30];

// Accessing tuple elements
let personName: string = person[0]; // 'Alice'
let personAge: number = person[1]; // 30

// Tuples with multiple types
let response: [boolean, string, number] = [true, 'Success', 200];
let [success, message, statusCode] = response; // Destructuring

console.log(`Status: ${statusCode}, Message: ${message}`);

// ============================================
// 4. TUPLE WITH OPTIONAL ELEMENTS
// ============================================

type Point2D = [number, number];
type Point3D = [number, number, number?]; // 3rd element is optional

let point2D: Point2D = [10, 20];
let point3D: Point3D = [10, 20, 30];
let point3DNoZ: Point3D = [10, 20]; // OK, 3rd element is optional

// ============================================
// 5. READONLY ARRAYS
// ============================================

// ReadonlyArray prevents modification
let immutableNumbers: ReadonlyArray<number> = [1, 2, 3, 4, 5];
// immutableNumbers.push(6); // Error: Property 'push' does not exist

// Readonly tuple
let immutablePerson: readonly [string, number] = ['Bob', 25];
// immutablePerson[0] = 'Alice'; // Error: Cannot assign to '0' because it is a read-only property

// ============================================
// 6. MULTIDIMENSIONAL ARRAYS
// ============================================

// 2D array (matrix)
let matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix[1][1]); // 5 (middle element)

// Array of tuples
let coordinates: [number, number][] = [
  [0, 0],
  [10, 20],
  [30, 40],
];

// ============================================
// PRACTICE EXERCISES
// ============================================

console.log("PRACTICE EXERCISES\n===================================\n");

// TODO: Create an array of your top 5 favorite movies (strings)
const favoriteMovies: string[] = ["Bee Movie", "Whiplash", "Interstellar", "The Dark Knight", "Little Rascals"];
console.log("Favorite Movies:", favoriteMovies);

// TODO: Create an array of ratings (numbers 1-10) for those movies
const movieRatings: number[] = [7, 9, 10, 10, 6]
console.log("Movie Ratings:", movieRatings);

// TODO: Use map() to create a new array with all ratings doubled
const doubleRatings = movieRatings.map(rating => rating * 2);
console.log("Doubled Ratings:", doubleRatings);

// TODO: Create a tuple representing a book: [title, author, year, pages]
const book: [string, string, number, number] = ["Diary of a Wimpy Kid", "Jeff Kinney", 2007, 217];
console.log("Book Tuple:", book);

// TODO: Create an array of coordinates (tuples of [x, y])
const coordinatesArray: [number, number][] = [
  [0, 0],
  [10, 20],
  [20, 30]
];
console.log("Coordinate Array:", coordinatesArray);

// TODO: Create a function that takes an array of numbers and returns the average
function getAverage(nums: number[]): number {
  let total = nums.reduce((acc, n) => acc + n, 0);
  return total / nums.length;
}
console.log("Ratings Average:", getAverage(movieRatings));

// ============================================
// NOTES
// ============================================

/*
Key Takeaways:
1. Use Type[] or Array<Type> for arrays - both are equivalent
2. Tuples are great for fixed-length data with specific types at each position
3. Use readonly when you want to prevent array mutations
4. Array methods (map, filter, reduce) maintain type safety
5. Consider using tuples instead of objects for simple, ordered data

When to use what:
- Array: Variable-length collection of same type
- Tuple: Fixed-length collection with specific types at each position
- Object: Named properties with different types
*/

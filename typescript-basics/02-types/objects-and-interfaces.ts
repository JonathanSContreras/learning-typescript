/**
 * TypeScript - Objects and Interfaces
 *
 * Learn about:
 * - Object type annotations
 * - Interfaces
 * - Optional properties
 * - Readonly properties
 * - Index signatures
 */

// ============================================
// 1. OBJECT TYPE ANNOTATIONS
// ============================================

// Inline type annotation
let user: { name: string; age: number; email: string } = {
  name: 'Jonathan',
  age: 21,
  email: 'jonathansaulcontreras@gmail.com',
};

// Accessing properties
console.log(user.name); // 'Jonathan'
console.log(user.age); // 21
user.name = 'John'; // changing property value
console.log(user.name); // 'John'

// ============================================
// 2. INTERFACES - Define Object Shapes
// ============================================

interface User {
  name: string;
  age: number;
  email: string;
}

let user1: User = {
  name: 'Bob',
  age: 25,
  email: 'bob@example.com',
};

let user2: User = {
  name: 'Charlie',
  age: 35,
  email: 'charlie@example.com',
};


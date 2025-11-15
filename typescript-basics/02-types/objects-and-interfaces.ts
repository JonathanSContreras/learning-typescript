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

// ============================================
// 3. OPTIONAL PROPERTIES
// ============================================

// Optional properties use the ? symbol
interface Product {
  id: number;
  name: string;
  price: number;
  description?: string; // Optional
  category?: string; // Optional
}

let laptop: Product = {
  id: 1,
  name: 'MacBook Pro',
  price: 1999,
  description: 'Powerful laptop for developers',
  // category is optional, so we can omit it
};

let mouse: Product = {
  id: 2,
  name: 'Wireless Mouse',
  price: 29,
  // Both description and category are omitted
};

// Accessing optional properties
console.log(laptop.description); // 'Powerful laptop for developers'
console.log(mouse.description); // undefined

// ============================================
// 4. READONLY PROPERTIES
// ============================================

// Readonly properties cannot be changed after initialization
interface Config {
  readonly apiKey: string;
  readonly baseUrl: string;
  timeout: number; // Not readonly, can be changed
}

let appConfig: Config = {
  apiKey: 'abc123xyz',
  baseUrl: 'https://api.example.com',
  timeout: 5000,
};

// appConfig.apiKey = 'newkey'; // Error: Cannot assign to 'apiKey' because it is a read-only property
appConfig.timeout = 10000; // OK, timeout is not readonly

console.log(appConfig.baseUrl); // 'https://api.example.com'
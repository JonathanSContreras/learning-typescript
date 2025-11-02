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


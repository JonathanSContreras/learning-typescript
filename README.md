# My TypeScript & DSA Learning Journey

Hey there! 👋 Welcome to my learning repository where I'm documenting my journey to master TypeScript while implementing data structures and algorithms from scratch. As a web/full-stack developer, I wanted a structured way to level up my TypeScript skills and really understand DSA concepts.

Feel free to follow along, fork this repo, or use it as inspiration for your own learning journey!

> **Note:** I had Claude help me set up this repository and create this README. Some of what you'll see here represents planned work and structure rather than things I've already completed - it's my roadmap to keep me organized and accountable as I learn. I'll be updating this as I progress!

## What I'm Building Here

I created this environment to help me:
- **Master TypeScript** from basics to advanced features
- **Implement data structures** from scratch (no frameworks!)
- **Practice algorithmic problem-solving** with real coding challenges
- **Build testing skills** with comprehensive test suites
- **Write clean, type-safe code** that I can be proud of

This is my personal playground for learning, experimenting, and growing as a developer.

## What's Inside

I've set up a complete TypeScript environment with everything I need:

- **TypeScript Environment**: ES2020, strict mode, and proper module support
- **Testing Framework**: Vitest with 35 passing tests to start (growing as I learn!)
- **Linting & Formatting**: ESLint and Prettier to keep my code clean
- **Benchmarking Tools**: Custom performance testing harness I built
- **Template System**: Ready-to-use templates so I can start coding quickly
- **Type Safety**: Full generic support and strict typing throughout

## Project Structure

Here's how I plan to organize everything:

```
learning-typescript/
├── src/
│   ├── problems/           # My solutions to coding problems
│   │   └── _template.ts    # Template I use for new problems
│   ├── datastructures/     # Data structures I've implemented
│   │   ├── Stack.ts        # My Stack implementation
│   │   └── LinkedList.ts   # My LinkedList implementation
│   └── algorithms/         # Algorithms I'm learning
├── tests/
│   ├── problems/           # Tests for my problem solutions
│   ├── datastructures/     # Tests for my data structures
│   └── algorithms/         # Tests for my algorithms
├── bench/
│   └── bench.cjs           # My performance benchmarking tool
├── typescript-basics/      # Where I'm learning TypeScript fundamentals
│   ├── 01-basics/          # Variables, types, annotations
│   ├── 02-types/           # Arrays, objects, interfaces
│   ├── 03-functions/       # Function types and parameters
│   ├── 04-classes/         # Classes, inheritance, OOP
│   ├── 05-generics/        # Generic types and constraints
│   ├── 06-advanced/        # Unions, intersections, guards
│   └── notes/              # My personal learning notes
└── [config files]          # TypeScript, ESLint, Prettier, Vitest
```

## Getting Started (If You Want to Follow Along)

### What You'll Need

- Node.js (v16 or higher)
- pnpm (or npm/yarn if you prefer)

### Installation

Clone this repo and install dependencies:

```bash
git clone https://github.com/JonathanSContreras/learning-typescript.git
cd learning-typescript
pnpm install
```

**Note**: This project includes `prompt-sync` for interactive console input in TypeScript learning exercises. This allows me to create interactive scripts that can accept user input while learning TypeScript fundamentals.

### Verify Everything Works

Run the test suite to make sure it's all set up:

```bash
pnpm test
```

You should see 35 passing tests!

## Commands I Use Daily

### Running TypeScript Files

```bash
# Run a single TypeScript file
npx ts-node path/to/file.ts

# Example: Run a file from typescript-basics
npx ts-node typescript-basics/01-basics/variables.ts

# Example: Run a file from src
npx ts-node src/datastructures/Stack.ts

# Run interactive scripts (that use prompt-sync)
npx ts-node typescript-basics/01-basics/variables.ts
# These scripts can accept user input for interactive learning
```

### Testing

```bash
# Run all tests once
pnpm test

# Run tests in watch mode (my favorite during development)
pnpm run dev

# Run tests for a specific file
pnpm test Stack
```

### Linting & Formatting

```bash
# Lint my source files
npx eslint src/

# Auto-fix linting issues
npx eslint src/ --fix

# Format everything with Prettier
npx prettier --write .

# Check formatting without changing files
npx prettier --check .
```

### Benchmarking

```bash
# Run performance benchmarks
pnpm run bench
```

## How I'm Using This Repo

### Step 0: Learning TypeScript Basics (Where I Started!)

I'm starting with the `typescript-basics/` directory to really nail down the fundamentals:

```bash
# Navigate to basics
cd typescript-basics

# Start with the first lesson
npx ts-node 01-basics/variables.ts
```

**My Learning Path:**
1. `01-basics/variables.ts` - Variables, types, type annotations
2. `02-types/arrays-and-tuples.ts` - Arrays and tuples
3. `02-types/objects-and-interfaces.ts` - Objects and interfaces
4. `03-functions/function-types.ts` - Function types
5. `04-classes/classes.ts` - Classes and OOP
6. `05-generics/generics-basics.ts` - Generics (getting challenging!)
7. `06-advanced/union-and-intersection.ts` - Advanced types

Each file has:
- Detailed explanations with examples
- Practice exercises I work through (marked with TODO)
- Key takeaways I've documented
- Real-world usage patterns

I'm keeping all my notes in the `notes/` directory - it's super helpful to write things in my own words!

Check out [typescript-basics/README.md](typescript-basics/README.md) for my complete TypeScript learning guide.

### Step 1: Solving Coding Problems

When I tackle a new problem, I copy from my template:

```bash
# Create new problem files
cp src/problems/_template.ts src/problems/two-sum.ts
cp tests/problems/_template.test.ts tests/problems/two-sum.test.ts
```

Then I implement the solution and write tests. Here's an example of how I solved Two Sum:

**src/problems/two-sum.ts**
```typescript
/**
 * Problem: Two Sum
 * Difficulty: Easy
 * Source: LeetCode #1
 *
 * Description:
 * Given an array of integers and a target, return indices of two numbers
 * that add up to the target.
 */

export function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }
    map.set(nums[i], i);
  }

  return [];
}
```

**tests/problems/two-sum.test.ts**
```typescript
import { describe, it, expect } from 'vitest';
import { twoSum } from '../../src/problems/two-sum';

describe('twoSum', () => {
  it('should find two numbers that add up to target', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  it('should handle multiple solutions', () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });
});
```

I always run tests in watch mode while I'm working:
```bash
pnpm run dev
```

### Step 2: Implementing Data Structures

This is where I'm really learning! I implement data structures from scratch to understand how they work.

Here's how I'd create a Queue:

**src/datastructures/Queue.ts**
```typescript
export class Queue<T> {
  private items: T[] = [];

  enqueue(item: T): void {
    this.items.push(item);
  }

  dequeue(): T | undefined {
    return this.items.shift();
  }

  size(): number {
    return this.items.length;
  }
}
```

**tests/datastructures/Queue.test.ts**
```typescript
import { describe, it, expect } from 'vitest';
import { Queue } from '../../src/datastructures/Queue';

describe('Queue', () => {
  it('should enqueue and dequeue in FIFO order', () => {
    const queue = new Queue<number>();
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
  });
});
```

### Step 3: Benchmarking Performance

I love comparing different approaches to see which is faster:

**bench/stack-vs-array.js**
```javascript
const { compareBenchmarks } = require('./bench.cjs');

compareBenchmarks([
  {
    name: 'Array push/pop',
    fn: () => {
      const arr = [];
      for (let i = 0; i < 1000; i++) arr.push(i);
      for (let i = 0; i < 1000; i++) arr.pop();
    }
  },
  {
    name: 'Array shift/unshift',
    fn: () => {
      const arr = [];
      for (let i = 0; i < 1000; i++) arr.unshift(i);
      for (let i = 0; i < 1000; i++) arr.shift();
    }
  }
], 100);
```

Run it:
```bash
node bench/stack-vs-array.js
```

### Step 4: Implementing Algorithms

I'm adding algorithms as I learn them:

**src/algorithms/binary-search.ts**
```typescript
/**
 * Binary Search Algorithm
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */
export function binarySearch(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
}
```

## My Daily Development Workflow

This is what a typical session looks like for me:

1. **Start watch mode**: `pnpm run dev`
2. **Pick a topic** to learn or problem to solve
3. **Write implementation** in TypeScript
4. **Write comprehensive tests** to make sure it works
5. **Run linter**: `npx eslint src/ --fix`
6. **Format code**: `npx prettier --write .`
7. **Benchmark** if I'm curious about performance

## What I've Built So Far

### Data Structures I've Implemented

- **Stack** - LIFO structure with push/pop operations
  - Location: `src/datastructures/Stack.ts`
  - Tests: 14 passing tests
  - Features: Generic types, proper error handling

- **LinkedList** - Singly linked list
  - Location: `src/datastructures/LinkedList.ts`
  - Tests: 19 passing tests
  - Features: Insert, remove, search operations

### Templates I Created

- **Problem Template** - `src/problems/_template.ts`
  - Problem description format
  - Space for complexity analysis
  - Test template included

## Things I'm Learning

These are the key principles I'm focusing on:

1. **Type Everything**: I'm leveraging TypeScript's type system to catch bugs early
2. **Test First**: Trying to adopt TDD - write tests before implementation
3. **Document Complexity**: Always noting time/space complexity in my code
4. **Use Generics**: Making my data structures reusable
5. **Handle Edge Cases**: Testing empty inputs, boundaries, weird cases
6. **Benchmark When It Matters**: Using my bench harness for performance-critical code

## My Learning Roadmap

### Phase 1: TypeScript Fundamentals (1-2 weeks)
**My Goal**: Really understand TypeScript before diving into DSA

I'm working through:
1. Complete `typescript-basics/` directory in order
2. All practice exercises in each file
3. Taking notes on tough concepts
4. Experimenting with the type system
5. Building small utilities for practice

### Phase 2: Beginner DSA (2-3 weeks)
**My Goal**: Understand fundamental data structures

My plan:
1. Deep dive into Stack and LinkedList
2. Solve easy LeetCode problems
3. Implement Queue and Deque myself
4. Practice array/string manipulation
5. Write tests for everything

### Phase 3: Intermediate DSA (4-6 weeks)
**My Goal**: Master core algorithms and structures

What I'll tackle:
1. Trees (Binary Tree, BST)
2. Graph representations and traversals
3. Sorting algorithms (merge sort, quick sort)
4. Hash tables and hash maps
5. Dynamic programming basics
6. Aim for 2-3 problems daily

### Phase 4: Advanced DSA (Ongoing)
**My Goal**: Handle complex challenges

Long-term goals:
1. Advanced graph algorithms (Dijkstra, A*)
2. Complex structures (Trie, Heap, Union-Find)
3. Advanced DP patterns
4. System design data structures
5. Maybe some competitive programming?

## Resources I'm Using

### For TypeScript
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html) - Official docs, very helpful
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/) - Great free book
- [TypeScript Playground](https://www.typescriptlang.org/play) - For quick experiments
- [Execute Program - TypeScript](https://www.executeprogram.com/courses/typescript) - Interactive lessons

### For DSA & Problems
- [LeetCode](https://leetcode.com/) - My main practice platform
- [NeetCode Roadmap](https://neetcode.io/roadmap) - Following this structure
- [Visualgo](https://visualgo.net/) - Amazing algorithm visualizations
- [Big-O Cheat Sheet](https://www.bigocheatsheet.com/) - Quick reference

### Tools & Testing
- [Vitest Documentation](https://vitest.dev/) - My testing framework
- [ESLint Rules](https://eslint.org/docs/rules/) - Keeping my code clean
- [Prettier Docs](https://prettier.io/docs/en/) - Auto-formatting

## Contributing / Feedback

This is primarily my personal learning repository, but if you have suggestions, spot bugs, or want to share your own approach, feel free to:
- Open an issue
- Submit a PR
- Fork it and make it your own!

I'm always open to learning better ways to do things.

## License

ISC

---

**Final Thoughts**: I'm documenting this journey because I believe learning in public helps me stay accountable and might help others too. Understanding *why* things work is way more important than memorizing *how* they work.

If you're on a similar journey, good luck! We got this! 💪

---

*Last Updated: Building fundamentals in TypeScript and implementing basic data structures. More to come!*

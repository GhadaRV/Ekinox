# DVD Pricing Calculator

A professional pricing calculator for Back to the Future DVDs with discount rules, built with Node.js and TypeScript.

## Features

- Calculates prices for Back to the Future DVDs with volume-based discounts
- Supports other movies at standard pricing
- Clean, maintainable, and well-tested codebase
- Type-safe implementation with TypeScript

## Pricing Rules

- Each Back to the Future DVD costs **15 €**
- **10% discount** when purchasing 2 different volumes
- **20% discount** when purchasing 3 different volumes
- Other movies cost **20 €** each (no discounts)

## Prerequisites

- Node.js (version 18 or higher)
- npm (comes with Node.js)

## Installation

1. Clone or download this repository
2. Install dependencies:

```bash
npm install
```

## Building

Compile TypeScript to JavaScript:

```bash
npm run build
```

## Usage

### Command Line

The program reads input from stdin (standard input) and outputs the calculated price.

**Example 1:**
```bash
echo -e "Back to the Future 1\nBack to the Future 2\nBack to the Future 3" | npm start
# Output: 36
```

**Example 2:**
```bash
echo -e "Back to the Future 1\nBack to the Future 3" | npm start
# Output: 27
```

**Example 3:**
```bash
echo "Back to the Future 1" | npm start
# Output: 15
```

**Example 4:**
```bash
echo -e "Back to the Future 1\nBack to the Future 2\nBack to the Future 3\nBack to the Future 2" | npm start
# Output: 48
```

**Example 5:**
```bash
echo -e "Back to the Future 1\nBack to the Future 2\nBack to the Future 3\nLa chèvre" | npm start
# Output: 56
```

## Running Tests

Run the test suite:

```bash
npm test
```

Run tests in watch mode:

```bash
npm run test:watch
```

## Project Structure

```
.
├── src/
│   ├── DVDPricingCalculator.ts    # Core pricing logic
│   ├── DVDPricingCalculator.test.ts # Unit tests
│   └── index.ts                    # CLI entry point
├── dist/                           # Compiled JavaScript (generated)
├── package.json                    # Project configuration
├── tsconfig.json                   # TypeScript configuration
├── jest.config.js                  # Jest test configuration
└── README.md                       # This file
```

## Development

The project uses:
- **TypeScript** for type safety and modern JavaScript features
- **Jest** for unit testing
- **ES Modules** for modern module system



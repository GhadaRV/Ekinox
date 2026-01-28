#!/usr/bin/env node

import { DVDPricingCalculator } from './DVDPricingCalculator.js';

function main(): void {
  const calculator = new DVDPricingCalculator();
  let input = '';
  const stdin = process.stdin;
  stdin.setEncoding('utf8');

  stdin.on('data', (chunk: string) => {
    input += chunk;
  });

  stdin.on('end', () => {
    const price = calculator.calculatePrice(input);
    console.log(price);
  });

  stdin.on('error', (error: Error) => {
    console.error('Error reading input:', error);
    process.exit(1);
  });
}

main();

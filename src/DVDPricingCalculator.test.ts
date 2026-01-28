import { DVDPricingCalculator } from './DVDPricingCalculator';

describe('DVDPricingCalculator', () => {
  let calculator: DVDPricingCalculator;

  beforeEach(() => {
    calculator = new DVDPricingCalculator();
  });

  describe('calculatePrice', () => {
    it('should return 36 for three different Back to the Future volumes', () => {
      const cart = 'Back to the Future 1\nBack to the Future 2\nBack to the Future 3';
      expect(calculator.calculatePrice(cart)).toBe(36);
    });

    it('should return 27 for two different Back to the Future volumes', () => {
      const cart = 'Back to the Future 1\nBack to the Future 3';
      expect(calculator.calculatePrice(cart)).toBe(27);
    });

    it('should return 15 for a single Back to the Future volume', () => {
      const cart = 'Back to the Future 1';
      expect(calculator.calculatePrice(cart)).toBe(15);
    });

    it('should return 48 for four Back to the Future DVDs with three different volumes', () => {
      const cart = 'Back to the Future 1\nBack to the Future 2\nBack to the Future 3\nBack to the Future 2';
      expect(calculator.calculatePrice(cart)).toBe(48);
    });

    it('should return 56 for three Back to the Future volumes and one other movie', () => {
      const cart = 'Back to the Future 1\nBack to the Future 2\nBack to the Future 3\nLa chèvre';
      expect(calculator.calculatePrice(cart)).toBe(56);
    });

    it('should return 0 for empty cart', () => {
      expect(calculator.calculatePrice('')).toBe(0);
      expect(calculator.calculatePrice('   ')).toBe(0);
    });

    it('should handle multiple other movies correctly', () => {
      const cart = 'La chèvre\nAnother Movie';
      expect(calculator.calculatePrice(cart)).toBe(40);
    });

    it('should handle two Back to the Future volumes with other movies', () => {
      const cart = 'Back to the Future 1\nBack to the Future 2\nLa chèvre';
      expect(calculator.calculatePrice(cart)).toBe(47);
    });

    it('should handle duplicate volumes correctly', () => {
      const cart = 'Back to the Future 1\nBack to the Future 1\nBack to the Future 1';
      expect(calculator.calculatePrice(cart)).toBe(45);
    });

    it('should handle mixed case and extra whitespace', () => {
      const cart = '  Back to the Future 1  \n  Back to the Future 2  \n  Back to the Future 3  ';
      expect(calculator.calculatePrice(cart)).toBe(36);
    });
  });
});

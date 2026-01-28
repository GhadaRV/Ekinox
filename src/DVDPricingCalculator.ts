export class DVDPricingCalculator {
  private static readonly BTTF_PRICE = 15;
  private static readonly OTHER_MOVIE_PRICE = 20;
  private static readonly TWO_VOLUMES_DISCOUNT = 0.1;
  private static readonly THREE_VOLUMES_DISCOUNT = 0.2;

  private isBackToTheFuture(movieName: string): boolean {
    return movieName.trim().startsWith('Back to the Future');
  }

  private extractVolumeNumber(movieName: string): number {
    const parts = movieName.trim().split(/\s+/);
    if (parts.length >= 5) {
      const volumeStr = parts[4];
      const volume = parseInt(volumeStr, 10);
      return isNaN(volume) ? 0 : volume;
    }
    return 0;
  }

  public calculatePrice(cart: string): number {
    if (!cart || !cart.trim()) {
      return 0;
    }

    const movies = cart
      .trim()
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line.length > 0);

    const bttfMovies: string[] = [];
    const otherMovies: string[] = [];

    for (const movie of movies) {
      if (this.isBackToTheFuture(movie)) {
        bttfMovies.push(movie);
      } else {
        otherMovies.push(movie);
      }
    }

    const bttfTotal = this.calculateBTTFPrice(bttfMovies);
    const otherTotal = otherMovies.length * DVDPricingCalculator.OTHER_MOVIE_PRICE;

    return Math.round(bttfTotal + otherTotal);
  }

  private calculateBTTFPrice(bttfMovies: string[]): number {
    if (bttfMovies.length === 0) {
      return 0;
    }

    const uniqueVolumes = new Set<number>();
    for (const movie of bttfMovies) {
      const volume = this.extractVolumeNumber(movie);
      if (volume > 0) {
        uniqueVolumes.add(volume);
      }
    }

    const basePrice = bttfMovies.length * DVDPricingCalculator.BTTF_PRICE;

    let discount = 0;
    if (uniqueVolumes.size >= 3) {
      discount = DVDPricingCalculator.THREE_VOLUMES_DISCOUNT;
    } else if (uniqueVolumes.size >= 2) {
      discount = DVDPricingCalculator.TWO_VOLUMES_DISCOUNT;
    }

    return basePrice * (1 - discount);
  }
}

export default class ScaleManager {
  private current = 0
  private destination = 0

  /**
   * Get scale for scroll animation.
   * @param ease easing rate
   * @returns scale
   */
  getScrollScale(ease: number): number {
    const result = (this.destination - this.current) * ease
    this.current += result
    return Math.abs(result)
  }

  /**
   * Increase scale for object moving animation.
   * @param ease easing rate
   */
  increaseScale(ease: number): void {
    if(this.current < this.destination) {
      const result = (this.destination - this.current) * ease
      this.current += result

      if(this.current >= (this.destination - 0.001)) {
        this.current = this.destination
      }
    }
  }

  /**
   * Decrease scale for object moving animation.
   * @param ease easing rate
   */
  decreaseScale(ease: number): void {
    if(this.current > this.destination) {
      const result = (this.destination - this.current) * ease
      this.current += result

      if(this.current <= this.destination + 0.001) {
        this.current = this.destination
      }
    }
  }

  /**
   * Getter.
   * @returns current scale
   */
  getCurrent(): number {
    return this.current
  }

  /**
   * Set destination.
   * @param dest destination
   */
  setDestination(dest: number): void {
    this.destination = dest
  }
}
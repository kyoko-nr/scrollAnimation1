export default class TimeKeeper {
  private prevTime = Date.now()

  /**
   * get time between now and the time when this method is called last time.
   * @returns second
   */
  getTime(): number {
    const currentTime = Date.now()
    const deltaTime = (currentTime - this.prevTime) / 1000
    this.prevTime = currentTime
    return deltaTime
  }
}
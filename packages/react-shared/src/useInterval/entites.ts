const DEFAULT_TIME = 1000;

export class IntervalEntity {
  private ms;
  private callback;
  private id: NodeJS.Timeout | undefined = undefined;

  constructor(callback: () => unknown, ms: number = DEFAULT_TIME) {
    this.ms = ms;
    this.callback = callback;
  }

  public onInterval() {
    this.id = setInterval(() => {
      this.callback();
    }, this.ms);
  }

  public clear() {
    clearInterval(this.id);
  }
}

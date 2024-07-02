abstract class UseCaseRequest {
  public validate(): void {
    this.validatePayload();
  }
  public toString(): string {
    return JSON.stringify(this);
  }

  protected abstract validatePayload(): void;
}

export { UseCaseRequest };

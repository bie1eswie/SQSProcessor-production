abstract class DomainException extends Error {
  readonly code: string;

  readonly message: string;
  readonly status: number;
  constructor(status: number, code: string, message: string) {
    super(message);
    this.name = new.target.name;
    this.status = status;
    this.code = code;
    this.message = message;
  }
}

export { DomainException };

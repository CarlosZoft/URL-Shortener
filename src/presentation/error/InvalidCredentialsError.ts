export class InvalidCredentialsError extends Error {
  status = 400;
  message: string;

  constructor(message: string) {
    super(`Invalid Credentials ${message}`);
    this.message = `Invalid Credentials ${message}`;
  }
}

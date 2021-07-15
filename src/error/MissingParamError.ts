export class MissingParamError extends Error {
  status = 400;
  message: string;

  constructor(message: string) {
    super(`Missing Param error : ${message}`);
    this.message = `Missing Param error : ${message}`;
  }
}

export class NotFoundError extends Error {
  status = 404;
  message: string;

  constructor(message: string) {
    super(`Not Found : ${message}`);
    this.message = `Not Found : ${message}`;
  }
}

export class UnauthorizedError extends Error {
  status = 400;
  message: string;

  constructor() {
    super(`Unauthorized`);
    this.message = `Unauthorized`;
  }
}

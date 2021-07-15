export class ServerError extends Error {
  status: 500;

  message: string;

  constructor() {
    super("Ocurred and error");
    this.message = "Ocurred and error";
  }
}

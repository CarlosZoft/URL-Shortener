import {
  ServerError,
  UnauthorizedError,
  InvalidCredentialsError,
  NotFoundError,
  MissingParamError,
} from "../presentation/error";
import { Response, Request, NextFunction } from "express";

export const exceptionError = (
  error:
    | ServerError
    | UnauthorizedError
    | InvalidCredentialsError
    | NotFoundError
    | MissingParamError,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  if (error instanceof Error) {
    return response
      .status(error.status || 406)
      .json({ error: error.message, status: error.status });
  }

  return response.status(500).json({
    status: "error",
    message: "Internal Server Error",
  });
};

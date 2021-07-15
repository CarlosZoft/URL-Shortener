import {
  ServerError,
  UnauthorizedError,
  InvalidCredentialsError,
  NotFoundError,
  MissingParamError,
} from "../error";
import { Response, Request, NextFunction } from "express";

interface IErrors {
  httpError:
    | ServerError
    | UnauthorizedError
    | InvalidCredentialsError
    | NotFoundError
    | MissingParamError;
}

export const exceptionError = (
  error?:
     ServerError
    || UnauthorizedError
    || InvalidCredentialsError
    || NotFoundError
    || MissingParamError,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const typesErrors = [
    ServerError,
    UnauthorizedError,
    InvalidCredentialsError,
    NotFoundError,
    MissingParamError,
  ];
  console.log(error);
  if (error instanceof Error) {
    return response.status(error.status || 406).json({ error: error.message });
  }

  return response.status(500).json({
    status: "error",
    message: "Internal Server Error",
  });
};

import HttpException from "../error/HttpException";
import { Response, Request, NextFunction } from 'express';

const exceptionError = (error: HttpException, request: Request, response: Response, next: NextFunction) => {
  if (error instanceof Error) {
    return response
      .status(error.status || 406)
      .json({ error: error.message });
  }
  return response.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
  });
}

export default exceptionError
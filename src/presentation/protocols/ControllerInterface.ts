import { Response } from "express";
export interface ControllerInterface {
  handle(request: Request, response: Response): any;
}

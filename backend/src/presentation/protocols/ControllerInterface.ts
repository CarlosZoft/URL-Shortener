import { Response, Request } from "express";
export interface ControllerInterface {
  handle(request: Request, response: Response): Promise<any>;
}

import { ServerError } from "./../../presentation/error/ServerError";
import { ControllerInterface } from "./../../presentation/protocols/ControllerInterface";
import { Request, Response } from "express";
import { CreateURLService } from "../../service/CreateURLService";

export class CreateURLController {
  async handle(request: Request, response: Response) {
    const { fullUrl } = request.body;

    const service = new CreateURLService();
    const data = service.execute({ fullUrl });
    if (data) {
      response.status(200).json(data);
    }
    throw new ServerError();
  }
}

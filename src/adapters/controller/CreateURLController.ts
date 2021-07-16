import { ServerError } from "./../../presentation/error/ServerError";
import { ControllerInterface } from "./../../presentation/protocols/ControllerInterface";
import { Request, Response } from "express";
import { CreateURLService } from "../../service/CreateURLService";

export class CreateURLController implements ControllerInterface {
  async handle(request: Request, response: Response): Promise<any> {
    const { fullUrl, validDays } = request.body;

    const service = new CreateURLService();
    const data = await service.execute({
      fullUrl,
      validDays: parseInt(validDays),
    });
    if (data) {
      response.status(200).json(data);
    } else throw new ServerError();
  }
}

import { ServerError } from "../../presentation/error/ServerError";
import { ControllerInterface } from "../../presentation/protocols/ControllerInterface";
import { Request, Response } from "express";
import { CreateURLService } from "../../service/CreateURLService";

export class CreateURLController implements ControllerInterface {
  async handle(request: Request, response: Response): Promise<any> {
    const { fullUrl, validDays, validAcess } = request.body;

    const service = new CreateURLService();
    const data = await service.execute({
      fullUrl,
      validDays: parseInt(validDays),
      validAcess: parseInt(validAcess),
    });
    if (data) {
      response.status(200).json(data);
    } else throw new ServerError();
  }
}

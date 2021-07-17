import { UpdateVisitorService } from "./../../service/UpdateVisitorService";
import { ControllerInterface } from "./../../presentation/protocols/ControllerInterface";
import { Request, Response } from "express";
import { MissingParamError, ServerError } from "../../presentation/error";
export class UpdateVisitorController implements ControllerInterface {
  async handle(request: Request, response: Response): Promise<any> {
    const { url_id } = request.params;
    if (!url_id) {
      throw new MissingParamError("Id");
    }
    const service = new UpdateVisitorService();
    const data = await service.execute(url_id);
    if (data) {
      response.status(200).send(data);
    } else throw new ServerError();
  }
}

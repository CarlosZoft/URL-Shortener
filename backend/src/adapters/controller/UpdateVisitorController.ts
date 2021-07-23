import { UpdateVisitorService } from "../../service/UpdateVisitorService";
import { ControllerInterface } from "../../presentation/protocols/ControllerInterface";
import { Request, Response } from "express";
import { MissingParamError } from "../../presentation/error";
export class UpdateVisitorController implements ControllerInterface {
  async handle(request: Request, response: Response): Promise<any> {
    const { endpoint } = request.params;
    if (!endpoint) {
      throw new MissingParamError("endpoint");
    }
    const service = new UpdateVisitorService();
    await service.linkExpires(endpoint);
    const data = await service.execute(endpoint);
    console.log(data);
    return response.redirect(data.fullUrl);
  }
}

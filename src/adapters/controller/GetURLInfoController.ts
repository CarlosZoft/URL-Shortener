import { GetUrlInfoService } from "../../service/GetURLInfoService";
import { Response, Request } from "express";
import { ServerError } from "../../presentation/error/ServerError";

export class GetURLInfoController {
  async getInfoUrl(request: Request, response: Response) {
    const { url_id } = request.params;

    const service = new GetUrlInfoService();
    const data = await service.getInfoUrl(url_id);
    if (data) {
      response.status(200).send(data);
    } else throw new ServerError();
  }
  async getInfoUrls(request: Request, response: Response) {
    const service = new GetUrlInfoService();
    const data = await service.getInfoUrls();

    if (data) {
      response.status(200).send(data);
    } else throw new ServerError();
  }
}

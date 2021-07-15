import { GetUrlInfoService } from "./../../service/GetURLInfoService";
import { Response, Request } from "express";
import { ServerError } from "../../error/ServerError";

export class GetURLInfoController {
  private Service = new GetUrlInfoService();

  async getInfoUrl(request: Request, response: Response) {
    const { url_id } = request.params;

    const data = await this.Service.getInfoUrl(url_id);
    if (data) {
      response.status(200).json(data);
    }
    throw new ServerError();
  }
  async getInfoUrls(request: Request, response: Response) {
    const data = await this.Service.getInfoUrls();

    if (data) {
      response.status(200).json(data);
    }
    throw new ServerError();
  }
}

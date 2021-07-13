import { Response, Request } from 'express';
import HttpException from '../error/HttpException';
import { GetUrlInfoService } from '../service/GetURLInfoService';

export class GetURLInfoController {

  async getInfoUrl(request: Request, response: Response) {
    const { url_id } = request.params;

    if( !url_id ) {
      throw new HttpException(400, 'Invalid Params');
    }
    const service = new GetUrlInfoService();
    const data = await service.getInfoUrl(url_id);
    console.log('passou do data')
    if( data ) {
      response.status(200).json(data);
    }
    throw new HttpException(500, 'Ocurred an error');
  }

  async getInfoUrls(request: Request, response: Response) {
    const service = new GetUrlInfoService();
    const data = await service.getInfoUrl();
    
    response.status(200).json(data);
    
  }

}
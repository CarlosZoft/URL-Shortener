import HttpException from "../error/HttpException";
import { getCustomRepository } from 'typeorm';
import URLRepository from "../database/repositories/URLRepository";
export class GetUrlInfoService {
  async getInfoUrl ( url_id?: string) {

      const urlRepository = getCustomRepository(URLRepository);

      if( !url_id ){
        const URL = await urlRepository.find();
        return URL;
      }

      const URL = await urlRepository.findOne({ id : url_id });
      if( !URL ){
        throw new HttpException(404, 'Url not found');
      }
      return URL;
    


  }

}
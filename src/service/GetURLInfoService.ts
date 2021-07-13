import { getConnection } from "typeorm";
import { UrlEntity } from "../database/entities/UrlEntity";
import HttpException from "../error/HttpException";

export class GetUrlInfoService {
  async getInfoUrl ( url_id?: string) {

    const connection = getConnection();
    const transaction = await connection.manager.transaction(async manager => {
      const URLRepository = manager.getRepository(UrlEntity);

      if( !url_id ){
        const URL = await URLRepository.find();
        return URL;
      }

      const URL = await URLRepository.findOne({ id : url_id });
      if( !URL ){
        throw new HttpException(404, 'Url not found');
      }
      return URL;
    
    })
    return transaction;

  }

}
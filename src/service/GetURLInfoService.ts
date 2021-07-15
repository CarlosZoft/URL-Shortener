import { MissingParamError, NotFoundError } from "../error";
import { getCustomRepository } from "typeorm";
import URLRepository from "../database/repositories/URLRepository";
export class GetUrlInfoService {
  async getInfoUrl(url_id: string) {
    const urlRepository = getCustomRepository(URLRepository);

    if (!url_id) {
      throw new MissingParamError("ID");
    }

    const URL = await urlRepository.findOne({ id: url_id });
    if (!URL) {
      throw new NotFoundError("URL");
    }
    return URL;
  }
  async getInfoUrls() {
    const urlRepository = getCustomRepository(URLRepository);

    const URL = await urlRepository.find();
    if (!URL.length) {
      throw new NotFoundError("URLS");
    }
    return URL;
  }
}

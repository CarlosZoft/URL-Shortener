import { URLDtos } from "./../dtos/URLDtos";
import { MissingParamError, NotFoundError } from "../presentation/error";
import { getCustomRepository } from "typeorm";
import { URLRepository } from "../database/repositories/URLRepository";
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
    return URLDtos.of(URL);
  }
  async getInfoUrls() {
    const urlRepository = getCustomRepository(URLRepository);

    const URL = await urlRepository.find();
    if (!URL.length) {
      throw new NotFoundError("URLS");
    }
    return URLDtos.map(URL);
  }
}

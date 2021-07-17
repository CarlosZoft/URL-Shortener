import { getCustomRepository } from "typeorm";
import { URLDtos } from "../dtos/URLDtos";
import { NotFoundError } from "../presentation/error";
import { URLRepository } from "./../database/repositories/URLRepository";
import { ServiceInterface } from "./../presentation/protocols/ServiceInterface";

export class UpdateVisitorService implements ServiceInterface {
  async execute(url_id: string): Promise<any> {
    const urlRepository = getCustomRepository(URLRepository);

    const URLID = await urlRepository.findOne({ id: url_id });
    if (!URLID) {
      throw new NotFoundError("URL");
    }
    URLID.visitQtd += 1;
    await urlRepository.save(URLID);

    return URLDtos.of(URLID);
  }
}

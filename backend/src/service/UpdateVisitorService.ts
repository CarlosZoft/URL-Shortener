import { getCustomRepository } from "typeorm";
import { NotFoundError, UnauthorizedError } from "../presentation/error";
import { URLRepository } from "../database/repositories/URLRepository";
import { ServiceInterface } from "../presentation/protocols/ServiceInterface";

export class UpdateVisitorService implements ServiceInterface {
  async execute(endpoint: string): Promise<any> {
    const urlRepository = getCustomRepository(URLRepository);

    const URLID = await urlRepository.findOne({ shortUrl: endpoint });
    if (!URLID) {
      throw new NotFoundError("URL");
    }
    URLID.visitQtd -= 1;
    if (URLID.visitQtd == 0) {
      await urlRepository.remove(URLID);
    }
    await urlRepository.save(URLID);

    return {
      fullUrl: URLID.fullUrl,
    };
  }
  async linkExpires(endpoint: string) {
    const urlRepository = getCustomRepository(URLRepository);

    const URLID = await urlRepository.findOne({ shortUrl: endpoint });
    if (!URLID) {
      throw new NotFoundError("URL");
    }
    const now = new Date();
    if (now > URLID.linkExpires) {
      urlRepository.remove(URLID);
      urlRepository.save(URLID);
      throw new UnauthorizedError();
    }
  }
}

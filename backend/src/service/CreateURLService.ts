import { InvalidCredentialsError } from "../presentation/error";
import { URLDtos } from "../dtos/URLDtos";
import { getCustomRepository } from "typeorm";
import { fullURLInterface } from "../dtos/FullURlInterface";
import { ServiceInterface } from "../presentation/protocols/ServiceInterface";
import { URLRepository } from "../database/repositories/URLRepository";
import crypto from "crypto";
import linkExpiresDate from "../shared/linkExpires";

export class CreateURLService implements ServiceInterface {
  async execute({
    fullUrl,
    validDays,
    validAcess,
  }: fullURLInterface): Promise<any> {
    const fieldsParam = [fullUrl, validAcess, validDays];
    for (const field in fieldsParam) {
      if (!fieldsParam[field]) {
        throw new InvalidCredentialsError(field);
      }
    }
    const urlRepository = getCustomRepository(URLRepository);

    const urlAlreadyExists = await urlRepository.findOne({ fullUrl });
    if (urlAlreadyExists) {
      return {
        fullUrl: urlAlreadyExists.fullUrl,
      };
    }

    do {
      var shortUrl = crypto.randomBytes(3).toString("hex");
      var URLID = await urlRepository.findOne({ shortUrl });
    } while (URLID);

    const linkExpires = linkExpiresDate.dateLinkExpires(validDays);
    const newUrl = urlRepository.create({
      fullUrl,
      shortUrl,
      visitQtd: validAcess,
      linkExpires,
    });

    const URL = await urlRepository.save(newUrl);

    return URLDtos.of(URL);
  }
}

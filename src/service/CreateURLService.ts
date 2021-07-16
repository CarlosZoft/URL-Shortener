import {
  InvalidCredentialsError,
  MissingParamError,
} from "./../presentation/error";
import { URLDtos } from "./../dtos/URLDtos";
import { getCustomRepository } from "typeorm";
import { fullURLInterface } from "./../dtos/FullURlInterface";
import { ServiceInterface } from "./../presentation/protocols/ServiceInterface";
import { URLRepository } from "../database/repositories/URLRepository";
import crypto from "crypto";
import linkExpiresDate from "../shared/linkExpires";

export class CreateURLService implements ServiceInterface {
  async execute({ fullUrl, validDays }: fullURLInterface): Promise<any> {
    if (!fullUrl) {
      throw new MissingParamError("fullUrl");
    }
    const urlRepository = getCustomRepository(URLRepository);

    const urlAlreadyExists = await urlRepository.findOne({ fullUrl });
    if (urlAlreadyExists) {
      throw new InvalidCredentialsError("fullUrl Already exists");
    }
    const shortUrl = crypto.randomBytes(3).toString("hex");
    const linkExpires = linkExpiresDate.dateLinkExpires(validDays);
    const newUrl = urlRepository.create({
      fullUrl,
      shortUrl,
      visitQtd: 0,
      linkExpires,
    });

    const URL = await urlRepository.save(newUrl);

    return URLDtos.of(URL);
  }
}

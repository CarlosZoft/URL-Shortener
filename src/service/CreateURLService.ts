import {
  InvalidCredentialsError,
  MissingParamError,
} from "./../presentation/error";
import { getCustomRepository } from "typeorm";
import URLRepository from "../database/repositories/URLRepository";
import { fullURLInterface } from "./../dtos/FullURlInterface";
import { ServiceInterface } from "./../presentation/protocols/ServiceInterface";
import crypto from "crypto";
import linkExpiresDate from "../shared/linkExpires";

export class CreateURLService {
  async execute({ fullUrl }: fullURLInterface) {
    if (!fullUrl) {
      throw new MissingParamError("fullUrl");
    }
    const urlRepository = getCustomRepository(URLRepository);

    const urlAlreadyExists = await urlRepository.findOne(fullUrl);
    if (urlAlreadyExists) {
      throw new InvalidCredentialsError("fullUrl Already exists");
    }
    const shortUrl = crypto.randomBytes(3).toString("hex");
    const linkExpires = linkExpiresDate.dateLinkExpires();
    const newUrl = urlRepository.create({
      fullUrl,
      shortUrl,
      linkExpires,
    });

    const URL = await urlRepository.save(newUrl);

    return URL;
  }
}

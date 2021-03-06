import { EntityRepository, Repository } from "typeorm";
import { UrlEntity } from "../entities/UrlEntity";

@EntityRepository(UrlEntity)
export class URLRepository extends Repository<UrlEntity> {}

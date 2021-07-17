import { UrlEntity } from "../database/entities/UrlEntity";

export class URLDtos {
  static of(URL: UrlEntity) {
    const {
      id,
      fullUrl,
      shortUrl,
      linkExpires,
      visitQtd,
      created_at,
      updated_at,
    } = URL;
    return {
      id,
      fullUrl,
      shortUrl,
      linkExpires,
      visitQtd,
      created_at,
      updated_at,
    };
  }

  static map(URL: UrlEntity[]) {
    const newFormat = URL.map((url) => URLDtos.of(url));
    return newFormat;
  }
}

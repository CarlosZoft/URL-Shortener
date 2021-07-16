import { UrlEntity } from "./../database/entities/UrlEntity";

export class URLDtos {
  static of(URL: UrlEntity) {
    const { id, fullUrl, shortUrl, created_at, updated_at } = URL;
    return {
      id,
      fullUrl,
      shortUrl,
      created_at,
      updated_at,
    };
  }
}

import api from "./api";
import { IBody } from "../interfaces";

export async function createUrl({ fullUrl, validAcess, validDays }: IBody) {
  const body = JSON.stringify({
    fullUrl,
    validAcess,
    validDays,
  });
  const response = await api.post("urls", body);
  return response;
}

import api from "./api";
import { IBody } from "../interfaces";

export async function createUrl(body: IBody) {
  const response = await api.post("/urls", { body });
  return response;
}

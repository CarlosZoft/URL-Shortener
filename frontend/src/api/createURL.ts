import api from "./api";
import { IBody } from "../interfaces";

export async function createUrl(body: IBody) {
  console.log(body);
  const response = await api.post("/urls", { body });
  return response;
}

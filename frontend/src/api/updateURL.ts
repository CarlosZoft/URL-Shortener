import api from "./api";
import { IBody } from "../interfaces";

export async function updateUrl(endpoint: string) {
  const end = "/" + endpoint;
  const response = await api.get(end);
  return response;
}

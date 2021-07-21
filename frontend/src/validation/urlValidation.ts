import urlRegex from "url-regex";
export const validURL = (URL: string) => {
  return urlRegex({ exact: true }).test(URL);
};

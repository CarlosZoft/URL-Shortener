import urlRegex from 'url-regex'
export const validURL = (URL: any) => {
  return urlRegex({exact: true}).test(URL);
};

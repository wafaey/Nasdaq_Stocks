import axios from "axios";

const Config = {
  get: (subUrl: string, parameters: object): Promise<any> => {
    let method = "GET";
    return RequestHandler.handelRequest(subUrl, parameters, method);
  },
  post: (subUrl: string, parameters: object): Promise<any> => {
    let method = "POST";
    return RequestHandler.handelRequest(subUrl, parameters, method);
  },
};
const ABSOLUTE_URL = /^https?:\/\/(\w+(:\d{4})?)\/?/;
const RequestHandler = {
  handelRequest: (
    subUrl: string,
    data: object,
    method: string
  ): Promise<any> => {
    let isAbsoluteUrl = ABSOLUTE_URL.test(subUrl);
    let url = "";

    if (isAbsoluteUrl) url = subUrl;
    return axios({
      method,
      url,
      data,
      headers: {},
    });
  },
};

export default Config;

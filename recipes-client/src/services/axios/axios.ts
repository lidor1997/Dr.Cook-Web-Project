import { default as Axios } from "axios";

import { appStorage } from "../appStorage";

export const axios = Axios.create({
  baseURL: "http://localhost:3001/api",
});

axios.interceptors.request.use(async (config) => {
  const token = await appStorage.getToken();
  if (token) {
    config.headers!.authorization = `Bearer ${token}`;
  }

  return config;
});

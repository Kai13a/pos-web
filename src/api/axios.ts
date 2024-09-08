import { Config } from "@config";
import axios from "axios";

const getIsServer = () => typeof window === "undefined";

const instance = axios.create({
  baseURL: Config.ApiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.response.use(
  async (response) => response,
  async (error) => {
    const isServer = getIsServer();
    if (!isServer && error.response?.data?.code === 401) {
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export const setToken = (token: string | null): void => {
  instance.defaults.headers.common["x-token"] = token;
};

export default instance;

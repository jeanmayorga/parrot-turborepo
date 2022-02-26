import axios from "axios";
import { env } from "@parrot/config";
import { ApiError } from "./interface";

export const parrotApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

parrotApi.interceptors.request.use((request) => {
  if (env.isClient) {
    const access_token = localStorage.getItem("access_token");
    if (request.headers) {
      request.headers["Authorization"] = `Bearer ${access_token}`;
    }
  }

  return request;
});

parrotApi.interceptors.response.use(
  (response) => response,
  (error) => {
    const response = error.response;
    if (env.isClient && response.data.errors.length > 0) {
      response.data.errors.forEach((error: ApiError) => {
        if (error.code === "users.InvalidToken") {
          localStorage.removeItem("access_token");
          window.location.href = "/signin";
        }
      });
    }

    return Promise.reject(error);
  }
);

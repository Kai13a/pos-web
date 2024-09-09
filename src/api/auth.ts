import {
  ICheckTokenPayload,
  ICheckTokenSuccessResponse,
  ILoginPayload,
  ILoginSuccessResponse,
} from "@types";
import axios from "./axios";

export const postLogin = (
  payload: ILoginPayload
): Promise<ILoginSuccessResponse> =>
  axios.post<ILoginSuccessResponse>("login", payload).then(({ data }) => data);

export const postCheckToken = (
  payload: ICheckTokenPayload
): Promise<ICheckTokenSuccessResponse> =>
  axios
    .post<ICheckTokenSuccessResponse>("check-token", payload)
    .then(({ data }) => data);

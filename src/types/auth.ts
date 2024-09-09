import { AxiosError } from "axios";

/* API Payload & Response */

// Login
export type ILoginPayload = {
  username: string;
  password: string;
};
export type ILoginSuccessResponse = {
  token: string;
};
export type ILoginErrorResponse = AxiosError<string>;

// Check Token
export type ICheckTokenPayload = {
  token: string;
};
export type ICheckTokenSuccessResponse = {
  isValid: boolean;
};
export type ICheckTokenErrorResponse = AxiosError<string>;

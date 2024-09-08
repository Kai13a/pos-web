import { postLogin } from "@api/auth";
import { useMutation } from "@tanstack/react-query";
import {
  ILoginErrorResponse,
  ILoginPayload,
  ILoginSuccessResponse,
} from "@types";

export interface IUsePostLoginProps {
  onSuccess?: (data: ILoginSuccessResponse) => void;
  onError?: (error: ILoginErrorResponse) => void;
}

export const usePostLogin = ({ onSuccess, onError }: IUsePostLoginProps) => {
  const mutation = useMutation({
    mutationKey: ["usePostLogin"],
    mutationFn: (payload: ILoginPayload) => postLogin(payload),
    onSuccess,
    onError,
  });

  return mutation;
};

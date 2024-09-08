import { postCheckToken } from "@api/auth";
import { useMutation } from "@tanstack/react-query";
import {
  ICheckTokenErrorResponse,
  ICheckTokenPayload,
  ICheckTokenSuccessResponse,
} from "@types";

export interface IUsePostCheckTokenProps {
  onSuccess?: (data: ICheckTokenSuccessResponse) => void;
  onError?: (error: ICheckTokenErrorResponse) => void;
}

export const usePostCheckToken = ({
  onSuccess,
  onError,
}: IUsePostCheckTokenProps) => {
  const mutation = useMutation({
    mutationKey: ["usePostCheckToken"],
    mutationFn: (payload: ICheckTokenPayload) => postCheckToken(payload),
    onSuccess,
    onError,
  });

  return mutation;
};

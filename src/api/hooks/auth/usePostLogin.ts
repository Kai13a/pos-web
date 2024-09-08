import { postLogin } from "@api/auth";
import { useMutation } from "@tanstack/react-query";
import { ILoginPayload } from "@types";

export interface IUsePostLoginProps {
  onSuccess?: () => void;
  onError?: () => void;
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

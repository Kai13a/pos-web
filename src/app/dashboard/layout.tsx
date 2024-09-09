"use client";

import { usePostCheckToken } from "@api/hooks";
import { ICheckTokenSuccessResponse } from "@types";
import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  // api callbacks
  const onSuccess = useCallback(
    (data: ICheckTokenSuccessResponse) => {
      if (data.isValid) {
        return;
      }
      router.push("/login");
    },
    [router]
  );
  const onError = useCallback(() => {
    router.push("/login");
  }, [router]);

  const { mutate } = usePostCheckToken({ onSuccess, onError });

  // on first load
  useEffect(() => {
    const token = localStorage.getItem("token");

    // no token
    if (token === null) {
      router.push("/login");
      return;
    }

    // check token
    mutate({
      token,
    });
  }, [mutate, router]);

  return <>{children}</>;
}

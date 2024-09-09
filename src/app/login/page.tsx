"use client";

import { FormProvider, useForm } from "react-hook-form";
import Image from "next/image";
import styles from "./styles.module.scss";
import LogoImage from "@assets/img/amen.jpg";
import { ILoginForm } from "./types";
import { GeneralInput, GlassCard } from "@components";
import { Button } from "@mui/material";
import { useCallback } from "react";
import { usePostLogin } from "@api/hooks";
import { useRouter } from "next/navigation";

const defaultValues: ILoginForm = {
  username: "",
  password: "",
};

export default function Login() {
  const router = useRouter();
  const methods = useForm<ILoginForm>({
    defaultValues,
  });
  const { register, handleSubmit, getValues } = methods;
  const { mutate, isPending } = usePostLogin({
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      router.push("/dashboard");
    },
  });

  const onSubmit = useCallback(() => {
    const data = getValues();
    console.log(data);
    mutate({
      username: data.username,
      password: data.password,
    });
  }, [mutate]);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.center}>
          <Image
            width={500}
            height={500}
            src={LogoImage}
            alt="Logo"
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.center}>
          <GlassCard className={styles.card}>
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <div className={styles.header}>
                  <h1>APPLICATION NAME</h1>
                  <span>Joreb Company is the best company :)</span>
                </div>
                <div className={styles.inputs}>
                  <GeneralInput
                    name="username"
                    placeholder="Username"
                    type="text"
                  />
                  <GeneralInput
                    name="password"
                    placeholder="Password"
                    type="password"
                  />
                </div>
                <div className={styles.actions}>
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={isPending}
                  >
                    Login
                  </Button>
                </div>
              </form>
            </FormProvider>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}

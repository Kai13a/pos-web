import classNames from "classnames";
import { IGeneralInputProps } from "./GeneralInput.types";
import styles from "./styles.module.scss";
import { Input } from "@mui/material";
import { Controller } from "react-hook-form";

export function GeneralInput({
  className,
  name,
  ...props
}: IGeneralInputProps) {
  return (
    <Controller
      name={name ?? ""}
      render={({ field: { ref, value, onChange } }) => (
        <Input
          {...props}
          className={classNames(styles.input, className)}
          value={value}
          onChange={onChange}
        />
      )}
    />
  );
}

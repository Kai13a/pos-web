import styles from "./styles.module.scss";
import { IGlassCardProps } from "./GlassCard.types";
import classNames from "classnames";

export function GlassCard({ className, children }: IGlassCardProps) {
  return (
    <div className={classNames([className, styles.container])}>{children}</div>
  );
}

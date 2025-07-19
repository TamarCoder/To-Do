import styles from "./Button.module.scss";
import { ButtonProps } from "./Button.types";

export default function Button(props: ButtonProps) {
  const variant = props.variant ?? "default";
  const size = props.size ?? "md";

  const buttonClasses = [
    styles.container,
    styles[variant as keyof typeof styles],
    styles[size as keyof typeof styles],
    props.className,
  ];

  if (props.variant) {
    const variantClass = styles[props.variant];
    if (variantClass) {
      buttonClasses.push(variantClass);
    }
  }

  if (props.size) {
    const sizeClass = styles[props.size];
    if (sizeClass) {
      buttonClasses.push(sizeClass);
    }
  }

  return (
    <>
      <button className={buttonClasses.join(" ").trim()}>{props.label}</button>
    </>
  );
}

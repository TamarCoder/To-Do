import styles from "./Button.module.scss";
import { ButtonProps, ButtonSize, ButtonVariant } from "./Button.types";

export default function Button(props: ButtonProps) {
  const variant = props.variant ?? ButtonVariant.default;
  const size = props.size ?? ButtonSize.md;

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

  return (
    <>
      <button className={buttonClasses.join(" ").trim()}>
        {props.label}</button>
    </>
  );
}

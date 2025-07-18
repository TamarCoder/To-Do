"use client";
import { useState } from "react";
import styles from "./icon.module.scss";
import { IconProps } from "./icon.props";
import Image from "next/image";

export default function (props: IconProps) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    setIsActive((prev) => !prev);
    if (props.onClick) {
      props.onClick(e);
    }
  };

  const src = `/icon/${props.name}.svg`;

  return (
    <Image
      src={src}
      alt={`${props.name} icon`}
      width={props.width}
      height={props.height}
      className={styles.container}
    />
  );
}

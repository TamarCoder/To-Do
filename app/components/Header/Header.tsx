"use client";
import { useState } from "react";
import styles from "./Header.module.scss";
import Icon from "../Icon/icon";
import { IconName } from "../Icon/icon.enum";
import { Badge } from "antd";

export default function Header() {
  const [title, setTitle] = useState("Hello 👋, Tamar!");

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerHeading}>
        <h1 className={styles.heading}>{title}</h1>
        <span className={styles.headtingText}>
          let's finish your task today..
        </span>
      </div>

      <div className={styles.headerAlert}>
        <Badge dot>
          <Icon
            name={IconName.notfication}
            alt="notfication"
            width={25}
            height={25}
          />
        </Badge>
      </div>
    </header>
  );
}

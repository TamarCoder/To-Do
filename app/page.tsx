'use client';
import Image from "next/image";
import styles from "./page.module.scss";
import App from "./components/App/App";
import Main from "./components/Main/Main";

export default function Home() {
  return (
    <div className={styles.contentWrapper}>
        <Main/>
    </div>
  );
}

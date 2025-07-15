import Image from "next/image";
import styles from "./page.module.scss";
import App from "./components/App/App";

export default function Home() {
  return (
    <div className={styles.contentWrapper}>
      <App/>
    </div>
  );
}

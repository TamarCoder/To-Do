import Button from "../Button/Button";
import { ButtonSize, ButtonType, ButtonVariant } from "../Button/Button.types";
import styles from "./App.module.scss";

export default function App() {
  return (
    <div className={styles.appContainer}>
      <aside className={styles.aside}>Aside</aside>

      <div className={styles.contentArea}>
        <header className={styles.header}>
            <Button label="Registration" variant={ButtonVariant.success}/>
        </header>
        <main className={styles.main}>Main</main>
      </div>
    </div>
  );
}

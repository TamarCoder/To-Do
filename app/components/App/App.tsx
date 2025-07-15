import Aside from "../aside/Aside";
import Button from "../Button/Button";
import { ButtonSize, ButtonType, ButtonVariant } from "../Button/Button.types";
import Header from "../Header/Header";
import Main from "../Main/Main";
import styles from "./App.module.scss";

export default function App() {
  return (
    <div className={styles.appContainer}>
        <Aside/>
      <div className={styles.contentArea}>
         <Header/>
         <Main/>
      </div>
    </div>
  );
}

import Button from "../../../components/Button/Button";
import styles from "./Task.module.scss";
import { taskProps } from "./task.props";

export default function Task(props: taskProps) {
  return (
    <section className={styles.task}>
      <div className={styles.name}>
        <span className={styles.span}>#</span>
        <p className={styles.text}>{props.text}</p>
      </div>
      <div className={styles.assignace}>
        <p className={styles.text}>{props.autor}</p>
      </div>
      <div className={styles.data}>
        <p className={styles.text}>{props.data}</p>
      </div>
      <div className={styles.time}>
        <Button label="Morning" variant="success" size="md" />
      </div>
      <div className={styles.category}>
        <Button label="Development" variant="warning" size="md" />
      </div>
      <div className={styles.efort}>
        <Button label="Development" variant="info" size="md" />
         
      </div>
    </section>
  );
}

import Task from "./Task/Task";
import styles from "./Tasks.module.scss";

export default function Tasks() {
  return (
    <section className={styles.tasks}>
      <Task
        text="Send out question of the day in Slack"
        autor="Dava Juge"
        data="Today"
        time="Morning"
      />
    </section>
  );
}

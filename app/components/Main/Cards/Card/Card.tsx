import styles from "./Card.module.scss";

type cardProps = {
  span: string;
  h2: string;
  prof: string;
  proges: string;
  progresNumber: string;
  className: string;
};

export default function Card(props: cardProps) {
  const progressBarStyle = {
    width: props.progresNumber,
  };

  const progressClass = `${styles.progressBar} ${styles[props.className]}`;

  return (
    <div className={styles.card}>
      <div className={styles.span}>
        <span>{props.span}</span>
      </div>
      <div className={styles.content}>
        <h2>{props.h2}</h2>
        <p>{props.prof}</p>

        <div className={styles.progress}>
          <div
            className={progressClass}
            style={progressBarStyle}
          ></div>
        </div>

        <div className={styles.progresNumber}>
          <p>{props.proges}</p>
          <p>{props.progresNumber}</p>
        </div>
      </div>
    </div>
  );
}
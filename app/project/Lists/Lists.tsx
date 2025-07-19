import styles from './Lists.module.scss'; 



export  default function Lists () {
    return (
        <section className={styles.lists}>
            <div className={styles.name}>
                <span className={styles.span}>#</span>
                 <h2 className={styles.heading}>Tasks Name</h2>
            </div>
            <div className={styles.assignace}>
                <h2 className={styles.heading}>Assignace</h2>
            </div>
            <div className={styles.data}>
                <h2 className={styles.heading}>Due Data</h2>
            </div>
            <div className={styles.time}>
                <h2 className={styles.heading}>Time Block</h2>
            </div>
            <div className={styles.category}>
                <h2 className={styles.heading}>Task Category</h2>
            </div>
            <div className={styles.efort}>
                <h2 className={styles.heading}>Effort</h2>
            </div>
        </section>
    )
}
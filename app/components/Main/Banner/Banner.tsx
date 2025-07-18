import Button from '../../Button/Button';
import styles from './Banner.module.scss';




export default function () {
    return (

        <section className={styles.bannerContianer}>
             <div className={styles.bannerText}>
                 <h1>Today Task</h1>
                 <span>check your tasks and schedules</span>
                 <Button label="Today's Schedules" variant='primary'/>
             </div>
             <div className={styles.bannerCover}></div>
        </section>
    )
}
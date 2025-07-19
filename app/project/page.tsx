import Goals from './Goals/Goals';
import Lists from './Lists/Lists';
import Meetings from './Meetings/Meetings';
import styles from './page.module.scss'
import Tasks from './Tasks/Tasks';

export default function ProjectPage() {
  return (
    <div className={styles.container}>
         <Lists/>
         <Tasks/>
         <Meetings/>
         <Goals/>
    </div>
  );
}
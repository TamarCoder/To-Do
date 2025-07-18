import Card from './Card/Card';
import styles from './Cards.module.scss';



export  default function () {
    return (
        <div className={styles.cardsContainer}>
            <Card span='jul 20 2025'  h2='Web Dashboard' prof='Desing'  proges='Progress' progresNumber={'90%'} className='progressSucsess' />
            <Card span='jul 30 2025'  h2='Mobile App' prof='Coding'  proges='Progress' progresNumber={'80%'}  className='progressWarning'/>
            <Card span='aug 01 2025'  h2='Animation' prof='Desing'  proges='Progress' progresNumber={'70%'} className='info' />
            <Card span='aug 30 2025'  h2='3D Desing' prof='Desing'  proges='Progress' progresNumber={'40%'}  className='error'/>
        </div>
    )
}
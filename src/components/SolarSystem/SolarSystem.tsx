import styles from './solarSystem.module.scss'
export const SolarSystemComponent = () => {
    return (<div className={styles['container']}>
        <div className={styles['sun']}></div>
        <div className={styles['earth']}>
            <div className={styles['moon']}></div>
        </div>
        <div className={styles['mars']}></div>
    </div>)
}
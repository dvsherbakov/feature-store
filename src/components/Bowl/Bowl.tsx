import React from 'react'
import styles from './bowl.module.scss'

export const Bowl = () => {
  return (
    <section className={styles['wrapper']}>
      <div className={styles['shadow']}></div>
      <div className={styles['bowl']}>
        <div className={styles['liquid']}></div>
      </div>
    </section>
  )
}

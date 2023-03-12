import React from 'react'
import { idStyle } from '../common'
import styles from './pineAnimation.module.scss'

export const PineAnimation = () => {
  return (
    <div className={styles['pine']}>
      <div className={styles['box']} style={idStyle(1)}></div>
      <div className={styles['box']} style={idStyle(3)}></div>
      <div className={styles['box']} style={idStyle(2)}></div>
      <div className={styles['box']} style={idStyle(4)}></div>
    </div>
  )
}

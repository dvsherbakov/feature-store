import React from 'react'
import styles from './water.module.scss'
import { TWaterContentProps } from './types'

export const WaterContainer = ({ text }: TWaterContentProps) => {
  return (
    <main className={styles['water']}>
      <h2>{text}</h2>
      <h2>{text}</h2>
    </main>
  )
}

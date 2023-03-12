import React from 'react'
import { idStyle } from '../common'
import styles from './glowCube.module.scss'

export const GlowCube = () => {
  return (
    <div className={styles['wrapper']}>
      <section>
        <div className={styles['box']}>
          <div className={styles['cube']}>
            <div className={styles['top']}></div>
            <div>
              <span style={idStyle(0)}></span>
              <span style={idStyle(1)}></span>
              <span style={idStyle(2)}></span>
              <span style={idStyle(3)}></span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

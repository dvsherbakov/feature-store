import React, { useMemo } from 'react'
import styles from './pixels.module.scss'

export const PixelsLoader = () => {
  const list = useMemo(() => {
    return (
      <ul>
        {Array.from(Array(5).keys()).map(itm => (
          <li key={itm.toString()}></li>
        ))}
      </ul>
    )
  }, [])

  return <div className={styles['pixels']}>{list}</div>
}

import React, { useMemo } from 'react'
import styles from './keyboard.module.scss'

type ComponentProps = {
  onKeyPress?: (sym: string) => void,
}

const Keyboard = ({
  onKeyPress = s => {
    console.log(s)
  },
}: ComponentProps) => {
  const rows = useMemo<JSX.Element[]>(
    () =>
      ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'].map((row, idx) => (
        <div key={`row_${idx}`}>
          {row.split('').map(btn => (
            <span
              key={`key_${btn}`}
              onClick={() => {
                onKeyPress(btn)
              }}
            >
              <i>{btn}</i>
            </span>
          ))}
        </div>
      )),
    [onKeyPress]
  )

  return <div className={styles['keyboard']}>{rows}</div>
}

export default Keyboard

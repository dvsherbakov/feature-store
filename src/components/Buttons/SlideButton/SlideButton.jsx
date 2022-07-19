import React from 'react'
import styles from './slideButton.module.scss'

const SlideButton = ({title}) => {
    return (<div className={styles['button']}>
        <a href="/" onClick={() => {
        }}>
            <span>{title}</span>
        </a>
    </div>)
}

export default SlideButton
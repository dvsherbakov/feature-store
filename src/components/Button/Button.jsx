import React from 'react'
import styles from './button.module.scss'

 const Button = ({title}) => {
    return (<div className={styles['button']}>
        <a href={"/"}  onClick={()=>{}}>
            <span>{title}</span>
        </a>
    </div>)
}

export default Button
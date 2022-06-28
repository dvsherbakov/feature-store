import React from 'react';
import styles from './loginform.module.scss'

export const LoginForm = () => {
    return (
        <div className={styles['loginForm']}>
            <div className={styles['inputBox']}>
                <input type={'text'} required={true}/>
                <span>First name</span>
            </div>
            <div className={styles['inputBox']}>
                <input type={'text'} required={true}/>
                <span>Last Name</span>
            </div>
        </div>
    );
};


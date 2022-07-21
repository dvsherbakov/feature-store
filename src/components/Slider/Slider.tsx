import React, {useState} from 'react';
import styles from './slider.module.scss'
import {usePictures} from "../../hooks/usePictures";
import {CirclesLoader} from "../Loaders";

export const Slider = () => {
    const pictures = usePictures(5)
    const [position, setPosition] = useState<number>(0)
    const handleLeft = () => {
        if (position > 0) setPosition(pos => --pos)
    }
    const handleRight = () => {
        if (position < pictures.length - 1) setPosition(pos => ++pos)
    }
    return (<div className={styles['slider']}>
        {!pictures.length && <CirclesLoader/>}
        {!!pictures?.length && (<div className={styles['viewport']}>
            <img src={URL.createObjectURL(pictures[position])} alt=''/>
            <button className={styles['left']} onClick={handleLeft}>{'<'}</button>
            <button className={styles['right']} onClick={handleRight}>{'>'}</button>
        </div>)}
    </div>);
};

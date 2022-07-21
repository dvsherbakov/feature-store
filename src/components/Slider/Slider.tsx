import React from 'react';
import styles from './slider.module.scss'
import {usePictures} from "../../hooks/usePictures";
import {CirclesLoader} from "../Loaders";

export const Slider = () => {
    const pictures = usePictures(8)
    return (
        <div className={styles['slider']}>
            {!pictures.length && <CirclesLoader/>}
            {!!pictures?.length && pictures.map((p, idx) => !!p ?
                <img key={idx.toString()} src={URL.createObjectURL(p)} alt=''/> : <></>)}
        </div>
    );
};

import React, {useCallback, useEffect, useState} from 'react';
import styles from './loginform.module.scss'
import {GlowingButton} from "../../Buttons";
import {useCoordinates} from "../../../hooks/useCoordinates";
import {TCoordinates} from "../../../hooks/types";
import {useResolveAddress} from "../../../hooks/useResolveAddress";


export const LoginForm = () => {
    const coordinates = useCoordinates()
    const [cValue, setCValue] = useState<TCoordinates | null>(null)
    const address = useResolveAddress();

    const {lat, lng} = cValue ? cValue : {lat: null, lng: null};

    useEffect(() => {
        (async () => {
            if (lat && lng) {
                const adr = await address(lat, lng)
                console.log(adr?.data.filter(x => (!!x.number && !!x.street && !!x.country && !!x.region)).map(y => ({
                    street: y.street, number: y.number, country: y.country, region: y.region
                })))
            }
        })()
    }, [lat, lng, address])

    const buttonHandle = useCallback(async () => {
        const cords = await coordinates()
        if (lng !== cords?.lng || lat !== cords?.lat) setCValue(cords)
    }, [coordinates, lat, lng])

    return (<div className={styles['loginForm']}>
        <div className={styles['inputBox']}>
            <input type={'text'} required={true}/>
            <span>First name</span>
        </div>
        <div className={styles['inputBox']}>
            <input type={'text'} required={true}/>
            <span>Last Name</span>
        </div>
        <GlowingButton title={'location'} color={'#0f3c4a'} key='LocationButton' onClick={buttonHandle}/>
    </div>);
};


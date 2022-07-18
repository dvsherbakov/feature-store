import React, {useCallback, useEffect, useRef, useState} from 'react';
import {GlowingButton} from "../../Buttons";
import {useCoordinates} from "../../../hooks/useCoordinates";
import {useResolveAddress} from "../../../hooks/useResolveAddress";
import {TCoordinates} from "../../../hooks/types";
import {TShortAddress} from "./types";

import styles from './loginform.module.scss'
import {LocationsList} from "./LocationsList";

export const LoginForm = () => {
    const locationRef = useRef<HTMLInputElement | null>(null)
    const [cValue, setCValue] = useState<TCoordinates | null>(null)
    const [addresses, setAddresses] = useState<TShortAddress[]>([])
    const coordinates = useCoordinates()
    const address = useResolveAddress();

    const {lat, lng} = cValue ? cValue : {lat: null, lng: null};

    useEffect(() => {
        (async () => {
            if (lat && lng) {
                const adr = await address(lat, lng)
                setAddresses(adr?.data.filter(x => (!!x.number && !!x.street && !!x.country && !!x.region)).map((y, idx) => ({
                    id: idx, street: y.street, number: y.number, country: y.country, region: y.region, label: y.label
                } as TShortAddress)) ?? [])
            }
        })()
    }, [lat, lng, address])

    const buttonHandle = useCallback(async () => {
        const cords = await coordinates()
        if (lng !== cords?.lng || lat !== cords?.lat) setCValue(cords)
    }, [coordinates, lat, lng])

    const selectLocationHandle = useCallback((adr: string) => {
            if (locationRef && locationRef.current) {
                locationRef.current.value = adr
                setAddresses([])
                setCValue(null)
            }
        },
        [])

    return (<div className={styles['loginForm']}>
        <div className={styles['inputBox']}>
            <input type={'text'} required={true}/>
            <span>First name</span>
        </div>
        <div className={styles['inputBox']}>
            <input type={'text'} required={true}/>
            <span>Last Name</span>
        </div>
        <div className={styles['inputBox']}>
            <input type={'text'} required={true} ref={locationRef}/>
            <span>Location</span>
        </div>
        {!!addresses?.length && <LocationsList list={addresses} onSelect={selectLocationHandle}/>}
        <GlowingButton title={'get location'} color={'#0f3c4a'} key='LocationButton' onClick={buttonHandle}/>
    </div>);
};


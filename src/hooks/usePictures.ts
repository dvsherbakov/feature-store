import {useEffect, useState} from "react";
import {TImageResult} from "./types";
import {getImage} from "../api/getImage";

export function usePictures(count: number = 5) {
    const [storage, setStorage] = useState<TImageResult[]>([])

    useEffect(() => {
        const fillImages = async () => {
            const imagePromises = Array.from(Array(count), () => getImage(5))
            return await Promise.all(imagePromises)
        }
        fillImages().then(images => setStorage(images.filter(x => x !== null).map(b => b as Blob)))
    }, [count])

    return storage
}
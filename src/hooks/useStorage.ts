import {useCallback, useState, SetStateAction} from 'react'

export function useStorage<T = any>(startValue: T) {
    const [value, setValue] = useState<T>(startValue)
    const setter = useCallback((val: SetStateAction<T>): void => {
        setValue(val);
    }, [])

    return [value, setter] as const
}
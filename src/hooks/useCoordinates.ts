import {useCallback} from "react";
import {TCoordinates} from "./types";

export function useCoordinates() {
    return useCallback(async () => {
        return new Promise<TCoordinates | null>((resolve) => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    if (!position || !position.coords) {
                        resolve(null);
                        return;
                    }

                    resolve({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    });
                },
                () => resolve(null)
            );
        });
    }, []);
}
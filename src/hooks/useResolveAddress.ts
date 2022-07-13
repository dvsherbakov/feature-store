import axios from "axios";
import {useCallback} from "react";
import {TAddressQuery} from "./types";

export const useResolveAddress = () =>
    useCallback(async (lat: number, lng: number): Promise<TAddressQuery | null> => {
        try {
            const {data} = await axios.get(
                "http://api.positionstack.com/v1/reverse",
                {
                    params: {
                        query: `${lat}, ${lng}`,
                        access_key: process.env.REACT_APP_GEO_API_KEY || "",
                        limit: 5
                    },
                }
            );

            return data;
        } catch (error) {
            return null;
        }
    }, []);
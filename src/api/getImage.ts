import {resolutions} from "./types";

export const getImage = async (size: number = 5) => {
    //const res = await fetch(`https://bing.ioliu.cn/v1/rand?w=800&h=600`, {method: "GET"})
    const res = await fetch(`https://unsplash.it/${resolutions[size]}?random`, {method: "GET"})
    if (res.status === 200) {
        return await res.blob()
    } else return null
}
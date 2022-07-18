export type TCoordinates = {
    lat: number
    lng: number
}

export type TAddress = {
    continent: string
    country: string
    country_code: string
    county: string
    distance: number
    label: string
    latitude: number
    locality: string
    longitude: number
    name: string
    number: string | number
    region: string
    region_code: string
    street: string
    type: "venue" | "address"
}

export type TAddressQuery = {
    data: TAddress[]
}
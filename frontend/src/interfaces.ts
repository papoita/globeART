export interface Coordinates {
  lat?: number | null,
  lon?: number | null,
}
export interface Error {
  code: string,
  message: string
}

export interface Item {
  price: string;
  itemId: number;
  seller: string;
  collection: string;
  sold: boolean;
  name?: string;
  country?: string;
  image?: string;
  tokenID?: number;
}

export interface Location {
  allowLocation: boolean,
  coordinates?: Coordinates,
  city?: string,
  country?: string,
  error?: Error,
}

export interface Marker {
  price: string;
  itemId: number;
  seller: string;
  collection: string;
  sold: boolean;
  name?: string;
  country?: string;
  image?: string;
  lat?: number;
  lng?: number;
  color?: string;
}

export interface PurchasedItem {
    price: string;
    itemId: number,
    name: string,
    description: string,
    image: string,
}

export interface Ref {
  current: any
}

export interface UserLocation {
  coordinates?: Coordinates
}
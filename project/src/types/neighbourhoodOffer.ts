import {OfferType} from '../consts';
import {Reviews} from '../mocks/reviews';
import {City, Host} from './offer';

export type NeighbourhoodOffer ={
  id: number,
  location: {
    latitude:number,
    longitude:number,
    zoom: number,
  },
  city: City,
  previewImage: string,
  photos: Array<string>,
  isPremium: boolean,
  price: number,
  title: string,
  description: string,
  type: OfferType,
  isFavorite: boolean,
  rating: number
  bedrooms: number,
  maxAdults: number
  goods: Array<string>,
  host: Host,
};
export type NeighbourhoodOffers = NeighbourhoodOffer[];

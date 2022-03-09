import {OfferType} from '../consts';
import {Reviews} from './reviews';

export type Host = {
  avatar: string,
  name: string,
  isPro: boolean,
}

export type Offer ={
  id: number,
  photo: string,
  isPremuim: boolean,
  price: number,
  header: string,
  description: string,
  type: OfferType,
  isFavorite: boolean,
  rating: number
  bedroomsNumber: number,
  maximumGuests: number
  amenities: Array<string>,
  host: Host,
  reviews: Reviews,
};
export type Offers = Offer[];

import {Offer} from './types/offer';
import {AuthorizationStatus} from './consts';

export const sortPriceToHigh = (prev: Offer, next: Offer) => prev.price - next.price;
export const sortPriceToLow = (prev: Offer, next: Offer) => next.price - prev.price;
export const sortRatingToHigh = (prev: Offer, next: Offer) => next.rating - prev.rating;

export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

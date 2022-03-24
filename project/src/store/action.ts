import {createAction} from '@reduxjs/toolkit';
import {City, Offers} from '../mocks/offer';

export const changeCity = createAction('changeCity', (value: City) => ({
  payload: value
}));

export const fillOffersList = createAction('fillOffersList', (value: Offers) => ({
  payload: value,
}));

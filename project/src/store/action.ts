import {createAction} from '@reduxjs/toolkit';
import {Offers} from '../mocks/offer';
import {CityName} from '../consts';

export const changeCity = createAction('changeCity', (value: CityName) => ({
  payload: value
}));

export const fillOffersList = createAction('fillOffersList', (value: Offers) => ({
  payload: value,
}));

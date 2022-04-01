import {createAction} from '@reduxjs/toolkit';
import {City, Offers} from '../mocks/offer';
import {SortTypes} from '../consts';

export const changeCity = createAction('changeCity', (value: City) => ({
  payload: value,
}));

export const fillOffersList = createAction('fillOffersList', (value: Offers) => ({
  payload: value,
}));

export const changeSortType = createAction('changeSortType', (value: SortTypes) => ({
  payload: value,
}));

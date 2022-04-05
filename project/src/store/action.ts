import {createAction} from '@reduxjs/toolkit';
import {City, Offers} from '../types/offer';
import {AuthorizationStatus, SortTypes} from '../consts';

export const changeCity = createAction('changeCity', (value: City) => ({
  payload: value,
}));

export const fillOffersList = createAction('fillOffersList', (value: Offers) => ({
  payload: value,
}));

export const changeSortType = createAction('changeSortType', (value: SortTypes) => ({
  payload: value,
}));

export const loadOffers = createAction<Offers>('loadOffers');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

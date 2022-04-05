import {createReducer} from '@reduxjs/toolkit';
import {AuthorizationStatus, Cities, SortTypes} from '../consts';
import {
  changeCity,
  changeSortType,
  fillOffersList,
  loadOffers,
  requireAuthorization, setError
} from './action';
import {City, Offers} from '../types/offer';

type InitialState ={
  cities: City[],
  currentCity: City,
  offers: Offers,
  currentSortType: SortTypes,
  authorizationStatus: AuthorizationStatus,
  error: string,
}

const initialState: InitialState = {
  cities: Cities,
  currentCity:  Cities[0],
  offers: [],
  currentSortType: SortTypes.Popular,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: '',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(fillOffersList, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeSortType, (state, action) => {
      state.currentSortType = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};

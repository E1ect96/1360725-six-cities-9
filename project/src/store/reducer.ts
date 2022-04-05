import {createReducer} from '@reduxjs/toolkit';
import {AuthorizationStatus, Cities, SortTypes} from '../consts';
import {offers as offerItems} from '../mocks/offers';
import {
  changeCity,
  changeSortType,
  fillOffersList,
  loadOffers, requireAuthorization,
} from './action';

const initialState = {
  Cities,
  currentCity:  Cities[0],
  offers: offerItems,
  currentSortType: SortTypes.Popular,
  authorizationStatus: AuthorizationStatus.Unknown,
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
});

export {reducer};

import {createReducer} from '@reduxjs/toolkit';
import {CityName} from '../consts';
import {offers} from '../mocks/offers';
import {changeCity, fillOffersList} from './action';

const initialState = {
  currentCity: CityName.Amsterdam,
  offers: offers,
}

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(fillOffersList, (state, action) => {
      state.offers = action.payload;
    });
});

export {reducer};

import {Cities, NameSpace, SortTypes} from '../../consts';
import {createSlice} from '@reduxjs/toolkit';
import {City, Offer, Offers} from '../../types/offer';
import {Review} from '../../types/review';

type InitialStateType = {
  cities: City[];
  currentCity: City;
  offers: Offers;
  currentOffer: Offer | null;
  currentOffersNearby: Offer[];
  currentOfferComments: Review[];
  currentSortType: SortTypes;
  favoriteOffers: Offer[];
  isDataLoaded: boolean;
  reviews: Review[];
};

const initialState: InitialStateType = {
  cities: Cities,
  currentCity: Cities[0],
  offers: [],
  currentOffer: null,
  currentOffersNearby: [],
  currentOfferComments: [],
  currentSortType: SortTypes.Popular,
  favoriteOffers: [],
  isDataLoaded: false,
  reviews: [],
};

export const offersData = createSlice({
  name: NameSpace.data,
  initialState,
  reducers: {
    setCity: (state, action) => {
      if (state.currentCity.name !== action.payload.name) {
        state.currentCity = action.payload;
      }
    },
    changeSortType: (state, action) => {
      state.currentSortType = action.payload;
    },
    loadOffers: (state, action) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
    },
    loadCurrentOffer: (state, action) => {
      state.currentOffer = action.payload;
    },
    loadCurrentOffersNearby: (state, action) => {
      state.currentOffersNearby = action.payload;
    },
    loadCurrentOfferComments: (state, action) => {
      state.currentOfferComments = action.payload;
    },
    loadFavoriteOffers: (state, action) => {
      state.favoriteOffers = action.payload;
    },
    setNewReview: (state, action) => {
      state.reviews = action.payload;
    },
  },
});

export const {setCity, changeSortType, loadOffers, loadCurrentOffer, loadCurrentOfferComments, loadCurrentOffersNearby, loadFavoriteOffers, setNewReview } = offersData.actions;

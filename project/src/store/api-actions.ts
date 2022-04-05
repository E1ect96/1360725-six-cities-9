import {api, store} from './index';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {loadOffers, requireAuthorization} from './action';
import {Offers} from '../types/offer';
import {APIRoute, AuthorizationStatus} from '../consts';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import {dropToken, saveToken} from '../services/token';

export const fetchOffersAction = createAsyncThunk(
  'data/fetchOffers',
  async () => {
    const {data} = await api.get<Offers>(APIRoute.Hotels);
    store.dispatch(loadOffers(data));
  },
);

export const checkAuthAction = createAsyncThunk(
  'user/checkAuth',
  async () => {
    await api.get(APIRoute.Login);
    store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
  },
);

export const loginAction = createAsyncThunk(
  'user/login',
  async ({login: email, password}: AuthData) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
  },
);

export const logoutAction = createAsyncThunk(
  'user/logout',
  async () => {
    await api.delete(APIRoute.Logout);
    dropToken();
    store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);

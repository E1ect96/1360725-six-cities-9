import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../consts';
import {userProcess} from './user-process/user-process';
import {offersData} from './offers-data/offers-data';

export const rootReducer = combineReducers({
  [NameSpace.data]: offersData.reducer,
  [NameSpace.user]: userProcess.reducer,
});

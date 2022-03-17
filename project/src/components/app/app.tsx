import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../consts';
import Main from '../main/main';
import PrivateRoute from '../private-route/private-route';
import Favorites from '../favorites/favorites';
import Login from '../login/login';
import Room from '../room/room';
import PageNotFound from '../page-not-found/page-not-found';
import {Offers} from '../../mocks/offer';

type AppProps = {
  offers: Offers;
}

function App({offers}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path = {AppRoute.Main}
          element={<Main offers={offers} />}
        />
        <Route
          path={ AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <Favorites offers={offers} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Room}
          element={<Room offer ={offers[0]}/>}
        />
        <Route
          path="*"
          element={<PageNotFound/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

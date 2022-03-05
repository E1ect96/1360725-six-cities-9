import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute} from '../../consts';
import Main from '../main/main';
import Favorites from '../favorites/favorites';
import Login from '../login/login';
import Room from '../room/room';
import PageNotFound from '../page-not-found/page-not-found';

type AppProps = {
  placesCount: number;
}

function App({placesCount}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path = {AppRoute.Main}
          element={<Main placesCount={placesCount} />}
        />
        <Route
          path={ AppRoute.Favorites}
          element={<Favorites/>}
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Room}
          element={<Room/>}
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

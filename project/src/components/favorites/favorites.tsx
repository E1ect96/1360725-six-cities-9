import Header from '../header/header';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getFavoriteOffers} from '../../store/offers-data/selectors';
import {useEffect} from 'react';
import {store} from '../../store';
import {fetchFavoriteOffers} from '../../store/api-actions';
import EmptyFavoriteList from '../favorites-list/empty-favorite-list';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../consts';
import FavoriteCardList from '../favorite-card-list/favorite-card-list';

function Favorites():JSX.Element {
  const favorites = useAppSelector (getFavoriteOffers);
  const dispatch = useAppDispatch();

  useEffect(() => {
    store.dispatch(fetchFavoriteOffers());
  }, [dispatch]);

  return (
    <div className="page">
      <Header />
      <main className={`page__main page__main--favorites ${favorites ? '' : 'page__main--favorites-empty'}`}>
        <div className="page__favorites-container container">
          {
            favorites.length === 0 ? <EmptyFavoriteList /> : <FavoriteCardList favoritesOffers={favorites} />
          }
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link"
          to={AppRoute.Main}
        >
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </Link>
      </footer>
    </div>
  );
}

export default Favorites;

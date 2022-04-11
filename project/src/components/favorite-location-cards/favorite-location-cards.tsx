import {Link} from 'react-router-dom';
import {AppRoute} from '../../consts';
import {Offers} from '../../types/offer';
import FavoritesCard from '../favorites-card/favorites-card';

type FavoriteLocationProps = {
  locationOffers: Offers,
  city: string;
}

function FavoriteLocationCards({ locationOffers, city }: FavoriteLocationProps): JSX.Element {

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={AppRoute.Main} >
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {locationOffers.map((offer) => {
          const key = `${offer.id}`;
          return <FavoritesCard key={key} favoriteOffer={offer}/>;
        })}
      </div>
    </li>
  );
}

export default FavoriteLocationCards;

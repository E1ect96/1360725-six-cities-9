import {Offers} from '../../types/offer';
import FavoriteLocationCards from '../favorite-location-cards/favorite-location-cards';

type FavoriteCardListProps = {
  favoritesOffers: Offers;
}

const mapOffersToCity = (favoriteOffers: Offers) =>
  favoriteOffers.reduce<{ [key: string]: Offers }>((favorites, offer) => {
    if (!favorites[offer.city.name]) {
      favorites[offer.city.name] = [];
    }

    favorites[offer.city.name].push(offer);
    return favorites;
  }, {});

function FavoriteCardList ({favoritesOffers}:FavoriteCardListProps): JSX.Element {
  const favoriteOffersByCities = mapOffersToCity(favoritesOffers);

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {Object.keys(favoriteOffersByCities).map((city) => (
          <FavoriteLocationCards
            key={city}
            city={city}
            locationOffers={favoriteOffersByCities[city]}
          />
        ))}
      </ul>
    </section>
  );
}

export default FavoriteCardList;

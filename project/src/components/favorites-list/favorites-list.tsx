import FavoritesCard from '../favorites-card/favorites-card';
import {Offer} from '../../types/offer';

type FavoritesProps ={
  favoriteOffers: Offer[];
}

function FavoritesList({favoriteOffers}:FavoritesProps):JSX.Element {
  return (
    <div className="favorites__places">
      {favoriteOffers.map((offer) => (
        <FavoritesCard
          key={offer.id}
          offer={offer}
        />
      ))}
    </div>
  );
}

export default FavoritesList;

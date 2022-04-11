import FavoritesCard from '../favorites-card/favorites-card';
import {Favorite} from '../../types/favorite';

type FavoritesProps ={
  favoriteOffers: Favorite[];
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

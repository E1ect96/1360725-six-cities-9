import FavoritesCard from '../favorites-card/favorites-card';
import {Offers} from '../../mocks/offer';

type FavoritesProps ={
  offers: Offers;
}

function FavoritesList({offers}:FavoritesProps):JSX.Element {
  return (
    <div className="favorites__places">
      {offers.map((offer) => (
        <FavoritesCard
          key={offer.id}
          offer={offer}
        />
      ))}
    </div>
  );
}

export default FavoritesList;

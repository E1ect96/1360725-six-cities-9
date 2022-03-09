import PlaceCard from '../place-card/place-card';
import {offers} from '../../mocks/offers';

function OffersList():JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <PlaceCard key = {offer.id} offer={offer} />)}
    </div>
  );
}

export default OffersList;

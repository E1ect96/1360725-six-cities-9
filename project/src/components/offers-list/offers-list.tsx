import PlaceCard from '../place-card/place-card';
import {Offers} from '../../types/offer';
import {NeighbourhoodOffers} from '../../types/neighbourhoodOffer';

type PropsType = {
  offers: Offers | NeighbourhoodOffers;
  onListItemHover: (listItemName: string) => void;
}

function OffersList({offers, onListItemHover}: PropsType):JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          key = {offer.id}
          offer={offer}
          onListItemHover={onListItemHover}
        />))}
    </div>
  );
}

export default OffersList;

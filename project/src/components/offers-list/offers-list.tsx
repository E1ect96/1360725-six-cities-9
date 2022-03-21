import PlaceCard from '../place-card/place-card';
import {Offers} from '../../mocks/offer';

type PropsType = {
  offers: Offers;
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

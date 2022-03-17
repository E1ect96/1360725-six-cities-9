import PlaceCard from '../place-card/place-card';
import {offers} from '../../mocks/offers';
import {useState} from 'react';

function OffersList():JSX.Element {
  const [activeCard, setActiveCard] = useState(0);
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          key = {offer.id}
          offer={offer}
          onActiveCard={(value) => {
            setActiveCard(value);
          }}
          activeCard = {activeCard}
        />))}
    </div>
  );
}

export default OffersList;

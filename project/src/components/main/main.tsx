import Locations from '../locations/locations';
import Map from '../map/map';
import Header from '../header/header';
import {Offer, Offers} from '../../mocks/offer';
import OffersList from '../offers-list/offers-list';
import {useState} from 'react';
import {MAP_HEIGHT} from '../../consts';


type MainProps = {
  offers: Offers;
}

function Main({offers}: MainProps): JSX.Element {
  const city = offers[0].city;

  const [activeCard, setActiveCard] = useState< Offer | undefined>(
    undefined,
  );

  const onListItemHover = (id: string) => {
    const currentOffer = offers.find((offer) => String(offer.id) === id);
    setActiveCard(currentOffer);
  };

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <Locations/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width={7} height={4}>
                    <use xlinkHref="#icon-arrow-select" />
                  </svg>
                </span>
              </form>
              <OffersList offers={offers} onListItemHover={onListItemHover}/>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                {
                  <Map
                    city={city}
                    offers={offers}
                    activeCard={activeCard}
                    height={MAP_HEIGHT}
                  />
                }
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;

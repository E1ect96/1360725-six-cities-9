import Locations from '../locations/locations';
import Map from '../map/map';
import Header from '../header/header';
import {Offer, Offers} from '../../mocks/offer';
import OffersList from '../offers-list/offers-list';
import {useState} from 'react';
import {useAppSelector} from '../../hooks';
import {SortTypes} from '../../consts';
import {sortPriceToHigh, sortPriceToLow, sortRatingToHigh} from '../../utils';
import Sort from '../sort/sort';


type MainProps = {
  offers: Offers;
}

function Main({offers}: MainProps): JSX.Element {
  const {currentCity, currentSortType} = useAppSelector((state) => state);
  const [activeCard, setActiveCard] = useState< Offer | null>(
    null,
  );

  const onListItemHover = (id: string) => {
    const currentOffer = offers.find((offer) => String(offer.id) === id);
    setActiveCard(currentOffer ?? null);
  };

  switch (currentSortType) {
    case SortTypes.PriceLowToHigh:
      offers.sort(sortPriceToHigh);
      break;
    case SortTypes.PriceHighToLow:
      offers.sort(sortPriceToLow);
      break;
    case SortTypes.RatingLowToHigh:
      offers.sort(sortRatingToHigh);
      break;
    case SortTypes.Popular:
      break;
    default:
      offers = offers.filter((offer) => offer.city.name === currentCity.name);
  }

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
              <b className="places__found">{offers.length} places to stay in {currentCity.name}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by </span>
                <Sort />
              </form>
              <OffersList offers={offers} onListItemHover={onListItemHover}/>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                {
                  <Map
                    key={JSON.stringify(currentCity.location.lng + currentCity.location.lat)}
                    city={currentCity}
                    offers={offers}
                    activeCard={activeCard}
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

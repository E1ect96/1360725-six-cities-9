import Locations from '../locations/locations';
import Map from '../map/map';
import Header from '../header/header';
import {Offer} from '../../types/offer';
import OffersList from '../offers-list/offers-list';
import {useState} from 'react';
import {useAppSelector} from '../../hooks';
import {MAP_HEIGHT} from '../../consts';
import Sort from '../sort/sort';
import {getCurrentCity, getLoadedDataStatus, getSortedOffers} from '../../store/offers-data/selectors';
import LoadingScreen from '../loading-screen/loading-screen';
import MainEmpty from '../main-empty/main-empty';

function Main(): JSX.Element {
  const [selectedPoint, setSelectedPoint] = useState<Offer | null>(null);
  const onPlaceCardHover = (offer: Offer | null) => {
    setSelectedPoint(offer);
  };

  const currentCity = useAppSelector(getCurrentCity);
  const isDataLoaded = useAppSelector(getLoadedDataStatus);
  const sortedOffers = useAppSelector(getSortedOffers);
  return (
    <div className="page page--gray page--main">
      <Header />
      {!isDataLoaded ? <LoadingScreen /> :
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <Locations/>
            </section>
          </div>
          <div className="cities">
            {sortedOffers.length > 0 ?
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{sortedOffers.length} places to stay in {currentCity.name}</b>
                  <form className="places__sorting" action="#" method="get">
                    <span className="places__sorting-caption">Sort by </span>
                    <Sort />
                  </form>
                  <OffersList className="cities__places-list places__list tabs__content" offers={sortedOffers} onPlaceCardHover={onPlaceCardHover}/>
                </section>
                <div className="cities__right-section">
                  <Map
                    className='cities__map map'
                    city={currentCity}
                    currentOffers={sortedOffers}
                    selectedPoint={selectedPoint}
                    height={Number(MAP_HEIGHT)}
                  />
                </div>
              </div> :
              <MainEmpty city={currentCity} />}
          </div>
        </main> }
    </div>
  );
}

export default Main;

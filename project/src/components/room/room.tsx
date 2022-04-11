import Header from '../header/header';
import OffersList from '../offers-list/offers-list';
import {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {
  getCurrentOffer,
  getCurrentOfferComments,
  getCurrentOffersNearby, getFavoriteOffers,
  getLoadedDataStatus
} from '../../store/offers-data/selectors';
import {useParams} from 'react-router-dom';
import {store} from '../../store';
import {fetchCurrentOffer, fetchCurrentOfferComments, fetchNearbyOffersAction} from '../../store/api-actions';
import PageNotFound from '../page-not-found/page-not-found';
import PlaceProperty from '../place-property/place-property';
import {Offer} from '../../types/offer';
import LoadingScreen from '../loading-screen/loading-screen';

function Room():JSX.Element {
  const dispatch = useAppDispatch();

  const [, setSelectedPoint] = useState<Offer | null>(null);

  const onPlaceCardHover = (offer: Offer | null) => {
    setSelectedPoint(offer);
  };

  const favorites = useAppSelector(getFavoriteOffers);
  const currentOffer = useAppSelector(getCurrentOffer);
  const reviews = useAppSelector(getCurrentOfferComments);
  const nearbyOffers = useAppSelector(getCurrentOffersNearby);
  const isDataLoaded = useAppSelector(getLoadedDataStatus);

  const {id} = useParams<{id: string}>();

  useEffect(() => {
    store.dispatch(fetchCurrentOffer(Number(id)));
    store.dispatch(fetchCurrentOfferComments(Number(id)));
    store.dispatch(fetchNearbyOffersAction(Number(id)));

  }, [dispatch, id, favorites, isDataLoaded]);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  if (!currentOffer) {
    return <PageNotFound />;
  }

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        {currentOffer !==null && (
          <>
            <PlaceProperty currentOffer={currentOffer}  reviews={reviews} nearbyOffers={nearbyOffers}/>
            <div className="container">
              <section className="near-places places">
                <h2 className="near-places__title">Other places in the neighbourhood</h2>
                <OffersList className="near-places__list places__list" offers={nearbyOffers} onPlaceCardHover={onPlaceCardHover} />
              </section>
            </div>
          </>
        )}
      </main>

    </div>
  );
}

export default Room;

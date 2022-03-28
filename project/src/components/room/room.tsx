import Header from '../header/header';
import {Offer} from '../../mocks/offer';
import CommentForm from '../comment-form/comment-form';
import OffersList from '../offers-list/offers-list';
import {neighbourhoodOffers, offers} from '../../mocks/offers';
import {useState} from 'react';
import {PROPERTY_MAP_HEIGHT} from '../../consts';
import Map from '../map/map';
import CommentsList from '../comments-list/comments-list';

type RoomProps = {
  openOffer: Offer;
}

function Room({openOffer}: RoomProps):JSX.Element {
  const {photos, isPremuim, price, header, description, type, isFavorite, rating, bedroomsNumber, maximumGuests, amenities, host, reviews} = openOffer;
  const {name, isPro, avatar} = host;
  const favoriteClassName = `property__bookmark-button${isFavorite ? isFavorite && ' property__bookmark-button--active button' : ' button'}`;

  const city = offers[0].city;

  const [activeCard, setActiveCard] = useState < Offer | undefined>(
    undefined,
  );

  const onListItemHover = (id: string) => {
    const currentOffer = offers.find((offer) => String(offer.id) === id);
    setActiveCard(currentOffer);
  };

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {photos.slice(0, 6).map((photo, index) => (
                <div className="property__image-wrapper" key={String(index)}>
                  <img className="property__image" src={photo} alt={header} />
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              <div className={`property__mark ${isPremuim ? '' : 'visually-hidden'}`}>
                <span>Premium</span>
              </div>
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {header}
                </h1>
                <button className={favoriteClassName} type="button">
                  <svg className="property__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: `${rating * 20}%` }} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedroomsNumber} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maximumGuests} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">€{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&#8216;s inside</h2>
                <ul className="property__inside-list">
                  {amenities.map((amenity, index) => (
                    <li className="property__inside-item" key={String(index)}>{amenity}</li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="property__avatar user__avatar"
                      src={avatar}
                      width={74}
                      height={74}
                      alt="Host avatar"
                    />
                  </div>
                  <span className="property__user-name">{name}</span>
                  <span className="property__user-status">{isPro? 'Pro' : '' }</span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">
                  Reviews · <span className="reviews__amount">{reviews.length}</span>
                </h2>
                <CommentsList reviews={reviews} />
                <CommentForm />
              </section>
            </div>
          </div>
          <section className="property map">
            {
              <Map
                city={city}
                offers={neighbourhoodOffers}
                activeCard={activeCard}
                height={PROPERTY_MAP_HEIGHT}
              />
            }
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              <OffersList offers={neighbourhoodOffers} onListItemHover={onListItemHover}/>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Room;

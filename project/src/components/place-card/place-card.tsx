import {Link} from 'react-router-dom';
import {Offer} from '../../types/offer';
import {NeighbourhoodOffer} from '../../types/neighbourhoodOffer';

type PlaceCardProps = {
  offer: Offer | NeighbourhoodOffer;
  onListItemHover: (listItemName: string) => void;
}

function PlaceCard({offer, onListItemHover}: PlaceCardProps): JSX.Element {
  const {id, previewImage, isPremium, price, title, type, isFavorite, rating} = offer;
  const favoriteClassName = `place-card__bookmark-button${isFavorite ? isFavorite && '--active button' : ' button'}`;
  const premiumClassname = `place-card__mark ${isPremium ? '' : 'visually-hidden'}`;

  const listItemHoverHandler = () => {
    onListItemHover(String(offer.id));
  };

  return (
    <article
      className="cities__place-card place-card"
      id={String(id)}
      onMouseEnter={listItemHoverHandler}
      onMouseLeave={() => {
        onListItemHover(String(offer.id));
      }}
    >
      <div className={premiumClassname}>
        <span>Premium</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`offer/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={260}
            height={200}
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className={favoriteClassName}
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rating * 20}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`offer/${id}`}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;

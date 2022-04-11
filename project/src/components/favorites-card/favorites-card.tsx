import {Offer} from '../../types/offer';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../consts';
import {fetchOfferAction, toggleFavoriteAction} from '../../store/api-actions';
import {useAppDispatch} from '../../hooks';
import BookmarkButton from '../bookmark-button/bookmark-button';
import {ratingWidth} from '../../utils';

type FavoriteCardProps = {
  favoriteOffer: Offer;
}

function FavoritesCard({favoriteOffer}:FavoriteCardProps): JSX.Element {

  const dispatch = useAppDispatch();
  const handleFavoriteClick = () => {
    dispatch(toggleFavoriteAction({
      id: favoriteOffer.id,
      flag: 0,
    }));
    dispatch(fetchOfferAction);
  };

  return (
    <article className="favorites__card place-card">
      {favoriteOffer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Offer}/${favoriteOffer.id}`}>
          <img className="place-card__image" src={favoriteOffer.previewImage} width="150" height="110" alt="Place card" />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{favoriteOffer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <BookmarkButton
            isFavorite={favoriteOffer.isFavorite}
            handleBookmarkButtonClick={handleFavoriteClick}
            isSmall
            prefix={'place-card'}
          />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${ratingWidth(favoriteOffer.rating)}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${favoriteOffer.id}`}>{favoriteOffer.title}</Link>
        </h2>
        <p className="place-card__type">{favoriteOffer.type}</p>
      </div>
    </article>

  );
}

export default FavoritesCard;

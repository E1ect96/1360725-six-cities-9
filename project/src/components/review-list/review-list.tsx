import {Review} from '../../types/review';
import {lengthOfReviews, sortReviewsDate} from '../../utils';
import ReviewItem from '../review-item/review-item';

type ReviewListProps = {
  reviews: Review[];
}

function ReviewList ({reviews}:ReviewListProps): JSX.Element {

  const sortReviews: Review[] = sortReviewsDate(reviews);
  const shownReviews: Review[] = lengthOfReviews(sortReviews);

  return (
    <ul className="reviews__list">
      {shownReviews.map((review) => (
        <ReviewItem review={review} key={review.id} />
      ))}
    </ul>
  );
}

export default ReviewList;

import {Reviews} from '../../mocks/reviews';
import Comment from '../comment/comment';

type CommentsListProps = {
  reviews: Reviews;
}

function CommentsList({reviews}: CommentsListProps):JSX.Element {
  return (
    <ul className="reviews__list">
      {
        reviews.map((review) =>
          (
            <Comment review={review} key={review.id}/>
          ))
      }
    </ul>
  );
}

export default CommentsList;

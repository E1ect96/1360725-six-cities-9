import {AppRoute, Cities} from '../../consts';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {Link} from 'react-router-dom';
import {setCity} from '../../store/offers-data/offers-data';
import {getCurrentCity} from '../../store/offers-data/selectors';

function Locations(): JSX.Element {
  const currentCity = useAppSelector(getCurrentCity);
  const dispatch = useAppDispatch();
  return (
    <ul className="locations__list tabs__list">
      {Cities.map((city) => (
        <li
          className="locations__item"
          key={city.name}
          onClick={() => dispatch(setCity(city))}
        >
          <Link
            className={`locations__item-link tabs__item ${city.name === currentCity.name ? 'tabs__item--active' : ''}`}
            to={AppRoute.Main}
          >
            <span>{city.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Locations;

import {
  useRef,
  useEffect
} from 'react';
import useMap from '../../hooks/useMap';
import {
  Icon,
  Marker
} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {
  City,
  Offer,
  Offers
} from '../../types/offer';
import {
  URL_MARKER_CURRENT,
  URL_MARKER_DEFAULT
} from '../../consts';

type MapProps = {
  city: City;
  offers: Offers;
  activeCard: Offer | null;
  height: string;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function Map(props:MapProps): JSX.Element {
  const {city, offers, activeCard, height} = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.coordinates.lat,
          lng: offer.coordinates.lng,
        });

        marker
          .setIcon(
            activeCard !== null && offer.id === activeCard.id
              ? currentCustomIcon
              : defaultCustomIcon,
          )
          .addTo(map);
      });
    }
  }, [map, offers, activeCard]);

  return (
    <div
      ref={mapRef}
      style={{height: height}}
    >
    </div>
  );
}

export default Map;

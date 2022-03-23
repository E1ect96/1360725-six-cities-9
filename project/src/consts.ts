export enum AppRoute {
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
  Main = '/',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum OfferType {
  Apartment = 'Apartment',
  Room = 'Room',
  House = 'House',
  Hotel = 'Hotel',
}

export enum CityName {
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
}

export const Cities = {
  Amsterdam: {
    cityName: CityName.Amsterdam,
    location: {
      lat: 52.374,
      lng: 4.88969,
      zoom: 12,
    },
  },
};

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export const MAP_HEIGHT = '1158px';

export const PROPERTY_MAP_HEIGHT = '579px';

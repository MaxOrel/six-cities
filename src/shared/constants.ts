import { TSizeMap } from '@customType/size';
import { CitiesName } from '../types/city';


export const LOCATIONS = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];


export enum AppRoute{
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
  OfferId = '/offer/:offerId',
  NotFound = '*'
}

export const Endpoint = {
  Comments: '/comments',
  Favorite: '/favorite',
  Login: '/login',
  Logout: '/logout',
  Offers: '/offers',
} as const;

export const CITIES = [
  {
    id: 'paris',
    location: { latitude: 48.85661, longitude: 2.351499, zoom: 13 },
    name: CitiesName.Paris
  },
  {
    id: 'cologne',
    location: { latitude: 50.938361, longitude: 6.959974, zoom: 13 },
    name: CitiesName.Cologne,
  },
  {
    id: 'brussels',
    location: { latitude: 50.846557, longitude: 4.351697, zoom: 13 },
    name: CitiesName.Brussels
  },
  {
    id: 'amsterdam',
    location: { latitude: 52.37454, longitude: 4.897976, zoom: 13 },
    name: CitiesName.Amsterdam
  },
  {
    id: 'hamburg',
    location: { latitude: 53.550341, longitude: 10.000654, zoom: 13 },
    name: CitiesName.Hamburg
  },
  {
    id: 'dusseldorf',
    location: { latitude: 51.225402, longitude: 6.776314, zoom: 13 },
    name: CitiesName.Dusseldorf
  },
] as const;

export const DEFAULT_CITY = CitiesName.Paris;

export const BookmarkSizeMap: TSizeMap = {
  small: {width: '18', height: '19'},
  large: {width: '31', height: '33'}
} as const;

export const ImageSizeMap: TSizeMap = {
  small: { width: '150', height: '110'},
  large: { width: '260', height: '200'},
} as const;

export enum AuthorizationStatus {
  Unknown = 'UNKNOWN',
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
}


export const RATING = [
  { stars: 5, title: 'perfect' },
  { stars: 4, title: 'good' },
  { stars: 3, title: 'not bad' },
  { stars: 2, title: 'badly' },
  { stars: 1, title: 'terribly' },
];

export const SORT_OPTIONS = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'] satisfies Record<SortOption, string>;

export const enum SortOption {
	Popular,
	PriceLowToHigh,
	PriceHighToLow,
	TopRatedFirst
}

export const AUTH_TOKEN_KEY_NAME = 'six-cities-token';
export const BACKEND_URL = 'https://16.design.htmlacademy.pro/six-cities';
export const REQUEST_TIMEOUT = 5000;

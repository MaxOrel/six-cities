import { TSizeMap } from '../types/size';

export enum CitiesName {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export const CityMap = {
  Paris: { name: CitiesName.Paris, location: { latitude: 48.8566, longitude: 2.3522, zoom: 10} },
  Cologne: { name: CitiesName.Cologne, location: { latitude: 50.935173, longitude: 6.953101, zoom: 10 }},
  Brussels: { name: CitiesName.Brussels, location: { latitude: 50.8476, longitude: 4.3572, zoom: 10 } },
  Amsterdam: { name: CitiesName.Amsterdam, location: { latitude: 52.3676, longitude: 4.9041, zoom: 10 } },
  Hamburg: { name: CitiesName.Hamburg, location: { latitude: 53.5488, longitude: 9.9872, zoom: 10 } },
  Dusseldorf: { name: CitiesName.Dusseldorf, location: { latitude: 51.2277, longitude: 6.7735, zoom: 10 } },
} as const;


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

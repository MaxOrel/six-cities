import { Location } from './location';


export type City = {
  name: CitiesName;
  location: Location;
}

export enum CitiesName {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

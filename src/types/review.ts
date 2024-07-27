import { Host } from './host';

export type Review = {
  id?: string;
  offerId?: string;
  date: string;
  user: Host;
  comment: string;
  rating: number;
};

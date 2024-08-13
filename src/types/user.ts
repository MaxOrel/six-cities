import { Host } from './host';

export type User = {
  email: string;
  token: string;
} & Host;

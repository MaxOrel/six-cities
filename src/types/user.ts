import { Host } from './host';

export type User = {
  id: number;
  email: string;
  token: string;
} & Host;

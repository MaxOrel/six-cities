import { RequestStatus } from '@shared/api';
import { CitiesName } from '../../../types/city';
import { OfferPreview } from '../../../types/offer';

export type OffersState = {
  currentCity: CitiesName,
  offers: OfferPreview[],
  requestStatus: RequestStatus
}

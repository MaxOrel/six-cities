import Spinner from '@components/spinner';
import { RequestStatus } from '@shared/api';
import { useActionCreators } from '@store/hooks/useActionCreator';
import { useEffect } from 'react';
import Locations from '../../components/locations/locations';
import PlacesListSection from '../../components/places-list-section';
import { useAppSelector } from '../../store/hooks/useAppSelector';
import { offersActions, offersSelectors } from '../../store/slices/offers';

function MainPage(): JSX.Element {
  const currentCity = useAppSelector(offersSelectors.city);
  const offers = useAppSelector(offersSelectors.offers);
  const offerStatus = useAppSelector(offersSelectors.offersStatus);

  const { fetchOffersAction } = useActionCreators(offersActions);

  useEffect(() => {
    fetchOffersAction()
      // .unwrap()
      // .then(() => toast('Предложения успешно загружены', {type: 'success'}))
      // .catch(() => toast('Произошла ошибка', {type:'error'}));
  }, []);

  const currentOffers =
    offers.filter((offer) => offer.city.name === currentCity) || [];

  if (offerStatus === RequestStatus.Idle) {
    return <Spinner />;
  }

  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <Locations />
      <div className="cities">
        <PlacesListSection
          currentCity={currentCity}
          currentOffers={currentOffers}
          extraClassName="cities__places-list tabs__content"
        />
      </div>
    </>
  );
}

export default MainPage;

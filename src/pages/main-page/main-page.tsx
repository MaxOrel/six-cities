import { useActionCreators } from '@store/hooks/useActionCreator';
import { useEffect } from 'react';
import Locations from '../../components/locations/locations';
import PlacesListSection from '../../components/places-list-section';
import { useAppSelector } from '../../store/hooks/useAppSelector';
import { offersActions, offersSelectors } from '../../store/slices/offers';

function MainPage(): JSX.Element {
  const currentCity = useAppSelector(offersSelectors.city);
  const offers = useAppSelector(offersSelectors.offers);
  const { fetchOffersAction } = useActionCreators(offersActions);

  useEffect(() => {
    fetchOffersAction();
  }, []);

  const currentOffers =
    offers.filter((offer) => offer.city.name === currentCity) || [];

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

import { useEffect } from 'react';
import Locations from '../../components/locations/locations';
import PlacesListSection from '../../components/places-list-section';
import { useAppDispatch } from '../../store/hooks/useAppDispatch';
import { useAppSelector } from '../../store/hooks/useAppSelector';
import { offersSelectors } from '../../store/slices/offers';
import { fetchOffersAction } from '../../store/slices/offers/offer-thunk';

function MainPage(): JSX.Element {
  const currentCity = useAppSelector(offersSelectors.city)
  const offers = useAppSelector(offersSelectors.offers)

  const dispatch =useAppDispatch();

  useEffect(() => {
    dispatch(fetchOffersAction())
  },[])
  // const currentCity = CITIES[0].name;
  const currentOffers = offers.filter(offer => offer.city.name === currentCity) || []
  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <Locations />
      <div className="cities">
        <PlacesListSection currentCity={currentCity} currentOffers={currentOffers} extraClassName='cities__places-list tabs__content'/>
      </div>
    </>
  );
}

export default MainPage;

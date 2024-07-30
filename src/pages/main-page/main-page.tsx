import Locations from '../../components/locations/locations';
import PlacesListSection from '../../components/places-list-section';
import { useAppSelector } from '../../store/hooks/useAppSelector';
import { offerSelectors } from '../../store/slices/offers';

function MainPage(): JSX.Element {
  const currentCity = useAppSelector(offerSelectors.city)
  const offers = useAppSelector(offerSelectors.offers)

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

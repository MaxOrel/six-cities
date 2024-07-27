import { CITIES } from '@constants';
import { OfferPreview } from '@customType/offer';
import { useState } from 'react';
import Locations from '../../components/locations/locations';
import PlacesListSection from '../../components/places-list-section';

type MainPageProps = {
  offers: OfferPreview[];
};

function MainPage({ offers }: MainPageProps): JSX.Element {
  const [selectedPoint, setSelectedPoint] = useState<OfferPreview | null>(null);
  const currentCity = CITIES[0].name;
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

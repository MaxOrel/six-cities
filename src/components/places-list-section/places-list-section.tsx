import clsx from 'clsx';
import { useState } from 'react';
import { SortOption } from '../../shared/constants';
import { CitiesName } from '../../types/city';
import { OfferPreview } from '../../types/offer';
import Map from '../map';
import NoOffers from '../no-offers';
import OfferCard from '../offer-card';
import OfferList from '../offer-list/offer-list';
import SortingList from '../sorting-list';

type TPlacesListProps = {
  extraClassName?: string;
  currentOffers: OfferPreview[];
  currentCity: CitiesName;
};

function PlacesListSection({
  extraClassName,
  currentOffers,
  currentCity,
}: TPlacesListProps) {
  const [activeSort, setActiveSort] = useState(SortOption.Popular);
  const [selectedPoint, setSelectedPoint] = useState<OfferPreview | null>(null);

  const isEmpty = currentOffers.length === 0;
  let sortedOffers = currentOffers;

  switch (activeSort) {
    case SortOption.PriceHighToLow:
      sortedOffers = [...currentOffers].sort((a, b) => b.price - a.price);
      break;
    case SortOption.PriceLowToHigh:
      sortedOffers = [...currentOffers].sort((a, b) => a.price - b.price);
      break;
    case SortOption.TopRatedFirst:
      sortedOffers = [...currentOffers].sort((a, b) => b.rating - a.rating);
      break;
  }

  return isEmpty ? (
    <NoOffers currentLocation={currentCity} />
  ) : (
    <div
      className={clsx(
        'cities__places-container container',
        isEmpty && 'cities__places-container--empty'
      )}
    >
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">
          {sortedOffers.length} places to stay in Amsterdam
        </b>
        <SortingList setter={setActiveSort} current={activeSort} />
        <OfferList offers={sortedOffers} extraClassName={extraClassName}>
          {(dataCard) => (
            <OfferCard
              variant="cities"
              size="large"
              key={dataCard.id}
              offer={dataCard}
              onCardHover={setSelectedPoint}
            />
          )}
        </OfferList>
      </section>
      <div className="cities__right-section">
        <Map
          extraClassName="cities__map"
          cityName={currentCity}
          points={currentOffers}
          selectedPoint={selectedPoint}
        />
      </div>
    </div>
  );
}

export default PlacesListSection;

import Map from '@components/map';
import NoOffers from '@components/no-offers';
import OfferList from '@components/offer-list';
import { CityMap } from '@constants';
import { OfferPreview } from '@customType/offer';
import { useState } from 'react';
import OfferCard from '../../components/offer-card';

type MainPageProps = {
  offers: OfferPreview[];
  locations: typeof CityMap;
};

function MainPage({ offers, locations }: MainPageProps): JSX.Element {
  const [selectedPoint, setSelectedPoint] = useState<OfferPreview | null>(null);

  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {Object.values(locations).map((city) => (
              <li key={city.name} className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>{city.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
      {offers.length > 0 ? (
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {offers.length} places to stay in Amsterdam
              </b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom">
                  <li
                    className="places__option places__option--active"
                    tabIndex={0}
                  >
                    Popular
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: low to high
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: high to low
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Top rated first
                  </li>
                </ul>
              </form>
              <OfferList
                offers={offers}
                extraClassName="cities__places-list tabs__content"
              >
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
                city={offers[0].city}
                points={offers}
                selectedPoint={selectedPoint}
                extraClassName="cities__map"
              />
            </div>
          </div>
        </div>
      ) : (
        <NoOffers currentLocation={locations.Paris.name} />
      )}
    </>
  );
}

export default MainPage;

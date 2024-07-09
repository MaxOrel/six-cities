import Header from '../../components/header/header';
import NoOffers from '../../components/no-offers/no-offers';
import OfferCard from '../../components/offer-card/offer-card';
import { CityMap } from '../../shared/constants';
import { OfferPreview } from '../../types/offer';

type MainPageProps = {
  offers: OfferPreview[];
  locations: typeof CityMap;
};

function MainPage({ offers, locations }: MainPageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
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
        {
          offers.length > 0 ? (
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
                    <ul className="places__options places__options--custom places__options--opened">
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
                  <div className="cities__places-list places__list tabs__content">
                    {offers.map((dataCard) => (
                      <OfferCard
                        variant="cities"
                        size="large"
                        key={dataCard.id}
                        offer={dataCard}
                      />
                    ))}
                  </div>
                </section>
                <div className="cities__right-section">
                  <section className="cities__map map"></section>
                </div>
              </div>
            </div>
          ) : <NoOffers  currentLocation={locations.Paris.name}/>
          }
          </main>
    </div>
  );
}

export default MainPage;

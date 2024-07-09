import Header from '../../components/header/header';
import OfferCard from '../../components/offer-card/offer-card';
import { OfferPreview } from '../../types/offer';
import { FavoritesEmptyPage } from '../favorites-empty-page/favorites-empty-page';

type FavoritePageProps = {
  offers: OfferPreview[];
};
function getFavoritesByLocation(items: OfferPreview[]) {
  return items.reduce<{ [key: string]: OfferPreview[]; }>((acc, current) => {
    const location = current.city.name;
    if (!(location in acc)) {
      acc[location] = [];
    }
    acc[location].push(current);

    return acc;
  }, {});
}

function FavoritePage({ offers }: FavoritePageProps): JSX.Element {
  const favorites = offers.filter((item) => item.isFavorite);
  const favoritesByLocation = getFavoritesByLocation(favorites);
  const hasFavorites = Boolean(favorites?.length);

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {hasFavorites ? (
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {Object.entries(favoritesByLocation).map(
                  ([location, groupedFavorites]) => (
                    <li className="favorites__locations-items" key={location}>
                      <div className="favorites__locations locations locations--current">
                        <div className="locations__item">
                          <a className="locations__item-link" href="#">
                            <span>{location}</span>
                          </a>
                        </div>
                      </div>
                      <div className="favorites__places">
                        {groupedFavorites.map((offer) => (
                          <OfferCard
                            key={offer.id}
                            offer={offer}
                            variant="favorites"
                            size="small"
                          />
                        )
                        )}
                      </div>
                    </li>
                  )
                )}
              </ul>
            </section>
          )
            : <FavoritesEmptyPage />
          }
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>

  );

}
export default FavoritePage;

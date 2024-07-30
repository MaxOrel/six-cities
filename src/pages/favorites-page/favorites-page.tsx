import OfferCard from '@components/offer-card';
import FavoritesEmptyPage from '@pages/favorites-empty-page';
import { useAppSelector } from '../../store/hooks/useAppSelector';
import { favoritesSelectors } from '../../store/slices/favorites';


function FavoritePage(): JSX.Element {
  const favorites = useAppSelector(favoritesSelectors.favorites)
  const favoritesByLocation = Object.groupBy(favorites, (offer) => offer.city.name);

  const hasFavorites = Boolean(favorites?.length);

  return (
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
  );

}
export default FavoritePage;

import ProtectRoute from '@components/protect-route/protect-route';
import { OFFERS } from '@mocks/offers';
import FavoritePage from '@pages/favorites-page/favorites-page';
import LoginPage from '@pages/login-page/login-page';
import MainPage from '@pages/main-page/main-page';
import NotFoundPage from '@pages/not-found-page/not-found-page';
import OfferPage from '@pages/offer-page/offer-page';
import { Route, Routes } from 'react-router-dom';
import { AppRoute, CityMap } from '../shared/constants';

function App(): JSX.Element {
  return (
    <Routes>
      <Route
        path={AppRoute.Root}
        element={<MainPage offers={OFFERS} locations={CityMap} />}
      />
      <Route
        path={AppRoute.Favorites}
        element={
          <ProtectRoute>
            <FavoritePage offers={OFFERS} />
          </ProtectRoute>
        }
      />
      <Route path={`${AppRoute.Offer}/:offerId`} element={<OfferPage />} />
      <Route
        path={AppRoute.Login}
        element={
          <ProtectRoute onlyUnAuth>
            <LoginPage />
          </ProtectRoute>
        }
      />
      <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;

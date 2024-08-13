import Layout from '@components/layout';
import ProtectRoute from '@components/protect-route/protect-route';
import { AppRoute } from '@constants';
import { OFFERS } from '@mocks/offers';
import FavoritePage from '@pages/favorites-page/favorites-page';
import LoginPage from '@pages/login-page/login-page';
import MainPage from '@pages/main-page/main-page';
import NotFoundPage from '@pages/not-found-page/not-found-page';
import OfferPage from '@pages/offer-page/offer-page';
import { useActionCreators } from '@store/hooks/useActionCreator';
import { userActions } from '@store/slices/user';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

function App(): JSX.Element {
  const {checkAuth} = useActionCreators(userActions);
  useEffect(() => {
      checkAuth();
  }, [])

  return (
    <Routes>
      <Route path={AppRoute.Root} element={<Layout />}>
        <Route
          path={AppRoute.Root}
          element={<MainPage/>}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <ProtectRoute>
              <FavoritePage />
            </ProtectRoute>
          }
        />
        <Route path={AppRoute.OfferId} element={<OfferPage offers={OFFERS} />} />
        <Route
          path={AppRoute.Login}
          element={
            <ProtectRoute onlyUnAuth>
              <LoginPage />
            </ProtectRoute>
          }
        />
        <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;

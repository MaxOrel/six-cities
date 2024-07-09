import { OFFERS } from '../../mocks/offers';
import FavoritePage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import MainPage from '../../pages/main-page/main-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import OfferPage from '../../pages/offer-page/offer-page';
import { CityMap } from '../../shared/constants';



function App(): JSX.Element {
  return (
    <>
      <MainPage offers={OFFERS} locations={CityMap} />
      <FavoritePage offers={OFFERS}/>
      <OfferPage/>
      <LoginPage />
      <NotFoundPage />
    </>
  );
}

export default App;

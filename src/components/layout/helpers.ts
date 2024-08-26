import { AppRoute } from '@constants';
import { RootState } from '@store/index';
import { useMatch } from 'react-router-dom';

export const getLayoutState = (pathname: AppRoute, state: RootState) => {
  let pageClassName = '';
  let mainClassName = '';
  let isDisabledLogo = false;
  let shouldRenderUser = true;
  let shouldRenderFooter = false;
  const isMatchOfferId = useMatch(AppRoute.OfferId)
  switch (pathname) {
    case AppRoute.Root:
      pageClassName = 'page--gray page--main';
      mainClassName = state.offers.offers.length ? 'page__main--index' : 'page__main--index-empty';
      isDisabledLogo = true
      break;
    case AppRoute.Login:
      shouldRenderUser = false;
      mainClassName = 'page__main--login';
      pageClassName = 'page--gray page--login';
      break;
    case AppRoute.Favorites:
      mainClassName = state.favorites.items.length ? 'page__main--favorites': 'page__main--favorites-empty';
      pageClassName = state.favorites.items.length ? '': 'page--favorites-empty';
      shouldRenderFooter = true;
      break;
  }
  if(isMatchOfferId) {
    mainClassName = 'page__main--offer';
  }

  return {
    pageClassName,
    isDisabledLogo,
    shouldRenderUser,
    shouldRenderFooter,
    mainClassName
  };
};

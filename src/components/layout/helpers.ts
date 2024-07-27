import { AppRoute } from '@constants';

export const getLayoutState = (pathname: AppRoute) => {
  let pageClassName = '';
  let mainClassName = '';
  let isDisabledLogo = false;
  let shouldRenderUser = true;
  let shouldRenderFooter = false;


  switch (pathname) {
    case AppRoute.Root:
      pageClassName = 'page--gray page--main';
      mainClassName = 'page__main--index';
      isDisabledLogo = true
      break;
    case AppRoute.Offer:
      mainClassName = ' page__main--offer';
      break;
    case AppRoute.Login:
      shouldRenderUser = false;
      mainClassName = 'page__main--index';
      pageClassName = 'page--gray page--login';
      break;
    case AppRoute.Favorites:
      mainClassName = 'page__main--favorites';
      shouldRenderFooter = true;
      break;
  }

  return {
    pageClassName,
    isDisabledLogo,
    shouldRenderUser,
    shouldRenderFooter,
    mainClassName
  };
};

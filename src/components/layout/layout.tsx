import Footer from '@components//footer';
import Header from '@components/header';
import { AppRoute } from '@constants';
import { useAppSelector } from '@store/hooks/useAppSelector';
import clsx from 'clsx';
import { Outlet, useLocation } from "react-router-dom";
import { getLayoutState } from './helpers';

function Layout() {
  const { pathname } = useLocation();
  const state = useAppSelector(state => state);
  const {
    pageClassName,
    isDisabledLogo,
    shouldRenderUser,
    shouldRenderFooter,
    mainClassName
  } = getLayoutState(pathname as AppRoute, state);

  return (
    <div className={clsx('page', pageClassName)}>
      <Header
        isDisabledLogo={isDisabledLogo}
        shouldRenderUser={shouldRenderUser}
      />
      <main className={clsx('page__main', mainClassName)}>
        <Outlet />
      </main>
      {shouldRenderFooter && <Footer />}
    </div>
  );
}

export default Layout;

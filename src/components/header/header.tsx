import Logo from '@components/logo';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../shared/constants';

type HeaderProps = {
  isDisabledLogo?: boolean;
  shouldRenderUser?: boolean;
};
function Header({
  isDisabledLogo,
  shouldRenderUser,
}: HeaderProps): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo isDisabledLogo={isDisabledLogo} />
          </div>
          {shouldRenderUser && (
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link
                    className="header__nav-link header__nav-link--profile"
                    to={AppRoute.Favorites}
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      Oliver.conner@gmail.com
                    </span>
                    <span className="header__favorite-count">3</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link className="header__nav-link" to={AppRoute.Root}>
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;

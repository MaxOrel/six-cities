import Logo from '@components/logo';
import { useAuth } from '../../hooks/use-auth';
import { HeaderNavigateAuthUser } from './header-navigate-auth-user';
import { HeaderNavigateUnAuthUser } from './header-navigate-unauth-user';

type HeaderProps = {
  isDisabledLogo?: boolean;
  shouldRenderUser?: boolean;
};


function Header({
  isDisabledLogo,
  shouldRenderUser,
}: HeaderProps): JSX.Element {
  const isAuth = useAuth()
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
                {isAuth ? <HeaderNavigateAuthUser/> : <HeaderNavigateUnAuthUser/>}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;

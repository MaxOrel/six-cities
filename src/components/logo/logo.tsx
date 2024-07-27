import { AppRoute } from '@constants';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

type LogoProps = {
  isDisabledLogo? : boolean;
}

export default function Logo({isDisabledLogo}:LogoProps): JSX.Element {
  const Tag = isDisabledLogo ?'div' : Link ;
  return (
    <Tag className={clsx('header__logo-link', isDisabledLogo && 'header__logo-link--active')} to={AppRoute.Root}>
      <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
    </Tag>
  );
}

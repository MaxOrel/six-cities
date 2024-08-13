import Spinner from '@components/spinner';
import { AppRoute, AuthorizationStatus } from '@constants';
import { useAppSelector } from '@store/hooks/useAppSelector';
import { userSelectors } from '@store/slices/user';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth';
type ProtectRouteProps = {
  onlyUnAuth?: boolean;
  children: JSX.Element;
}
export default function ProtectRoute({onlyUnAuth, children}: ProtectRouteProps) {
  const isAuth = useAuth();
  const location = useLocation();
  const userStatus = useAppSelector(userSelectors.userStatus)

  if(userStatus === AuthorizationStatus.Unknown) {
    return <Spinner />
  }

  if(isAuth && onlyUnAuth) {
    const from = location.state?.from || { pathname: '/' }
    return <Navigate to={from} />
  }

  if(!isAuth && !onlyUnAuth) {
    return <Navigate to={AppRoute.Login} state={{from: location}} />
  }

  return  children;
}

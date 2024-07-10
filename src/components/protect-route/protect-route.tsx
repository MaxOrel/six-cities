import { AppRoute } from '@constants';
import { Navigate, useLocation } from 'react-router-dom';
type ProtectRouteProps = {
  onlyUnAuth?: boolean;
  children: JSX.Element;
}
export default function ProtectRoute({onlyUnAuth, children}: ProtectRouteProps) {
  const user = true;
  const location = useLocation();

  if(user && onlyUnAuth) {
    const from = location.state?.from || { pathname: '/' }
    return <Navigate to={from} />
  }

  if(!user && !onlyUnAuth) {
    return <Navigate to={AppRoute.Login} state={{from: location}} />
  }

  return  children;
}

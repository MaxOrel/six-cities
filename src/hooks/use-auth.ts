import { AuthorizationStatus } from '@shared/constants';
import { useAppSelector } from '@store/hooks/useAppSelector';
import { userSelectors } from '@store/slices/user';

export const useAuth = () => {
  const status = useAppSelector(userSelectors.userStatus);
  return status === AuthorizationStatus.Auth;
}

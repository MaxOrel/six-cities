import { RequestStatus } from '@shared/api';
import { getToken } from '@shared/token';
import { useAppDispatch } from '@store/hooks/useAppDispatch';
import { useAppSelector } from '@store/hooks/useAppSelector';
import { useEffect } from 'react';
import {
  favoritesActions,
  favoritesSelectors,
} from '../store/slices/favorites';

export const useFavoriteCount = () => {
  const dispatch = useAppDispatch();
  const favoritesStatus = useAppSelector(favoritesSelectors.favoriteStatus);
  const count = useAppSelector(favoritesSelectors.favorites).length;
  const token = getToken();

  useEffect(() => {
    if (favoritesStatus === RequestStatus.Idle && token) {
      dispatch(favoritesActions.fetchFavorites());
    }
  }, [dispatch, favoritesStatus, token]);

  return count;
};

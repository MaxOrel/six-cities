import { AppRoute, AuthorizationStatus } from '@shared/constants';
import { useActionCreators } from '@store/hooks/useActionCreator';
import { useAppSelector } from '@store/hooks/useAppSelector';
import { favoritesActions } from '@store/slices/favorites';
import { offerActions } from '@store/slices/offer';
import { offersActions } from '@store/slices/offers';
import { userSelectors } from '@store/slices/user';
import { useNavigate } from 'react-router-dom';
import Bookmark from '../bookmark';
type Size = 'small' | 'medium' | 'large';


interface FavoriteButtonProps {
	bemBlock?: 'offer' | 'place-card';
	isFavorite?: boolean;
	offerId: string;
	size?: Size;
}

export function FavoriteButton({ bemBlock = 'place-card', isFavorite = false, offerId, size = 'small' }: FavoriteButtonProps) {
  const {changeFavorites, updateOffer, updateOffers} = useActionCreators({...favoritesActions, ...offersActions, ...offerActions})
  const navigate = useNavigate()
  const userStatus = useAppSelector(userSelectors.userStatus)
	function handleClick() {
    if(userStatus !== AuthorizationStatus.Auth) {
      return navigate(AppRoute.Login)
    }
    updateOffer(offerId);
    updateOffers(offerId);
    changeFavorites({offerId, status: Number(!isFavorite)})
	}
	return (
    <Bookmark size={size} extraClass={bemBlock} isActive={isFavorite} actionClick={handleClick}/>
	);
}

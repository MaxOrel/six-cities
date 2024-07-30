import Bookmark from '../bookmark';
type Size = 'small' | 'medium' | 'large';


interface FavoriteButtonProps {
	bemBlock?: 'offer' | 'place-card';
	isFavorite?: boolean;
	offerId: string;
	size?: Size;
}

export function FavoriteButton({ bemBlock = 'place-card', isFavorite = false, offerId, size = 'small' }: FavoriteButtonProps) {
	function handleClick() {
    console.log({offerId, status: Number(!isFavorite)});
	}
	return (
    <Bookmark size={size} extraClass={bemBlock} isActive={isFavorite} actionClick={handleClick}/>
	);
}

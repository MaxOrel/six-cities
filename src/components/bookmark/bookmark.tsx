import clsx from 'clsx';
import { useBoolean } from '../../hooks/useBoolean';

type Size = 'small' | 'medium' | 'large';

type BookmarkProps = {
	isActive: boolean;
	extraClass?: 'offer' | 'place-card';
  size: Size;
  actionClick: () => void;
};

function getBookmarkSize(size: Size) {
  if (size === 'large') {
    return { width: '31', height: '33' };
  }
  if (size === 'small') {
    return { width: '18', height: '19' };
  }
}


function Bookmark({ isActive, extraClass = 'place-card', size, actionClick }: BookmarkProps): JSX.Element {
	const { isOn: isBookmarked, toggle: toggleBookmark } = useBoolean(isActive);
	const classNameObject = {
		[`${extraClass}__bookmark-button`]: !!extraClass,
		[`${extraClass}__bookmark-button--active`]: isBookmarked,
	};
	const bookmarkClass = clsx('button', classNameObject);
  const buttonClickHandler = () => {
    actionClick();
    toggleBookmark()
  }
	return (
		<button className={bookmarkClass} onClick={buttonClickHandler} type="button">
			<svg className={`${extraClass}__bookmark-icon`} {...getBookmarkSize(size)}>
				<use xlinkHref="#icon-bookmark"></use>
			</svg>
			<span className="visually-hidden">{isBookmarked ? 'In' : 'To'} bookmarks</span>
		</button>
	);
}

export default Bookmark;

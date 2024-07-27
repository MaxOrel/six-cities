import clsx from 'clsx';
import { useState } from 'react';
import { SORT_OPTIONS, SortOption } from '../../shared/constants';

type TSortingListProps = {
  current: SortOption;
  setter: (option: SortOption) => void;
};

function SortingList({ current, setter }: TSortingListProps) {
  const [isOpened, setOpen] = useState(false);

  const selectedOption = SORT_OPTIONS[current];

  const onSortListOpenClick = (evt: React.MouseEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const target = evt.target as HTMLElement;

    if (target.closest('.places__sorting') && target.tagName !== 'LI') {
      setOpen((prevState) => !prevState);
    }
  };

  return (
    <form
      className="places__sorting"
      action="#"
      method="get"
      onClick={onSortListOpenClick}
    >
      <span className="places__sorting-caption">Sort by&nbsp;</span>
      <span className="places__sorting-type" tabIndex={0}>
        {selectedOption}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul
        className={clsx(
          'places__options places__options--custom',
          isOpened && 'places__options--opened'
        )}
      >
        {SORT_OPTIONS.map((option, index) => (
          <li
            key={option}
            onClick={() => {
              setOpen(false);
              setter(index);
            }}
            className={clsx(
              'places__option',
              selectedOption === option && 'places__option--active'
            )}
            tabIndex={0}
          >
            {option}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default SortingList;

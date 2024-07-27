import clsx from 'clsx';
import { OfferPreview } from '../../types/offer';

type OfferListProps = {
  offers: OfferPreview[];
  extraClassName?: string;
  children: (data: OfferPreview) => React.ReactNode;
};

export default function OfferList({
  offers,
  extraClassName,
  children,
}: OfferListProps) {
  return (
    <div className={clsx('places__list', extraClassName && extraClassName)}>
      {offers.map((dataCard) => children(dataCard))}
    </div>
  );
}

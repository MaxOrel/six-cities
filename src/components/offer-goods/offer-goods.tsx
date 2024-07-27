import { Offer } from '../../types/offer';

type TOfferGoodsProps =  Pick<Offer, 'goods'>;

function OfferGoods({ goods }: TOfferGoodsProps) {
  return (
    <ul className="offer__inside-list">
      {goods.map((good) => (
        <li key={good} className="offer__inside-item">
          {good}
        </li>
      ))}
    </ul>
  );
}

export default OfferGoods;

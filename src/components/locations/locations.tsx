import clsx from 'clsx';
import { CITIES } from '../../shared/constants';

function Locations() {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((location, idx) => (
            <li key={location.id} className="locations__item">
              <a
                className={clsx(
                  `locations__item-link tabs__item ${
                    idx === 3 && 'tabs__item--active'
                  }`
                )}
                href="#"
              >
                <span>{location.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Locations;

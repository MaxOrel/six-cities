import clsx from 'clsx';
import { MouseEvent, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CITIES } from '../../shared/constants';
import { useAppDispatch } from '../../store/hooks/useAppDispatch';
import { offersActions } from '../../store/slices/offers';
import { CitiesName } from '../../types/city';

function Locations() {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams ] = useSearchParams()
  const currentCity = searchParams.get('city') || CITIES[0].name;

  useEffect(() => {
    setSearchParams({'city': currentCity })
    dispatch(offersActions.changeCity(currentCity as CitiesName));
  }, [])

  const onCityClickHandler = (evt: MouseEvent<HTMLElement>,cityName: CitiesName): void => {
    evt.preventDefault();
    setSearchParams({'city': cityName})
    dispatch(offersActions.changeCity(cityName)); // {type: '', payload}
  }

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city) => (
            <li key={city.id} className="locations__item">
              <a
                className={clsx(
                  `locations__item-link tabs__item ${
                    city.name === currentCity && 'tabs__item--active'
                  }`
                )}
                href="#"
                onClick={(evt) => onCityClickHandler(evt,city.name)}
              >
                <span>{city.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Locations;

import clsx from 'clsx';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';

import { City } from '../../types/city';
import { OfferPreview } from '../../types/offer';
import PinActive from './assets/pin-active.svg';
import Pin from './assets/pin.svg';
import useMap from './helpers/hooks';

type TMapProps = {
  extraClassName?: string;
  city: City;
  points: OfferPreview[];
  selectedPoint: OfferPreview | null;
};

const defaultCustomIcon = leaflet.icon({
  iconUrl: Pin,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: PinActive,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39],
});

function Map({ extraClassName, city, points, selectedPoint }: TMapProps) {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const map = useMap({ city, mapRef });

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        leaflet
          .marker(
            {
              lat: point.location.latitude,
              lng: point.location.longitude,
            },
            {
              icon:
                point.id === selectedPoint?.id
                  ? currentCustomIcon
                  : defaultCustomIcon,
            }
          )
          .addTo(map);
      });
    }
  }, [map, points, selectedPoint]);

  return <section className={clsx('map', extraClassName)} ref={mapRef} />;
}

export default Map;
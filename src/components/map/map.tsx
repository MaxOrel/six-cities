import clsx from 'clsx';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';

import { CITIES } from '../../shared/constants';
import { CitiesName } from '../../types/city';
import { OfferPreview } from '../../types/offer';
import PinActive from './assets/pin-active.svg';
import Pin from './assets/pin.svg';
import useMap from './helpers/useMap';

type TMapProps = {
  extraClassName?: string;
  cityName: CitiesName;
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

function Map({ extraClassName, cityName, points, selectedPoint }: TMapProps) {
  const city = CITIES.find((city) => city.name === cityName) || CITIES[0];
  const mapRef = useRef<HTMLDivElement | null>(null);
  const map = useMap({ city, mapRef });

  useEffect(() => {
    if (map) {
      const markerLayer = leaflet.layerGroup().addTo(map);

      points.forEach((point) => {
        const marker = leaflet.marker(
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
        );

        marker.addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, selectedPoint]);

  return <section className={clsx('map', extraClassName)} ref={mapRef} />;
}

export default Map;

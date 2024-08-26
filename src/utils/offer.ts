import { LOCATIONS } from '@shared/constants';

export function getRatingWidth (rating: number) {
  return `${Math.floor(rating / 0.05)}%`;
}


export function formatDate(date: string) {
	return new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(new Date(date));
}


export function getRandomLocation(locations: typeof LOCATIONS): string {
  const randomIndex = Math.floor(Math.random() * locations.length);
  return locations[randomIndex];
}

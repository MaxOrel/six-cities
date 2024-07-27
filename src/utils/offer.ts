export function getRatingWidth (rating: number) {
  return `${rating / 0.05}%`;
}


export function formatDate(date: string) {
	return new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(new Date(date));
}

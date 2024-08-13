import { favoritesSlice } from './favorites-slice';
import { changeFavorites, fetchFavorites } from './favorites-thunk';

export const favoritesActions = { ...favoritesSlice.actions, fetchFavorites, changeFavorites};
export const favoritesSelectors = favoritesSlice.selectors;

export default favoritesSlice;

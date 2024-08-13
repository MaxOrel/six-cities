import { userSlice } from './user-slice';
import { checkAuth, login, logout } from './user-thunk';

export const userSelectors = userSlice.selectors;
export const userActions = {... userSlice.actions, checkAuth, login, logout };

export default userSlice;

import { User } from '@customType/user';
import { Endpoint } from '@shared/constants';
import { deleteToken, setToken } from '@shared/token';
import { createAppAsyncThunk } from '@store/hooks/createAppAsyncThunk';
import { USER_SLICE_NAME } from '../slice-name';
type LoginData = {
  email: string;
  password: string;
};

export const checkAuth = createAppAsyncThunk<User, undefined>(
  'user/checkAuth',
  async (_arg, { extra: api }) => {
    const response = await api.get<User>(Endpoint.Login);

    return response.data;
  }
);

export const login = createAppAsyncThunk<User, LoginData>(
  `${USER_SLICE_NAME}/login`,
  async (body, { extra: api }) => {
    const response = await api.post<User>(Endpoint.Login, body);
    setToken(response.data.token);

    return response.data;
  }
);

export const logout = createAppAsyncThunk<unknown, undefined>(
  `${USER_SLICE_NAME}/logout`,
  async (_arg, { extra: api }) => {
    await api.delete(Endpoint.Logout);
    deleteToken();
  }
);

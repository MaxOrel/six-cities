import { AUTH_TOKEN_KEY_NAME } from '@constants';

export type Token = string;

export const getToken = (): Token => localStorage.getItem(AUTH_TOKEN_KEY_NAME) ?? '';
export const setToken = (token: Token) =>
  localStorage.setItem(AUTH_TOKEN_KEY_NAME, token);
export const deleteToken = () => localStorage.removeItem(AUTH_TOKEN_KEY_NAME);

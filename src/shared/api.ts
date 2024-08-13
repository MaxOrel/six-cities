import axios, { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import { BACKEND_URL, REQUEST_TIMEOUT } from './constants';
import { getToken } from './token';

type DetailMessageType = {
  type: string,
  message: string,
}

export const enum RequestStatus {
	Idle = 'idle',
	Loading = 'loading',
	Success = 'success',
	Failed = 'failed',
}

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT
  })

  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      config.headers['x-token'] = getToken()
      return config;
    }
  )

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<DetailMessageType>) => {
      if(error.response) {
        const errorMessage = error.response.data;
        console.log(errorMessage);

      }
    }
  )

  return api;
}

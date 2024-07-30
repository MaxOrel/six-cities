import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../shared/api';
import { rootReducers } from './rootReducers';
const api = createAPI()
export const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: api
    }
  })
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

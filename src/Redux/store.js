import { configureStore } from '@reduxjs/toolkit';
import { articlesApi } from './Articles/articlesOperations';

export const store = configureStore({
  reducer: {
    [articlesApi.reducerPath]: articlesApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    articlesApi.middleware,
  ],
});

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { postApi } from './post/post.api';

const rootReducer= combineReducers({
  [postApi.reducerPath]:postApi.reducer
});

export const setupStore=()=> {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(postApi.middleware)
  })
};

import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import locationsSlice from './location/locationsSlice'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import {combineReducers} from "redux";
import storage from 'redux-persist/lib/storage'


const reducers = combineReducers({
  counter: counterReducer,
  locations:locationsSlice,
});
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['counter','locations'] 
}
const persistedReducer = persistReducer(persistConfig, reducers)

export const store= configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
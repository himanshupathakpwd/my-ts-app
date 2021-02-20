import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import { UserState } from './slices';

export interface ReduxState {
  user: UserState;
}

const store = configureStore({
  reducer: rootReducer
});

export default store;

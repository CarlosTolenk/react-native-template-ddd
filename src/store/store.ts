import {configureStore} from '@reduxjs/toolkit';
import {ICounter} from './models/counter';
import {counterReducer} from './states';

export interface AppStore {
  counter: ICounter;
}

export default configureStore<AppStore>({
  reducer: {
    counter: counterReducer,
  },
  devTools: true,
});

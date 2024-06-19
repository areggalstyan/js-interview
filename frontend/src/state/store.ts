import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import { watchAll, update } from './sagas';
import chatReducer from './chatSlice';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    chat: chatReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(watchAll);
sagaMiddleware.run(update);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

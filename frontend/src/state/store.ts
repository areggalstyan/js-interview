import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import conversationsReducer from './conversationsSlice';
import currentConversationReducer from './currentConversationSlice';
import searchReducer from './searchSlice';
import { watchAll, update } from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    conversations: conversationsReducer,
    currentConversation: currentConversationReducer,
    search: searchReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat([sagaMiddleware])
});

sagaMiddleware.run(watchAll);
sagaMiddleware.run(update);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

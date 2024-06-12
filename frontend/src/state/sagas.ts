import { takeEvery, call, put, all, delay } from 'redux-saga/effects';
import { addMessage, editMessage, getConversations, removeMessage } from '../api';

function* requestUpdate(): any {
  const data = yield call(getConversations);
  yield put({ type: 'conversations/receiveUpdate', payload: data });
}

function* requestAddMessage({ payload }: any) {
  yield call(addMessage, payload);
  yield put({ type: 'conversations/requestUpdate' });
}

function* requestRemoveMessage({ payload }: any) {
  yield call(removeMessage, payload);
  yield put({ type: 'conversations/requestUpdate' });
}

function* requestEditMessage({ payload }: any) {
  yield call(editMessage, payload.id, payload.name, payload.text);
  yield put({ type: 'conversations/requestUpdate' });
}

export function* watchAll() {
  yield all([
    takeEvery('conversations/requestUpdate', requestUpdate),
    takeEvery('conversations/requestAddMessage', requestAddMessage),
    takeEvery('conversations/requestRemoveMessage', requestRemoveMessage),
    takeEvery('conversations/requestEditMessage', requestEditMessage)
  ]);
}

export function* update() {
  while (true) {
    yield call(requestUpdate);
    yield delay(1000);
  }
}

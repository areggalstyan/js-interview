import { call, put, all, delay, takeEvery } from 'redux-saga/effects';
import { addMessage, editMessage, fetchConversations, MessageEdit, removeMessage } from '../api';
import { SagaIterator } from 'redux-saga';
import { changeStatus, receiveUpdate } from './chatSlice';
import { PayloadAction } from '@reduxjs/toolkit';

const requestUpdateType = 'chat/requestUpdate';
const requestAddMessageType = 'chat/requestAddMessage';
const requestEditMessageType = 'chat/requestEditMessage';
const requestRemoveMessageType = 'chat/requestRemoveMessage';

export const requestUpdate = (): PayloadAction => {
  return { type: requestUpdateType, payload: undefined };
};

export const requestAddMessage = (payload: string): PayloadAction<string> => {
  return { type: requestAddMessageType, payload };
};

export const requestEditMessage = (payload: MessageEdit): PayloadAction<MessageEdit> => {
  return { type: requestEditMessageType, payload };
};

export const requestRemoveMessage = (payload: string): PayloadAction<string> => {
  return { type: requestRemoveMessageType, payload };
};

function* handleRequestUpdate(): SagaIterator {
  const data = yield call(fetchConversations);
  yield put(receiveUpdate(data));
}

function* handleRequestAddMessage({ payload }: PayloadAction<string>): SagaIterator {
  yield put(changeStatus('processing'));
  try {
    yield call(addMessage, payload);
    yield put(changeStatus('success'));
    yield put(requestUpdate());
  } catch {
    yield put(changeStatus('failure'));
  }
}

function* handleRequestEditMessage({ payload }: PayloadAction<MessageEdit>): SagaIterator {
  yield put(changeStatus('processing'));
  try {
    yield call(editMessage, payload);
    yield put(changeStatus('success'));
    yield put(requestUpdate());
  } catch {
    yield put(changeStatus('failure'));
  }
}

function* handleRequestRemoveMessage({ payload }: PayloadAction<string>): SagaIterator {
  yield put(changeStatus('processing'));
  try {
    yield call(removeMessage, payload);
    yield put(changeStatus('success'));
    yield put(requestUpdate());
  } catch {
    yield put(changeStatus('failure'));
  }
}

export function* watchAll(): SagaIterator {
  yield all([
    takeEvery(requestUpdateType, handleRequestUpdate),
    takeEvery(requestAddMessageType, handleRequestAddMessage),
    takeEvery(requestEditMessageType, handleRequestEditMessage),
    takeEvery(requestRemoveMessageType, handleRequestRemoveMessage)
  ]);
}

export function* update(): SagaIterator {
  while (true) {
    yield call(handleRequestUpdate);
    yield delay(1000);
  }
}

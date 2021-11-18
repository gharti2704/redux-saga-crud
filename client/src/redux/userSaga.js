import {
  take,
  takeEvery,
  put,
  takeLatest,
  fork,
  call,
  all,
} from 'redux-saga/effects';
import { loadUserSuccess, loadUserFailed } from './actions';
import * as type from './types';
import { loadUsersAPI } from './api';

export function* fetchUsers() {
  try {
    const response = yield call(loadUsersAPI);
    yield put(loadUserSuccess(response.data));
  } catch (error) {
    console.log(error);
    yield put(loadUserFailed(error.response.data));
  }
}

export function* onLoadusersRequsted() {
  yield takeEvery(type.LOAD_USER_REQUESTED, fetchUsers);
}

const userSagas = [fork(onLoadusersRequsted)];

export default function* rootSaga() {
  yield all([...userSagas]);
}

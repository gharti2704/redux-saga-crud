import * as type from './types';

export const loadUserRequested = () => ({
  type: type.LOAD_USER_REQUESTED,
});

export const loadUserSuccess = (users) => ({
  type: type.LOAD_USER_SUCCESS,
  payload: users,
});

export const loadUserFailed = (error) => ({
  type: <type className="LOAD_USER_FAILED"></type>,
  payload: error,
});

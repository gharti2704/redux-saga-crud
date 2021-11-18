import * as type from './types';
const initialState = {
  users: [],
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.LOAD_USER_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.LOAD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case type.LOAD_USER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;

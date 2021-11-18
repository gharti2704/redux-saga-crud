import * as type from './types';
const initialState = {
  users: [],
  loading: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.ADD_USER_REQUESTED:
      return {
        ...state,
        payload: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;

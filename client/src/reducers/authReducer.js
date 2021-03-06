import { SIGN_IN, SIGN_OUT, SIGN_UP, GET_CURRENT_USER } from '../actions/types';

const INITIAL_STATE = {
  isSignedIn: null,
  username: null,
  user_id: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, username: null };
    case GET_CURRENT_USER:
      return {
        ...state,
        isSignedIn: true,
        username: action.payload.username,
        user_id: action.payload.user_id,
      };
    case SIGN_UP:
      return state;
    default:
      return state;
  }
};

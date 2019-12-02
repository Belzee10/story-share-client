import { SET_ERROR, SET_USER } from './mutationTypes';

export default {
  [SET_USER]: (state, { user }) => {
    state.user = user;
  },

  [SET_ERROR]: (state, { error }) => {
    state.error = error;
  }
};

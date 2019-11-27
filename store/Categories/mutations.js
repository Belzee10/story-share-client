import { SET_CATEGORIES, SET_ERROR } from './mutationTypes';

export default {
  [SET_CATEGORIES]: (state, { categories }) => {
    state.categories = categories;
  },

  [SET_ERROR]: (state, { error }) => {
    state.error = error;
  }
};

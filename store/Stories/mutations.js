import { SET_STORIES, SET_ERROR } from './mutationTypes';

export default {
  [SET_STORIES]: (state, { stories }) => {
    state.stories = stories;
  },

  [SET_ERROR]: (state, { error }) => {
    state.error = error;
  }
};

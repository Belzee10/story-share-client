import {
  SET_STORIES,
  SET_ERROR,
  SET_POPULAR_STORIES,
  SET_POPULAR_ERROR
} from './mutationTypes';

export default {
  [SET_STORIES]: (state, { stories }) => {
    state.stories = stories;
  },

  [SET_ERROR]: (state, { error }) => {
    state.error = error;
  },

  [SET_POPULAR_STORIES]: (state, { stories }) => {
    state.popularStories = stories;
  },

  [SET_POPULAR_ERROR]: (state, { error }) => {
    state.errorPopular = error;
  }
};

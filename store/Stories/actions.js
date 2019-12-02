import * as logger from 'loglevel';
import {
  SET_STORIES,
  SET_ERROR,
  SET_POPULAR_STORIES,
  SET_POPULAR_ERROR,
  SET_STORY,
  SET_STORY_ERROR,
  SET_LOADING,
  SET_LOADING_POPULAR
} from './mutationTypes';
import { transformResponse } from '~/helpers';

export default {
  async getStories({ commit }) {
    try {
      const { result } = await this.$axios.$get('/stories');
      const stories = result.map(item => transformResponse(item));
      commit({
        type: SET_STORIES,
        stories
      });
    } catch (error) {
      commit({
        type: SET_ERROR,
        error: true
      });
      logger.error(`STORIES_ALL: **${error}**`);
    } finally {
      commit({
        type: SET_LOADING,
        loading: false
      });
    }
  },

  async getPopularStories({ commit }) {
    try {
      const { result } = await this.$axios.$get('/stories/popular');
      const stories = result.map(item => transformResponse(item));
      commit({
        type: SET_POPULAR_STORIES,
        stories
      });
    } catch (error) {
      commit({
        type: SET_POPULAR_ERROR,
        error: true
      });
      logger.error(`STORIES_POPULAR: **${error}**`);
    } finally {
      commit({
        type: SET_LOADING_POPULAR,
        loading: false
      });
    }
  },

  async getStory({ commit }, id) {
    try {
      const { result } = await this.$axios.$get(`/stories/${id}`);
      const story = transformResponse(result);
      commit({
        type: SET_STORY,
        story
      });
    } catch (error) {
      commit({
        type: SET_STORY_ERROR,
        error: true
      });
      logger.error(`STORIES_SINGLE: **${error}**`);
    }
  }
};

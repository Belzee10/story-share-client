import * as logger from 'loglevel';
import { SET_CATEGORIES, SET_ERROR } from './mutationTypes';
import { transformResponse } from '~/helpers';

export default {
  async getCategories({ commit }) {
    try {
      const { result } = await this.$axios.$get('/categories');
      const categories = result.map(item => transformResponse(item));
      commit({
        type: SET_CATEGORIES,
        categories
      });
    } catch (error) {
      commit({
        type: SET_ERROR,
        error: true
      });
      logger.error(`CATEGORIES_ALL: **${error}**`);
    }
  }
};

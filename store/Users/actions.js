import * as logger from 'loglevel';
import { SET_USER, SET_ERROR } from './mutationTypes';
import { transformResponse } from '~/helpers';

export default {
  async register({ commit }, data) {
    try {
      const { result } = await this.$axios.$post('/register', data);
      const user = transformResponse(result);
      this.$axios.setToken(user.token);
      this.app.router.push('/');
      commit({
        type: SET_USER,
        user
      });
    } catch (error) {
      commit({
        type: SET_ERROR,
        error: true
      });
      logger.error(`USERS_REGISTER: **${error}**`);
    }
  }
};

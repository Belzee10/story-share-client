import axios from 'axios';
import provokeArray from 'provoke-array';
import flushPromises from 'flush-promises';
import categoriesStore from '../index';
import { SET_CATEGORIES, SET_ERROR } from '../mutationTypes';

const url = '/categories';

const { actions, mutations } = categoriesStore;

describe('Categories Store', () => {
  describe('Actions', () => {
    test('should dispatch a "getCategories" action', async () => {
      const context = {
        commit: jest.fn()
      };
      const categories = provokeArray();
      axios.$get.mockResolvedValueOnce({ result: categories });

      actions.getCategories.bind({ $axios: axios })(context);
      expect(axios.$get).toHaveBeenCalledWith(url);
      await flushPromises();
      expect(context.commit).toHaveBeenCalledWith({
        type: SET_CATEGORIES,
        categories
      });
    });
  });

  describe('Mutations', () => {
    test('should set "state.categories" to categories', () => {
      const categories = provokeArray();
      const state = {
        categories: []
      };
      mutations[SET_CATEGORIES](state, { categories });
      expect(state.categories).toEqual(categories);
    });

    test('should set "state.error" to error', () => {
      const error = true;
      const state = {
        error: false
      };
      mutations[SET_ERROR](state, { error });
      expect(state.error).toEqual(error);
    });
  });
});

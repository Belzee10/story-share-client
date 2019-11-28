import axios from 'axios';
import Vuex from 'vuex';
import { createLocalVue } from '@vue/test-utils';
// import { createStore } from '~/config/tests.helpers';
// import provokeArray from 'provoke-array';
// import flushPromises from 'flush-promises';
import CategoriesStore from '../index';

const testedAction = (context = { commit: jest.fn() }, payload = {}) => {
  return CategoriesStore.actions.getCategories.bind({ $axios: axios })(
    context,
    payload
  );
};

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Categories Store', () => {
  test('should dispatch a "getCategories" action and update the store', async () => {
    // const newStore = { ...CategoriesStore };
    // const store = new Vuex.Store(newStore);
    await testedAction();
    expect(axios.$get).toHaveBeenCalled();
  });
});

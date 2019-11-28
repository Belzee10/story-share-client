import axios from 'axios';
import provokeArray from 'provoke-array';
import flushPromises from 'flush-promises';
import storiesStore from '../index';
import { SET_STORIES, SET_ERROR } from '../mutationTypes';

const url = '/stories';

const { actions, mutations } = storiesStore;

describe('Stories Store', () => {
  describe('Actions', () => {
    test('should dispatch a "getStories" action', async () => {
      const context = {
        commit: jest.fn()
      };
      const stories = provokeArray();
      axios.$get.mockResolvedValueOnce({ result: stories });

      actions.getStories.bind({ $axios: axios })(context);
      expect(axios.$get).toHaveBeenCalledWith(url);
      await flushPromises();
      expect(context.commit).toHaveBeenCalledWith({
        type: SET_STORIES,
        stories
      });
    });
  });

  describe('Mutations', () => {
    test('should set "state.stories" to stories', () => {
      const stories = provokeArray();
      const state = {
        stories: []
      };
      mutations[SET_STORIES](state, { stories });
      expect(state.stories).toEqual(stories);
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

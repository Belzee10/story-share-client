import actions from './actions';
import mutations from './mutations';

const state = () => ({
  stories: [],
  error: false,
  popularStories: [],
  errorPopular: false
});

export default {
  state,
  actions,
  mutations
};

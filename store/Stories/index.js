import actions from './actions';
import mutations from './mutations';

const state = () => ({
  stories: [],
  popularStories: [],
  story: null,
  error: false,
  errorPopular: false,
  errorStory: false,
  loading: true,
  loadingPopularStories: true
});

export default {
  state,
  actions,
  mutations
};

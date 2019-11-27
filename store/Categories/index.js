import actions from './actions';
import mutations from './mutations';

const state = () => ({
  categories: [],
  error: false
});

export default {
  state,
  actions,
  mutations
};

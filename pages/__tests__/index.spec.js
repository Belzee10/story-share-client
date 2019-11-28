import provokeArray from 'provoke-array';
import { Store } from 'vuex-mock-store';
import index from '../index';
import { createWrapper } from '~/config/tests.helpers';

describe('Page index.vue', () => {
  const stories = provokeArray();
  const store = new Store({
    state: {
      Stories: {
        stories
      }
    }
  });
  test('should render all the "stories"', () => {
    const wrapper = createWrapper(index, { store });
    expect(wrapper.findAll('.story-card')).toHaveLength(stories.length);
  });

  // test('should render correctly', () => {
  //   const wrapper = createWrapper(Navbar, { store });
  //   expect(wrapper.element).toMatchSnapshot();
  // });
});

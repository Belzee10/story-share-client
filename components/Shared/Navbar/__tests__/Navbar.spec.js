import provokeArray from 'provoke-array';
import { Store } from 'vuex-mock-store';
import Navbar from '../Navbar';
import { createWrapper } from '~/config/tests.helpers';

describe('Navbar.vue', () => {
  const categories = provokeArray(3, i => ({ name: `Name: ${i}` }));
  const store = new Store({
    state: {
      Categories: {
        categories
      }
    }
  });
  test('should render all the "categories"', () => {
    const wrapper = createWrapper(Navbar, { store });
    expect(wrapper.findAll('.category-link')).toHaveLength(
      categories.length + 1
    );
  });

  test('should render correctly', () => {
    const wrapper = createWrapper(Navbar, { store });
    expect(wrapper.element).toMatchSnapshot();
  });
});

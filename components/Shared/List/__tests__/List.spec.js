import { createWrapper } from '~/config/tests.helpers';
import List from '../List';
import provokeArray from 'provoke-array';

describe('List.vue', () => {
  test('should render correctly', () => {
    const items = provokeArray(3, i => ({ id: i }));
    const wrapper = createWrapper(List, {
      props: {
        items
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});

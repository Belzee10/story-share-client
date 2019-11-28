import { createWrapper } from '~/config/tests.helpers';
import Author from '../Author';

describe('Author.vue', () => {
  test('should render correctly', () => {
    const wrapper = createWrapper(Author);
    expect(wrapper.element).toMatchSnapshot();
  });
});

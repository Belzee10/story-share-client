import Footer from '../Footer.vue';
import { createWrapper } from '~/config/tests.helpers';

describe('Footer.vue', () => {
  test('should render correctly', () => {
    const wrapper = createWrapper(Footer);
    expect(wrapper.element).toMatchSnapshot();
  });
});

import mockAxios from 'jest-mock-axios';

export default {
  ...mockAxios,
  $get: jest.fn(() => Promise.resolve([]))
};

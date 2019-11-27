import { transformResponse } from '../index';

describe('Helpers', () => {
  test('should remove the keys from the Object', () => {
    const item = {
      name: 'name',
      __v: 'v'
    };
    expect(transformResponse(item)).toEqual({ name: 'name' });
  });

  test('should transform the "_id" key by "id"', () => {
    const item = {
      _id: 'id'
    };
    expect(transformResponse(item)).toEqual({ id: 'id' });
  });
});

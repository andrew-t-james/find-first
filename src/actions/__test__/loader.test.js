import { isLoadingAction } from '../loader';

describe('isLoadingAction', () => {
  test('should have a type IS_LOADING and return false', () => {
    const expected = {
      type: 'IS_LOADING',
      isLoading: false
    };

    const result = isLoadingAction(false);
    expect(result).toEqual(expected);
  });

  test('should have a type IS_LOADING and return true', () => {
    const expected = {
      type: 'IS_LOADING',
      isLoading: true
    };

    const result = isLoadingAction(true);
    expect(result).toEqual(expected);
  });
});

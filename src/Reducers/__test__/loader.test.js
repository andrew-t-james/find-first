import { loaderReducer } from '../loader';
import { isLoadingAction } from '../../Actions/loader';

describe('loaderReducer', () => {
  test('should return a true if state is false', () => {
    const mockSate = false;

    const result = loaderReducer(mockSate, isLoadingAction(true));
    expect(result).toBe(true);
  });

  test('should return false if state is true', () => {
    const mockSate = true;

    const result = loaderReducer(mockSate, isLoadingAction(false));
    expect(result).toBe(false);
  });

  test('should return default state', () => {

    const result = loaderReducer(undefined, jest.fn());
    expect(result).toBe(false);
  });
});


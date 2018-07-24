import { menuReducer } from '../menu';
import { toggleMenu } from '../../Actions/menu';
const mockAction = jest.fn();

describe('menuReducer', () => {
  test('should toggle boolean false to true', () => {
    const expected = false;
    const result = menuReducer(null, toggleMenu());
    expect(result).toBe(true);
  });

  test('should toggle boolean true to false', () => {
    const expected = true;
    const result = menuReducer(true, toggleMenu());
    expect(result).toBe(false);
  });

  test('should return default state', () => {
    const expected = false;
    const result = menuReducer(false, mockAction);
    expect(result).toBe(expected);
  });

});

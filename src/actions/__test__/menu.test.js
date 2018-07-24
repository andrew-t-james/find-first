import { toggleMenu } from '../menu';

describe('toggleMenu', () => {
  test('should return a type of TOGGLE_MENU', () => {
    const expected = {
      type: 'TOGGLE_MENU'
    };
    const result = toggleMenu();
    expect(result).toEqual(expected);
  });

});

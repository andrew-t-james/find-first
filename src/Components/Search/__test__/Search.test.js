import React from 'react';
import { shallow } from 'enzyme';
import { Search } from '../Search';

describe('<Search />', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Search />));

  describe('handleUpdate', () => {
    test('should update state onChange', () => {
      const mockState = {
        query: ''
      };
      const mockEvent = {
        preventDefault: jest.fn(),
        target: {
          name: 'query',
          value: 'my hot job'
        }
      };

      wrapper.instance().handleUpdate(mockEvent);
      expect(wrapper.state('query')).toBe('my hot job');
    });
  });

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

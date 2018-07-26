import React from 'react';
import { shallow } from 'enzyme';
import { Header, mapStateToProps } from '../Header';

describe('<Header />', () => {
  let wrapper;
  const mockUser = {
    name: 'Joben',
    image: 'some-url-here'
  };

  beforeEach(() => wrapper = shallow(<Header user={mockUser}/>));

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    const expected = {
      user: mockUser
    };
    const mockState = {
      user: mockUser
    };
    const result = mapStateToProps(mockState);
    expect(result).toEqual(expected);
  });

});

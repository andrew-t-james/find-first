import React from 'react';
import { shallow } from 'enzyme';
import { Header, mapStateToProps, mapDispatchToProps } from '../Header';
import { toggleMenu } from '../../../Actions/menu';

describe('<Header />', () => {
  let wrapper;
  const mockUser = {
    name: 'Joben',
    image: 'some-url-here'
  };
  const mockState = {
    savedJobs: [1, 2]
  };
  const mockSliderAction = true;

  beforeEach(() => wrapper = shallow(<Header
    toggleMenu={mockSliderAction}
    user={mockUser}
    recentJobs={mockState}
  />
  ));

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

  describe('mapDispatchToProps', () => {
    test('should call dispatch when toggleMenu is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = toggleMenu();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.toggleMenu();

      expect(mockDispatch).toHaveBeenCalled();
    });
  });

});

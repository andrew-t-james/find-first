import React from 'react';
import { shallow } from 'enzyme';
import { Home, mapStateToProps, mapDispatchToProps } from '../Home';
import { toggleMenu } from '../../../Actions/menu';

jest.mock('../../../firebase/firebase.js');

describe('<Home />', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Home toggleMenu={jest.fn()} />));

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    test('should map slideMenuActive to state', () => {
      const mockState = {
        slideMenuActive: true
      };

      const expectedState = {
        slideMenuActive: true
      };

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expectedState);
    });
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

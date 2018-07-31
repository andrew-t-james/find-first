import React from 'react';
import { shallow } from 'enzyme';
import { Home, mapStateToProps, mapDispatchToProps } from '../Home';
import { toggleMenu } from '../../../Actions/menu';

jest.mock('../../../firebase/firebase.js');
jest.mock('../../../helpers/api-helpers.js');

describe('<Home />', () => {
  let wrapper;
  const mockGithubJobsRequest = jest.fn();
  const mockSlideAction = true;
  const mockToggleMenu = jest.fn();

  beforeEach(() => wrapper = shallow(
    <Home
      toggleMenu={mockToggleMenu}
      slideMenuActive={mockSlideAction}
      githubJobs={mockGithubJobsRequest}
    />
  ));


  test.skip('should set slideMenuActive to false', () => {
    console.log(wrapper.debug());
    // wrapper.find('e').simulate('click');
    wrapper.find('.home__menu--icon').simulate('click');
    console.log(wrapper.debug());
    // expect(mockSlideAction).toBe(false);
    expect(mockToggleMenu).toHaveBeenCalled();
  });

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

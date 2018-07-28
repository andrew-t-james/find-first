import React from 'react';
import { shallow } from 'enzyme';
import { Footer, mapDispatchToProps } from '../Footer';
import { googleSignOutAction } from '../../../Actions/auth';

jest.mock('../../../firebase/firebase.js');

describe('<Footer />', () => {
  let wrapper;
  const mockGoogleSignOut = jest.fn();
  beforeEach(() => wrapper = shallow(<Footer googleLogout={mockGoogleSignOut}/>));

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should call handleGoogleSignOut onClick', () => {
    wrapper.find('.sign-out').simulate('click');

    expect(mockGoogleSignOut).toHaveBeenCalled();
  });

  describe('mapDispatchToProps', () => {
    test('should call dispatch googleLogout is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = googleSignOutAction();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.googleLogout();

      expect(mockDispatch).toHaveBeenCalled();
    });
  });

});

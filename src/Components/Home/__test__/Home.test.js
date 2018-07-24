import React from 'react';
import { shallow } from 'enzyme';
import { Home, mapStateToProps, mapDispatchToProps } from '../Home';
import { toggleMenu } from '../../../Actions/menu';
import { githubJobsAction } from '../../../Actions/github';
import { githubApiRequest } from '../../../helpers/api-helpers';

jest.mock('../../../firebase/firebase.js');
jest.mock('../../../helpers/api-helpers.js');

describe('<Home />', () => {
  let wrapper;
  const mockGithubJobsRequest = jest.fn();
  beforeEach(() => wrapper = shallow(
    <Home
      toggleMenu={jest.fn()}
      githubJobs={mockGithubJobsRequest}
    />
  ));

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should call githubApiRequest on mount', async () => {
    await wrapper.instance().componentDidMount();
    expect(mockGithubJobsRequest).toHaveBeenCalled();
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

    test('should call dispatch when gitHubJobs is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = githubJobsAction();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.githubJobs();
      expect(mockDispatch).toHaveBeenCalled();
    });
  });

});

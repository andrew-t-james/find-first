import React from 'react';
import { shallow } from 'enzyme';
import { Dashboard, mapDispatchToProps, mapStateToProps } from '../Dashboard';
import { githubJobsAction } from '../../../Actions/github';

describe('<Dashboard />', () => {
  let wrapper;
  const mockGithubJobs = jest.fn();
  const mockJobs = [];

  beforeEach(() => wrapper = shallow(
    <Dashboard
      jobs={mockJobs}
      githubJobs={mockGithubJobs}
    />
  ));

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should call githubApiRequest on mount', async () => {
    await wrapper.instance().componentDidMount();
    expect(mockGithubJobs).toHaveBeenCalled();
  });

  describe('mapStateToProps', () => {
    test('should map githubJobs to props', () => {
      const mockState = {
        githubJobs: [
          {
            id: 1,
            title: 'Dev'
          }
        ]
      };

      const expectedState = {
        jobs: [
          {
            id: 1,
            title: 'Dev'
          }
        ]
      };

      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expectedState);
    });
  });

  describe('mapDispatchToProps', () => {
    test('should call dispatch when gitHubJobs is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = githubJobsAction();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.githubJobs();
      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});

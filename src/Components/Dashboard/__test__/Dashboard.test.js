import React from 'react';
import { shallow } from 'enzyme';
import { Dashboard, mapDispatchToProps, mapStateToProps } from '../Dashboard';
import { githubJobsAction } from '../../../Actions/github';
import { getSavedJobsFromFirebase } from '../../../thunks/firebase';

jest.mock('../../../firebase/firebase.js');

describe('<Dashboard />', () => {
  let wrapper;
  const mockGithubJobs = jest.fn();
  const mockGetSavedJobs = jest.fn();
  const mockJobs = [];

  beforeEach(() => wrapper = shallow(
    <Dashboard
      jobs={mockJobs}
      getSavedJobs={mockGetSavedJobs}
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

  describe('filterJobs', () => {
    test('should filter jobs caseInsensitive', () => {
      const mockJobs = [
        {
          title: 'Front End',
          id:1
        },
        {
          title: 'VP Engineering',
          id: 2
        }
      ];
      const expected = [
        {
          title: 'Front End',
          id:1
        }
      ];

      wrapper = shallow(
        <Dashboard
          jobs={mockJobs}
          githubJobs={mockGithubJobs}
        />);

      wrapper.instance().filterJobs('front');
      expect(wrapper.state('jobs')).toEqual(expected);
    });

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

    test('should call dispatch when getSavedJobsFromFirebase is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = getSavedJobsFromFirebase();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.getSavedJobs();

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});

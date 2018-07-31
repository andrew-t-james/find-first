import React from 'react';
import { shallow } from 'enzyme';
import { JobsContainer, mapStateToProps, mapDispatchToProps } from '../JobsContainer';
import { getSavedJobsFromFirebase } from '../../../thunks/firebase';
import { toggleMenu } from '../../../Actions/menu';

jest.mock('../../../firebase/firebase.js');

describe('<JobsContainer />', () => {
  let wrapper;
  const mockSavedJobs = [
    {
      title: 'Fire Job Here',
      location: 'Remote',
      id: 1,
      description: 'description'
    },
    {
      title: 'Fire Job Here',
      location: 'Remote',
      id: 2,
      description: 'description'
    },
    {
      title: 'Fire Job Here',
      location: 'Remote',
      id: 3,
      description: 'description'
    }
  ];

  const mockGetSavedJobs = jest.fn();

  beforeEach(() => wrapper = shallow(<JobsContainer getSavedJobs={mockGetSavedJobs}/>));

  test('should call getSavedJobs onMount', () => {
    wrapper.instance().componentDidMount();
    expect(mockGetSavedJobs).toHaveBeenCalled();
  });

  test('should call have a default state for savedJobs', () => {
    wrapper.instance().componentDidMount();
    expect(wrapper.state('savedJobs')).toEqual([]);
  });

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    test('should map savedJobs to props', () => {
      const mockState = {
        savedJobs: mockSavedJobs
      };
      const expected = {
        savedJobs: mockSavedJobs
      };
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });

    test('should map isLoading to props', () => {
      const mockState = {
        isLoading: true
      };
      const expected = {
        isLoading: true
      };
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    test('should call dispatch with action', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = getSavedJobsFromFirebase();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.getSavedJobs();

      expect(mockDispatch).toHaveBeenCalled();
    });

    test('should call dispatch when toggleMenu is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = toggleMenu();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.toggleMenu();

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import { JobDetail, mapDispatchToProps, mapStateToProps } from '../JobDetail';
import { addJobToFirebase } from '../../../thunks/firebase';

jest.mock('../../../firebase/firebase.js');

describe('<JobDetail />', () => {
  let wrapper;
  const mockJobListing = [
    {
      id: 1,
      title: 'Title',
      description: 'description'
    },
    {
      id: 2,
      title: 'Title',
      description: 'description'
    }
  ];

  const mockSavedJobs = [...mockJobListing];
  const mockSaveJob = jest.fn();

  beforeEach(() => wrapper = shallow(
    <JobDetail
      savedJobs={mockSavedJobs}
      saveJobToFirebase={mockSaveJob}
      {...mockJobListing}
    />
  ));

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should call saveNewJob on click', () => {
    const spy = jest.spyOn(wrapper.instance(), 'saveNewJob');
    expect(spy).toHaveBeenCalledTimes(0);
    wrapper.find('.job-detail__save-job--button').simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  test('should not call saveJobToFirebase', () => {
    const mockJobToSave = {
      id: 2,
      title: 'title'
    };
    wrapper.instance().saveNewJob(mockJobToSave);
    wrapper.instance().saveNewJob(mockJobToSave);
    expect(mockSaveJob).toHaveBeenCalledTimes(1);
  });


  describe('mapStateToProps', () => {
    test('should map savedJobs to props', () => {
      const expected = {
        savedJobs: mockSavedJobs
      };
      const mockState = {
        savedJobs: mockSavedJobs
      };
      const result = mapStateToProps(mockState);
      expect(result).toEqual(expected);
    });

  });

  describe('mapDispatchToProps', () => {
    test('should call dispatch with addJobToFirebase', () => {
      const mockDispatch = jest.fn();
      const mockJob = {
        title: 'title',
        description: 'description',
        image: 'some-url-here',
        url: 'another-url-here'
      };
      const actionToDispatch = addJobToFirebase(mockJob);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.saveJobToFirebase(mockJob);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});

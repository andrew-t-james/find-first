import React from 'react';
import { shallow } from 'enzyme';
import { JobDetail, mapDispatchToProps } from '../JobDetail';
import { addJobToFirebase } from '../../../thunks/firebase';

jest.mock('../../../firebase/firebase.js');

describe('<JobDetail />', () => {
  let wrapper;
  const mockJobListing = {
    id: 1,
    title: 'Title',
    description: 'description'
  };

  const mockSaveJob = jest.fn();

  beforeEach(() => wrapper = shallow(
    <JobDetail
      saveJob={mockSaveJob}
      {...mockJobListing}/>
  ));

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should call saveJob on click', () => {
    wrapper.find('.job-detail__save-job--button').simulate('click');
    expect(mockSaveJob).toHaveBeenCalled();
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
      mappedProps.saveJob(mockJob);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});

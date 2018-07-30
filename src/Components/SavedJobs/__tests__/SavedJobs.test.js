import React from 'react';
import { shallow } from 'enzyme';
import { SavedJobs } from '../SavedJobs';

describe('<SavedJobs />', () => {
  let wrapper;
  const mockJobs = [{title: 'job-1', id: 1}, {title: 'job-2', id: 2}];

  beforeEach(() => wrapper = shallow(<SavedJobs jobs={mockJobs} />));

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

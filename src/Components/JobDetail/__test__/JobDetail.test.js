import React from 'react';
import { shallow } from 'enzyme';
import { JobDetail } from '../JobDetail';

describe('<JobDetail />', () => {
  let wrapper;
  const mockJobListing = {
    id: 1,
    title: 'Title',
    description: 'description'
  };

  beforeEach(() => wrapper = shallow(<JobDetail {...mockJobListing}/>));

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

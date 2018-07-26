import React from 'react';
import { shallow } from 'enzyme';
import Card from '../Card';

describe('<Card />', () => {
  let wrapper;
  const mockJobs = [
    {
      title: 'title',
      id: 2,
      image:'url-here',
      description: 'description',
      location: 'New City',
      type: 'remote'
    }
  ];

  beforeEach(() => wrapper = shallow(<Card {...mockJobs}/>));

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

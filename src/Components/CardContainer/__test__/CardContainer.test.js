import React from 'react';
import { shallow } from 'enzyme';
import { CardContainer, mapStateToProps } from '../CardContainer';
describe('<CardContainer />', () => {
  let wrapper;
  const mockJobs = [
    {
      id: 1,
      title: 'A dope dev job',
      location: 'remote'
    },
    {
      id: 2,
      title: 'Another dope dev job',
      location: 'remote'
    }
  ];

  beforeEach(() => wrapper = shallow(<CardContainer jobs={mockJobs} />));

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

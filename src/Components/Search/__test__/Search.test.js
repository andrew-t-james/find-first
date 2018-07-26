import React from 'react';
import { shallow } from 'enzyme';
import { Search } from '../Search';

describe('<Search />', () => {
  let wrapper;
  const mockFilter = jest.fn();
  const mockJobs = [
    {
      title: 'title',
      id: 1,
      description: 'description',
      image: 'url-here'
    },
    {
      title: 'title',
      id: 2,
      description: 'description',
      image: 'url-here'
    }
  ];

  beforeEach(() => wrapper = shallow(<Search filterJobs={mockFilter} jobs={mockJobs}/>));

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

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

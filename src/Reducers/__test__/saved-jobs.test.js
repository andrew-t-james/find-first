import { savedJobsReducer } from '../saved-jobs';
import { saveJobAction } from '../../Actions/saved-jobs';

describe('savedJobsReducer', () => {
  const mockJobToSave = {
    title: 'title',
    id: 1,
    url: 'some-url',
    image: 'some-other-url'
  };

  test('should return state with job added', () => {
    const expected = [...mockJobToSave];
    const result = savedJobsReducer([], saveJobAction(mockJobToSave));
    expect(result).toEqual(expected);
  });

  test('should return default state', () => {
    const result = savedJobsReducer(undefined, jest.fn());
    expect(result).toEqual([]);
  });
});

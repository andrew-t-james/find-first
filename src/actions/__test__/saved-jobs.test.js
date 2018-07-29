import { saveJobAction } from '../saved-jobs';

describe('saveJobAction', () => {
  const mockJob = {
    title: 'title',
    description: 'description',
    id: 1,
    image: 'url',
    url: 'url'
  };
  test('should have a type SAVE_JOB', () => {
    const expected = {
      type: 'SAVE_JOB',
      job: mockJob
    };

    const result = saveJobAction(mockJob);
    expect(result).toEqual(expected);
  });

});

import { isLoadingAction } from '../../Actions/loader';
import { addJobToFirebase } from '../firebase';
import database from '../../firebase/firebase';
import { saveJobAction } from '../../Actions/saved-jobs';


jest.mock('../../firebase/firebase.js');

describe('addJobToFirebase', () => {
  let mockDispatch;
  const mockJob = {
    title: 'title',
    description: 'description',
    url: 'some-url'
  };

  beforeEach(() => mockDispatch = jest.fn());

  test('should call dispatch with isLoadingAction with a parameter of true', async () => {
    const thunk = addJobToFirebase(mockJob);
    const actionToDispatch = isLoadingAction(true);

    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  test('should call dispatch with isLoadingAction with a parameter of false', async () => {
    const thunk = addJobToFirebase(mockJob);
    const actionToDispatch = isLoadingAction(false);

    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  test('should call dispatch with saveJobAction', async () => {
    const thunk = addJobToFirebase(mockJob);
    const mockLoadingAction = isLoadingAction(true);

    const actionToDispatch = saveJobAction({
      id: 'kdjfl2141893',
      ...mockJob
    });
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

});

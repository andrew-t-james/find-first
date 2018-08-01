import { isLoadingAction } from '../../Actions/loader';
import { addJobToFirebase, getSavedJobsFromFirebase } from '../firebase';
import database from '../../firebase/firebase';
import { saveJobAction } from '../../Actions/saved-jobs';


jest.mock('../../firebase/firebase.js');

describe('addJobToFirebase', () => {
  let mockDispatch;
  const getState = () => ({
    user: {
      id: 1
    }
  });

  const mockJob = {
    title: 'title',
    description: 'description',
    url: 'some-url'
  };

  beforeEach(() => {
    mockDispatch = jest.fn();
  });

  test('should call dispatch with isLoadingAction with a parameter of true', async () => {
    const thunk = addJobToFirebase(mockJob);
    const actionToDispatch = isLoadingAction(true);

    await thunk(mockDispatch, getState);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  test('should call dispatch with isLoadingAction with a parameter of false', async () => {
    const thunk = addJobToFirebase(mockJob);
    const actionToDispatch = isLoadingAction(false);

    await thunk(mockDispatch, getState);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});

describe('getSavedJobsFromFirebase', () => {
  let mockDispatch;
  const mockJob = {
    title: 'title',
    description: 'description',
    url: 'some-url'
  };

  const getState = () => ({
    user: {
      id: 1
    }
  });

  const mockJobsResponse = [mockJob, mockJob];

  beforeEach(() => mockDispatch = jest.fn());

  test('should call dispatch with isLoadingAction with a parameter of true', async () => {
    const thunk = getSavedJobsFromFirebase(mockJob);
    const actionToDispatch = isLoadingAction(true);

    await thunk(mockDispatch, getState);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  test('should call dispatch with isLoadingAction with a parameter of false', async () => {
    const thunk = getSavedJobsFromFirebase(mockJob);
    const actionToDispatch = isLoadingAction(false);

    await thunk(mockDispatch, getState);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  test('should call dispatch with saveJobAction', async () => {
    const thunk = getSavedJobsFromFirebase();
    const actionToDispatch = saveJobAction(mockJobsResponse);

    await thunk(mockDispatch, getState);
    expect(mockDispatch).toHaveBeenCalled();
  });
});

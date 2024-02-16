import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  UserCredential,
} from 'firebase/auth';
import {
  addDoc,
  collection,
  deleteDoc,
  updateDoc,
  arrayRemove,
  arrayUnion,
  orderBy,
  query,
  DocumentReference,
} from 'firebase/firestore';
import { services } from './index.ts';

jest.mock('firebase/auth');
jest.mock('firebase/firestore', () => ({
  __esModule: true,
  getFirestore: jest.fn(),
  collection: jest.fn(),
  query: jest.fn(),
  orderBy: jest.fn(),
  serverTimestamp: jest.fn().mockReturnValue(new Date()),
  addDoc: jest.fn().mockResolvedValueOnce(Promise<void>),
  updateDoc: jest.fn().mockResolvedValue(Promise<void>),
  deleteDoc: jest.fn(),
  doc: jest.fn().mockReturnValue('Doc Ref test'),
  arrayRemove: jest.fn(),
  arrayUnion: jest.fn(),
}));
jest.mock('../firebase.ts', () => ({
  auth: {
    currentUser: {
      displayName: 'Test User',
      email: 'test@example.com',
      photoURL: 'my-test-photo.jpg',
    },
    updateProfile: jest.fn().mockResolvedValue(Promise<void>),
    createUserWithEmailAndPassword: jest.fn().mockResolvedValue({
      user: {
        displayName: 'Test User',
        email: 'test@example.com',
      },
    } as unknown as UserCredential),
    signInWithEmailAndPassword: jest.fn(),
    signInWithPopup: jest.fn(),
    signOut: jest.fn(),
    getIdToken: jest.fn(),
  },
}));

beforeEach(() => {
  jest.clearAllMocks();
});

describe('services', () => {
  it('should be a function', () => {
    expect(typeof services).toBe('function');
  });
});

describe('createUser', () => {
  it('should call createUserWithEmailAndPassword method', async () => {
    const { createUser } = services();
    const email = 'test@example.com';
    const password = 'password123';
    createUser(email, password);
    expect(createUserWithEmailAndPassword).toHaveBeenCalled();
  });
});

describe('updateUser', () => {
  it('should call updateProfile method', async () => {
    const { updateUser } = services();
    const options = { displayName: 'New name' };
    updateUser(options);
    expect(updateProfile).toHaveBeenCalled();
  });
});

describe('userLogin', () => {
  it('should call signInWithEmailAndPassword method', async () => {
    const { userLogin } = services();
    const email = 'test@example.com';
    const password = 'password123';
    userLogin(email, password);
    expect(signInWithEmailAndPassword).toHaveBeenCalled();
  });
});

describe('googleLogin', () => {
  it('should call signInWithPopup method', async () => {
    const { googleLogin } = services();
    googleLogin();
    expect(signInWithPopup).toHaveBeenCalled();
  });
});

describe('getCurrentUser', () => {
  it('should return the current user object', async () => {
    const { getCurrentUser } = services();
    const user = getCurrentUser();
    expect(user).toEqual({
      displayName: 'Test User',
      email: 'test@example.com',
      photoURL: 'my-test-photo.jpg',
    });
  });
});

describe('getEmail', () => {
  it("should return the current user's email", async () => {
    const { getEmail } = services();
    const email = getEmail();
    expect(email).toBe('test@example.com');
  });
});

describe('getDisplayName', () => {
  it("should return the current user's display name", async () => {
    const { getDisplayName } = services();
    const name = getDisplayName();
    expect(name).toBe('Test User');
  });
});

describe('getProfilePicture', () => {
  it("should return the current user's profile picture url", async () => {
    const { getProfilePicture } = services();
    const pic = getProfilePicture();
    expect(pic).toBe('my-test-photo.jpg');
  });
});

describe('userLogout', () => {
  it('should call signInWithEmailAndPassword', async () => {
    const { userLogout } = services();
    userLogout();
    expect(signOut).toHaveBeenCalled();
  });
});

describe('getPostsRef', () => {
  const { getPostsRef } = services();
  (collection as jest.Mock).mockReturnValue({});
  (query as jest.Mock).mockReturnValue({ query: 'test-data' });
  (orderBy as jest.Mock).mockReturnValue({});
  const ref = getPostsRef();

  it('should return a query object', async () => {
    expect(ref).toEqual({ query: 'test-data' });
  });

  it('should call collection method', async () => {
    getPostsRef();
    expect(collection).toHaveBeenCalled();
  });

  it('should order by time with descending order', async () => {
    getPostsRef();
    expect(orderBy).toHaveBeenCalledWith('time', 'desc');
  });
});

describe('createPost', () => {
  const { createPost } = services();

  it('should call addDoc method', async () => {
    const text = 'My new post text';
    createPost(text);
    expect(addDoc).toHaveBeenCalled();
  });

  it('should throw an error if addDoc fails', async () => {
    const text = 'My new post text';
    const errorMessage = 'Failed to add post';
    (addDoc as jest.MockedFunction<typeof addDoc>).mockRejectedValueOnce(
      new Error(errorMessage)
    );
    await expect(createPost(text)).rejects.toThrow(errorMessage);
  });
});

describe('editPost', () => {
  const { editPost } = services();

  it('should call updateDoc method', async () => {
    const text = 'My new post text';
    const docId = '0123456789';
    editPost(text, docId);
    expect(updateDoc).toHaveBeenCalled();
  });

  it('should throw an error if updateDoc fails', async () => {
    const newText = 'Updated post text';
    const docId = '0123456789';
    const errorMessage = 'Failed to update post';
    (updateDoc as jest.MockedFunction<typeof updateDoc>).mockRejectedValueOnce(
      new Error(errorMessage)
    );
    await expect(editPost(newText, docId)).rejects.toThrow(errorMessage);
  });
});

describe('deletePost', () => {
  const { deletePost } = services();

  it('should call deleteDoc method', async () => {
    const docId = '0123456789';
    deletePost(docId);
    expect(deleteDoc).toHaveBeenCalled();
  });

  it('should throw an error if deleteDoc fails', async () => {
    const docId = '0123456789';
    const errorMessage = 'Failed to delete post';
    (deleteDoc as jest.MockedFunction<typeof deleteDoc>).mockRejectedValueOnce(
      new Error(errorMessage)
    );
    await expect(deletePost(docId)).rejects.toThrow(errorMessage);
  });
});

describe('addLike', () => {
  const { addLike } = services();
  const docRef = { id: '0123456789' } as DocumentReference;

  it('should call updateDoc method', async () => {
    addLike(docRef);
    expect(updateDoc).toHaveBeenCalled();
  });

  it('should call arrayUnion method', async () => {
    addLike(docRef);
    expect(arrayUnion).toHaveBeenCalled();
  });
});

describe('removeLike', () => {
  const { removeLike } = services();
  const docRef = { id: '0123456789' } as DocumentReference;

  it('should call updateDoc method', async () => {
    removeLike(docRef);
    expect(updateDoc).toHaveBeenCalled();
  });

  it('should call arrayRemove method', async () => {
    removeLike(docRef);
    expect(arrayRemove).toHaveBeenCalled();
  });
});

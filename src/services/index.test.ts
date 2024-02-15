/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  UserCredential,
} from 'firebase/auth';
import {
  DocumentReference,
  // Query,
  // CollectionReference,
  // DocumentData,
//   doc,
//   addDoc,
  collection,
//   serverTimestamp,
//   deleteDoc,
  // updateDoc,
//   arrayRemove,
//   arrayUnion,
//   DocumentReference,
  orderBy,
  query,
} from 'firebase/firestore';
// import { auth, db } from '../firebase.ts';
import { services } from './index.ts';

jest.mock('firebase/auth')
jest.mock('firebase/firestore', () => ({
  __esModule: true,
  getFirestore: jest.fn(),
  collection: jest.fn(),
  query: jest.fn(),
  orderBy: jest.fn(),
}));
jest.mock('../firebase.ts', () => ({
  auth: {
    currentUser: {
      displayName: 'Test User',
      email: 'test@example.com',
      photoURL: 'my-test-photo.jpg'
    },
    updateProfile: jest.fn().mockResolvedValue(Promise<void>),
    createUserWithEmailAndPassword: jest.fn().mockResolvedValue({ user: {
      displayName: 'Test User',
      email: 'test@example.com',
  }} as unknown as UserCredential),
    signInWithEmailAndPassword: jest.fn(),
    signInWithPopup: jest.fn(),
    signOut: jest.fn(),
    getIdToken: jest.fn(),
  },
  db: {
    collection: jest.fn().mockReturnThis(),
    addDoc: jest.fn(),
    updateDoc: jest.fn().mockResolvedValue(Promise<void>).mockRejectedValue(new Error('test error')),
    deleteDoc: jest.fn(),
    doc: jest.fn().mockReturnValue(DocumentReference),
  },
}));

// const collection : unknown = jest.fn(() => {
//   return {
//     doc: jest.fn(() => {
//       return {
//         collection: collection,
//         update: jest.fn(() => Promise.resolve(true)),
//         onSnapshot: jest.fn(() => Promise.resolve(true)),
//         get: jest.fn(() => Promise.resolve(true)),
//         query: jest.fn(() => Promise.resolve(true)),
//         orderBy: jest.fn(() => Promise.resolve(true))
//       }
//     }),
//     where: jest.fn(() => {
//       return {
//         get: jest.fn(() => Promise.resolve(true)),
//         onSnapshot: jest.fn(() => Promise.resolve(true)),
//       }
//     })
//   }
// });

// const Firestore = () => {
//   return {
//     collection
//   }
// }

// Firestore.FieldValue = {
//   serverTimestamp: jest.fn()
// }

beforeEach(() => {
  jest.clearAllMocks();
});

describe('services', () => {
  it('should be a function', () => {
    expect(typeof services).toBe('function');
  });
})

describe('createUser', () => {
  it('should call createUserWithEmailAndPassword', async () => {
    const { createUser } = services();
    const email = 'test@example.com';
    const password = 'password123';
    createUser(email, password)
    expect(createUserWithEmailAndPassword).toHaveBeenCalled();
  });
});

describe('updateUser', () => {
  it('should call updateProfile', async () => {
    const { updateUser } = services();
    const options = { displayName: 'New name'}
    updateUser(options)
    expect(updateProfile).toHaveBeenCalled();
  });
});

describe('userLogin', () => {
  it('should call signInWithEmailAndPassword', async () => {
    const { userLogin } = services();
    const email = 'test@example.com';
    const password = 'password123';
    userLogin(email, password)
    expect(signInWithEmailAndPassword).toHaveBeenCalled();
  });
});

describe('googleLogin', () => {
  it('should call signInWithPopup', async () => {
    const { googleLogin } = services();
    googleLogin()
    expect(signInWithPopup).toHaveBeenCalled();
  });
});

describe('getCurrentUser', () => {
  it("should return the current user object", async () => {
    const { getCurrentUser } = services();
    const user = getCurrentUser();
    expect(user).toEqual({
      displayName: 'Test User',
      email: 'test@example.com',
      photoURL: 'my-test-photo.jpg'
    });
  });
});

describe('getEmail', () => {
  it("should return the current user's email", async () => {
    const { getEmail } = services();
    const email = getEmail();
    expect(email).toBe("test@example.com");
  });
});

describe('getDisplayName', () => {
  it("should return the current user's display name", async () => {
    const { getDisplayName } = services();
    const name = getDisplayName();
    expect(name).toBe("Test User");
  });
});

describe('getProfilePicture', () => {
  it("should return the current user's profile picture url", async () => {
    const { getProfilePicture } = services();
    const pic = getProfilePicture();
    expect(pic).toBe("my-test-photo.jpg");
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
  (query as jest.Mock).mockReturnValue({ query: 'test-data'});
  (orderBy as jest.Mock).mockReturnValue({});
  const ref = getPostsRef()

  it('should return a query object', async () => {  
    expect(ref).toEqual({ query: 'test-data' });
  });

  it('should call collection method', async () => { 
    getPostsRef();
    expect(collection).toHaveBeenCalled();
  });

  it('should order by time with descending order', async () => {
    getPostsRef();
    expect(orderBy).toHaveBeenCalledWith('time', 'desc')
  });
});

describe('createPost', () => {
  it('should be a function', () => {
    const { createPost } = services();
    expect(typeof createPost).toBe('function');
  });
//   it('should call signInWithEmailAndPassword', async () => {
//     const { createPost } = services();
//     const email = 'test@example.com';
//     const password = 'password123';
//     userLogin(email, password)
//     expect(signInWithEmailAndPassword).toHaveBeenCalled();
//     });
});

describe('editPost', () => {
  it('should be a function', () => {
    const { editPost } = services();
    expect(typeof editPost).toBe('function');
  });
//   it('should call signInWithEmailAndPassword', async () => {
//     const { editPost } = services();
//     const email = 'test@example.com';
//     const password = 'password123';
//     userLogin(email, password)
//     expect(signInWithEmailAndPassword).toHaveBeenCalled();
//     });
});

describe('deletePost', () => {
  it('should be a function', () => {
    const { deletePost } = services();
    expect(typeof deletePost).toBe('function');
  });
//   it('should call signInWithEmailAndPassword', async () => {
//     const { deletePost } = services();
//     const email = 'test@example.com';
//     const password = 'password123';
//     userLogin(email, password)
//     expect(signInWithEmailAndPassword).toHaveBeenCalled();
//     });
});

describe('addLike', () => {
  const { addLike } = services();
  it('should be a function', () => {
    expect(typeof addLike).toBe('function');
  });
  // it('should call updateDoc', async () => {
  //   const document = { id: 'id0123'}
  //   const db = {
  //     doc: jest.fn().mockReturnValue(document),
  //   }
  //   addLike(db.doc())
  //   expect(updateDoc).toHaveBeenCalled();
  //   });
});

describe('removeLike', () => {
  const { removeLike } = services();
  it('should be a function', () => {
    expect(typeof removeLike).toBe('function');
  });
//   it('should call updateDoc', async () => {
//     const email = 'test@example.com';
//     const password = 'password123';
//     userLogin(email, password)
//     expect(updateDoc).toHaveBeenCalled();
//     });
});
/* eslint-disable @typescript-eslint/no-unused-vars */
// import {
//   createUserWithEmailAndPassword,
//   updateProfile,
//   signInWithEmailAndPassword,
//   GoogleAuthProvider,
//   signInWithPopup,
//   signOut,
//   UserCredential,
// } from 'firebase/auth';
// import {
//   doc,
//   addDoc,
//   collection,
//   serverTimestamp,
//   deleteDoc,
//   updateDoc,
//   arrayRemove,
//   arrayUnion,
//   DocumentReference,
//   orderBy,
//   query,
// } from 'firebase/firestore';
// import { auth, db } from '../firebase.ts';
import { services } from './index.ts';

// const {     
//   createUser,
//   updateUser,
//   userLogin,
//   googleLogin,
//   getEmail,
//   getDisplayName,
//   getProfilePicture,
//   userLogout,
//   getPostsRef,
//   createPost,
//   editPost,
//   deletePost,
//   addLike,
//   removeLike } = services();

jest.mock('firebase/auth');
jest.mock('firebase/firestore');
jest.mock('../firebase.ts', () => ({
  auth: {
    currentUser: {
      displayName: 'Test User',
      email: 'test@example.com',
    },
    updateProfile: jest.fn(),
    createUserWithEmailAndPassword: jest.fn(),
    signInWithEmailAndPassword: jest.fn(),
    signInWithPopup: jest.fn(),
    signOut: jest.fn(),
    getIdToken: jest.fn(),
  },
  db: {
    collection: jest.fn().mockReturnThis(),
    addDoc: jest.fn(),
    updateDoc: jest.fn(),
    deleteDoc: jest.fn(),
    doc: jest.fn(),
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
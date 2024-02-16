import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  UserCredential,
} from 'firebase/auth';
import {
  doc,
  addDoc,
  collection,
  serverTimestamp,
  deleteDoc,
  updateDoc,
  arrayRemove,
  arrayUnion,
  DocumentReference,
  orderBy,
  query,
} from 'firebase/firestore';
import { auth, db } from '../firebase.ts';

export function services() {
  // Authentication
  const createUser = (
    email: string,
    password: string
  ): Promise<UserCredential> =>
    createUserWithEmailAndPassword(auth, email, password);

  const updateUser = async (options: {
    displayName?: string;
    photoURL?: string;
  }): Promise<void> => {
    const loggedUser = auth.currentUser!;
    const updateUsername = await updateProfile(loggedUser, options);
    return updateUsername;
  };

  const userLogin = (
    email: string,
    password: string
  ): Promise<UserCredential> =>
    signInWithEmailAndPassword(auth, email, password);

  const googleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const userAuth = await signInWithPopup(auth, provider);
    return userAuth;
  };
  const getCurrentUser = () => auth.currentUser;
  const getEmail = () => auth.currentUser!.email;
  const getDisplayName = () => auth.currentUser!.displayName;
  const getProfilePicture = () => auth.currentUser?.photoURL;

  const userLogout = () => signOut(auth);

  // Firestore
  const getPostsRef = () => {
    const ref = query(collection(db, 'posts'), orderBy('time', 'desc'));
    return ref;
  };

  const createPost = async (text: string) => {
    try {
      const doc = await addDoc(collection(db, 'posts'), {
        content: text,
        time: serverTimestamp(),
        email: auth.currentUser!.email,
        displayName: auth.currentUser!.displayName,
        likes: [],
      });
      return doc;
    } catch (e: unknown) {
      throw Error(`${e}`);
    }
  };

  const editPost = async (newInput: string, docId: string) => {
    const docRef: DocumentReference = doc(db, 'posts', docId);
    try {
      await updateDoc(docRef, {
        content: `${newInput}`,
      });
    } catch (e) {
      throw Error(`${e}`);
    }
  };

  const deletePost = async (docId: string) => {
    const docRef: DocumentReference = doc(db, 'posts', docId);
    try {
      await deleteDoc(docRef);
    } catch (e) {
      throw new Error(`${e}`);
    }
  };

  const addLike = async (docRef: DocumentReference): Promise<void> => {
    try {
      updateDoc(doc(db, 'posts', docRef.id), {
        likes: arrayUnion(getEmail()),
      });
    } catch (e) {
      throw new Error(`${e}`);
    }
  };

  const removeLike = async (docRef: DocumentReference): Promise<void> => {
    try {
      updateDoc(doc(db, 'posts', docRef.id), {
        likes: arrayRemove(getEmail()),
      });
    } catch (e) {
      throw new Error(`${e}`);
    }
  };

  return {
    createUser,
    updateUser,
    userLogin,
    googleLogin,
    getCurrentUser,
    getEmail,
    getDisplayName,
    getProfilePicture,
    userLogout,
    getPostsRef,
    createPost,
    editPost,
    deletePost,
    addLike,
    removeLike,
  };
}

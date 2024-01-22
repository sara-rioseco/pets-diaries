import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  UserCredential,
  User,
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
} from 'firebase/firestore';
import { auth, db } from '../firebase.ts';

export function services() {

  // Authentication
  const createUser = (
    email: string,
    password: string
  ): Promise<UserCredential> =>
    createUserWithEmailAndPassword(auth, email, password);

  const updateUser = (
    user: User,
    options: { displayName?: string; photoURL?: string }
  ): Promise<void> => updateProfile(user, options);

  const userLogin = (
    email: string,
    password: string
  ): Promise<UserCredential> =>
    signInWithEmailAndPassword(auth, email, password);

  const googleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const userAuth = await signInWithPopup(auth, provider);
    return userAuth
  };

  const getProfilePicture = () => auth.currentUser!.photoURL;

  const userLogout = () => signOut(auth);

  // Firestore
  const createPost = async (text: string) => {
    try {
      const doc = await addDoc(collection(db, 'posts'), {
      content: text,
      time: serverTimestamp(),
      email: auth.currentUser!.email,
      displayName: auth.currentUser!.displayName,
      likes: [],
      })
      return doc
    } catch (e : unknown) {
      throw new Error(`${e}`);
    } 
  };

  const editPost = async (newInput: string, docId: string) => {
    const docRef: DocumentReference = doc(db, 'posts', docId);
    const currentAuth = auth.currentUser;
    try {
      await currentAuth!.getIdToken(true);
      await updateDoc(docRef, {
        content: `${newInput}`,
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('Error deleting post:', error);
      throw error; // Propagate the error
    }
  };

  const deletePost = async (docId: string) => {
    const docRef: DocumentReference = doc(db, 'posts', docId);
    const currentAuth = auth.currentUser;
    try {
      await currentAuth!.getIdToken(true);
      await deleteDoc(docRef);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('Error deleting post:', error);
      throw error; // Propagate the error
    }
  };

  const addLike = async (id: string, likes: string[]): Promise<void> => {
    const {email} = auth.currentUser!;
    if (likes.length === 0 || !likes.includes(email!)) {
      try { 
        updateDoc(doc(db, 'posts', id), {
        likes: arrayUnion(email),
      })
      } catch (e) {
        throw new Error(`${e}`);    
      }
    }
  };

  const removeLike = async (id: string): Promise<void> => {
    const currentAuth = auth.currentUser;
    try {
      updateDoc(doc(db, 'posts', id), {
        likes: arrayRemove(currentAuth!.email),
      });
    } catch (e: unknown) {
      throw new Error(`${e}`);      
    }
  }

  return {
    createUser,
    updateUser,
    userLogin,
    googleLogin,
    getProfilePicture,
    userLogout,
    createPost,
    editPost,
    deletePost,
    addLike,
    removeLike,
  };
}

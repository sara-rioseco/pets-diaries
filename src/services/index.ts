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
import { auth, db } from '../firebase';

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

  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const getDisplayName = () => auth.currentUser!.displayName;

  const getProfilePicture = () => auth.currentUser!.photoURL;

  const userLogout = () => signOut(auth);

  // Firestore
  const createPost = (text: string) =>
    addDoc(collection(db, 'posts'), {
      content: text,
      time: serverTimestamp(),
      email: auth.currentUser!.email,
      displayName: auth.currentUser!.displayName,
      likes: [],
    });

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

  const addLike = (id: string, likes: string[]): void => {
    if (likes.length === 0 || !likes.includes(auth.currentUser!.email!)) {
      updateDoc(doc(db, 'posts', id), {
        likes: arrayUnion(auth.currentUser!.email),
      }).catch(error => error);
    }
  };

  const removeLike = (id: string) =>
    updateDoc(doc(db, 'posts', id), {
      likes: arrayRemove(auth.currentUser!.email),
    });

  return {
    createUser,
    updateUser,
    userLogin,
    googleLogin,
    getDisplayName,
    getProfilePicture,
    userLogout,
    createPost,
    editPost,
    deletePost,
    addLike,
    removeLike,
  };
}

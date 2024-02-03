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
  getDocs,
  getDoc,
  DocumentSnapshot,
  DocumentData,
  getCountFromServer,
  limit,
  startAfter,
  QueryDocumentSnapshot,
} from 'firebase/firestore';
import { auth, db } from '../firebase.ts';

export function services() {

  // Authentication
  const createUser = (
    email: string,
    password: string
  ): Promise<UserCredential> =>
    createUserWithEmailAndPassword(auth, email, password);

  const updateUser = async (
    options: { displayName?: string, photoURL?: string }
  ): Promise<void> => {
    const loggedUser = auth.currentUser!;
    await loggedUser!.getIdToken(true);
    const updateUsername = await updateProfile(loggedUser, options);
    return updateUsername
  }

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
  const getCurrentUser = () => auth.currentUser;
  const getEmail = () => auth.currentUser!.email;
  const getDisplayName = () => auth.currentUser!.displayName;
  const getProfilePicture = () => auth.currentUser?.photoURL;

  const userLogout = () => signOut(auth);

  // Firestore
  const getPosts = async () => await getDocs(collection(db, 'posts'));

  const getFirstPostsRef = () => {
    const ref = query(collection(db, 'posts'), orderBy('time', 'desc'), limit(5));
    return ref
  };

  const getNextFivePosts = async (lastPost: QueryDocumentSnapshot<DocumentData, DocumentData>) => {
    const morePosts = query(collection(db, 'posts'), orderBy('time', 'desc'), startAfter(lastPost), limit(5))
    const newPosts = await getDocs(morePosts)
    return newPosts
  };

  const getLikes = async (docRef: DocumentReference) : Promise<DocumentSnapshot<DocumentData, DocumentData>> => {
    const docSnap = await getDoc(docRef)
    return docSnap.exists() ? docSnap.data().likes : null
  }

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
      try {
      await (getCurrentUser()!).getIdToken(true);
      await updateDoc(docRef, {
        content: `${newInput}`,
      });
    } catch (e) {
      throw new Error(`${e}`)
    }
  };

  const deletePost = async (docId: string) => {
    const docRef: DocumentReference = doc(db, 'posts', docId);
    try {
      await (getCurrentUser()!).getIdToken(true);
      await deleteDoc(docRef);
    } catch (e) {
      throw new Error(`${e}`)
    }
  };

  const countPosts = async () => {
    const posts = collection(db, "posts");
    const snapshot = await getCountFromServer(posts);
    return snapshot.data().count; 
  };

  const paginateQuery = async (limitNum: number, order: 'desc' | 'asc', lastDoc?: DocumentSnapshot ) => {
    if (lastDoc) {
      // const first = query(collection(db, "posts"), orderBy('time', order), limit(limitNum));
      // const docSnapshots = await getDocs(first);
      // const lastVisible = docSnapshots.docs[docSnapshots.docs.length-1];
      const next = query(collection(db, "posts"), orderBy('time', order),
      startAfter(lastDoc),
      limit(limitNum));
      const nextSnap = await getDocs(next);
      return nextSnap
    } else {
      const first = query(collection(db, "posts"), orderBy('time', order), limit(limitNum));
      const docSnapshots = await getDocs(first);
      return docSnapshots
    }
  };

  const addLike = async (docRef : DocumentReference): Promise<void> => {
      try { 
        updateDoc(doc(db, 'posts', docRef.id), {
        likes: arrayUnion(getEmail()),
      })
      } catch (e) {
        throw new Error(`${e}`);    
      }
  };

  const removeLike = async (docRef : DocumentReference): Promise<void> => {
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
    getFirstPostsRef,
    getPosts,
    getNextFivePosts,
    getLikes,
    createPost,
    editPost,
    deletePost,
    countPosts,
    paginateQuery,
    addLike,
    removeLike,
  };
}
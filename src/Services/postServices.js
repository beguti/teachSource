import { db } from "../Config/firebase";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const postRef = collection(db, "post");

class PostDataService {
  addPost = (newPost) => {
    return addDoc(postRef, newPost);
  };

  deletePost = (id) => {
    const postDoc = doc(db, "post", id);
    return deleteDoc(postDoc);
  };

  getAllPosts = () => {
    return getDocs(postRef);
  };

  getPost = (id) => {
    const postDoc = doc(db, "post", id);
    return getDoc(postDoc);
  };
}

export default new PostDataService();

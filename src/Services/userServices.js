import { db } from "../Config/firebase";
import {
  collection,
  getDocs,
  getDoc,
  doc
} from "firebase/firestore";

const userRef = collection(db, "users");

class UserDataService {
  getAllUsers = () => {
    return getDocs(userRef);
  };

  getUser = (id) => {
    const userDoc = doc(db, "users", id);
    return getDoc(userDoc);
  };
}

export default new UserDataService();

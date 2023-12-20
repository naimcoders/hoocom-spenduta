import { initializeApp } from "firebase/app";
import { getAuth, signInWithCustomToken, signOut } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCXpn8b-UjyG_nb7tbt1w2MN0hnvEA9BsY",
  authDomain: "apps-cdc13.firebaseapp.com",
  projectId: "apps-cdc13",
  storageBucket: "apps-cdc13.appspot.com",
  messagingSenderId: "926131562432",
  appId: "1:926131562432:web:8892de078c3ec9301fca25",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const auth = getAuth();

export { auth, signInWithCustomToken, signOut, storage };

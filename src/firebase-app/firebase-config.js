import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCyJ3rqItyP84fCAWBd5uxHLjxAKua08B8",
  authDomain: "blogging-93153.firebaseapp.com",
  projectId: "blogging-93153",
  storageBucket: "blogging-93153.appspot.com",
  messagingSenderId: "347953572214",
  appId: "1:347953572214:web:aecd07c3f24131cd1db257",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

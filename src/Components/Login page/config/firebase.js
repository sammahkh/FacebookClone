import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC6sg3vT4CJT9byuYey-PJKm-O_AGpciR8",
  authDomain: "facebookclone-440d4.firebaseapp.com",
  projectId: "facebookclone-440d4",
  storageBucket: "facebookclone-440d4.appspot.com",
  messagingSenderId: "515288083905",
  appId: "1:515288083905:web:be5c753925f761438d1340",
  measurementId: "G-Y2LCR01D2F",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

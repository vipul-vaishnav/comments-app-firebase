import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'comments-app-2ac59.firebaseapp.com',
  projectId: 'comments-app-2ac59',
  storageBucket: 'comments-app-2ac59.appspot.com',
  messagingSenderId: '393904322733',
  appId: '1:393904322733:web:b3f1da9cc82d0202c46e24',
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export { auth, db };

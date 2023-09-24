import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";

const apiKey = process.env.REACT_APP_API_KEY
const authDom = process.env.REACT_APP_AUTH_DOM
const projId = process.env.REACT_APP_PROJECT_ID
const storage = process.env.REACT_APP_STORAGE
const msgId = process.env.REACT_APP_MSG_ID
const appId = process.env.REACT_APP_APP_ID

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDom,
  projectId: projId,
  storageBucket: storage,
  messagingSenderId: msgId,
  appId: appId
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export { db };
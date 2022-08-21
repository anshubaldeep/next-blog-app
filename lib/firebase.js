import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVgUkyxvjYjlG89cyRCO7e9B_U2NUApcU",
  authDomain: "blog-app-38f19.firebaseapp.com",
  projectId: "blog-app-38f19",
  storageBucket: "blog-app-38f19.appspot.com",
  messagingSenderId: "71385292256",
  appId: "1:71385292256:web:cf8bc3eedd35b45b4a9f85"
};

// Initialize Firebase
if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

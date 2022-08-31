// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC82uFUDnhGrJR8BmffD8U5ntnXgm2CkPY",
  authDomain: "test-75d18.firebaseapp.com",
  projectId: "test-75d18",
  storageBucket: "test-75d18.appspot.com",
  messagingSenderId: "361588988827",
  appId: "1:361588988827:web:d0a20bb0753f369cb25f3e",
  measurementId: "G-XN20RGXXJN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
// const analytics = getAnalytics(app);
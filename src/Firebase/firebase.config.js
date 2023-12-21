// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPagJj3l6wjQfwSHXQuYtyaoEihHWjGqo",
  authDomain: "task-management-platform-38a71.firebaseapp.com",
  projectId: "task-management-platform-38a71",
  storageBucket: "task-management-platform-38a71.appspot.com",
  messagingSenderId: "186220352070",
  appId: "1:186220352070:web:fed63526baaa1c5f5bf047"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
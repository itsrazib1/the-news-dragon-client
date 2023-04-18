// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaW8lDbtFPCFFCZMu40krTxlMpRpv9ZX0",
  authDomain: "the-news-dragon-client.firebaseapp.com",
  projectId: "the-news-dragon-client",
  storageBucket: "the-news-dragon-client.appspot.com",
  messagingSenderId: "288455530591",
  appId: "1:288455530591:web:350286aab30476077de3ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
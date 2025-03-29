
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCpQHgmTvwxqBQu58h1oGjazAJo25cAuhY",
    authDomain: "instagram-6efa4.firebaseapp.com",
    projectId: "instagram-6efa4",
    storageBucket: "instagram-6efa4.firebasestorage.app",
    messagingSenderId: "39655635476",
    appId: "1:39655635476:web:439751ff9572f78f48c501",
    measurementId: "G-61FWEK9JE2"
  };
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();

  export { auth, app };
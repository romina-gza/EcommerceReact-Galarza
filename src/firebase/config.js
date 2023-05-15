// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
/* const firebaseConfig = {
  apiKey: "AIzaSyCD-ewFbh-mr1uCH80C4dIRwM0UImfwr2Q",
  authDomain: "peanutgo-c13f7.firebaseapp.com",
  projectId: "peanutgo-c13f7",
  storageBucket: "peanutgo-c13f7.appspot.com",
  messagingSenderId: "390185139742",
  appId: "1:390185139742:web:1f0f7d3296caba81ccf80f"
};
 */

// Your web app's Firebase configuration -  import.meta en lugar de process en React + Vite en lugar de process
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_apiKey,
  authDomain: import.meta.env.VITE_APP_authDomain,
  projectId: import.meta.env.VITE_APP_projectId,
  storageBucket: import.meta.env.VITE_APP_storageBucket,
  messagingSenderId: import.meta.env.VITE_APP_messagingSenderId,
  appId: import.meta.env.VITE_APP_appId
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initializeFirebase = () => app;
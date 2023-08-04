// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBfQbz3ly6fAD0AXJRhZOr6M8hz6zfGvw",
  authDomain: "blufountain-barber.firebaseapp.com",
  projectId: "blufountain-barber",
  storageBucket: "blufountain-barber.appspot.com",
  messagingSenderId: "53508329666",
  appId: "1:53508329666:web:0210f9b55b7176495a6b5b",
  measurementId: "G-LDXFV2KZL7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

//  const analytics = getAnalytics(app);

export const initFirebase = () => {
  return app;
};

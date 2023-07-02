// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
      apiKey: "AIzaSyD1on3pOiqV_XdDhpjx3DNRhAesRf4GtCU",
      authDomain: "netflix-74306.firebaseapp.com",
      projectId: "netflix-74306",
      storageBucket: "netflix-74306.appspot.com",
      messagingSenderId: "365761548956",
      appId: "1:365761548956:web:0e20a72366ef624cf1d359",
      measurementId: "G-T70160G7WJ"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;



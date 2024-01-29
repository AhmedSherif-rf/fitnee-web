// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlaqzq4yUz-ZxWHCn6Yw24uEfwQgvjW9c",
  authDomain: "fitnee-frontend.firebaseapp.com",
  projectId: "fitnee-frontend",
  storageBucket: "fitnee-frontend.appspot.com",
  messagingSenderId: "49244377688",
  appId: "1:49244377688:web:518d04e752da697cf5302d",
  measurementId: "G-TBSC6GBZ7V"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);
console.log('messaging', messaging)
// const analytics = getAnalytics(firebaseApp);

export const getNotificationToken = async (setTokenFound) => {
  try {
    const currentToken = await getToken(messaging, { vapidKey: process.env.REACT_APP_FIREBASE_NOTIFICATION_VAPID_KEY });

    if (currentToken) {
      console.log('current token for client: ', currentToken);
      setTokenFound(true);
    } else {
      console.log('No registration token available. Request permission to generate one.');
      setTokenFound(false);
    }
  } catch (err) {
    console.log('An error occurred while retrieving token. ', err);
  }
}

onMessage(messaging, (payload) => {
  console.log('Message received. ', payload);
  // ...
});

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
});

//npm install firebase
//npm install -g firebase-tools

//ikOf3O1dVvDd090bFEeXRUWQwNsmKp57vnbvk2sJ56s
//BP0gIcuIToJlcjZSFXEwiWLUlVldwoMubVc2PwSpVhSkC-gp9sq_5N7OZ8kNDXQY-mxqu0wvty5Lw6pP5QNjYkA
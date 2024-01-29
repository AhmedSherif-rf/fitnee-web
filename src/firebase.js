import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDlaqzq4yUz-ZxWHCn6Yw24uEfwQgvjW9c",
  authDomain: "fitnee-frontend.firebaseapp.com",
  projectId: "fitnee-frontend",
  storageBucket: "fitnee-frontend.appspot.com",
  messagingSenderId: "49244377688",
  appId: "1:49244377688:web:518d04e752da697cf5302d",
  measurementId: "G-TBSC6GBZ7V",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

export const getNotificationToken = async (setFcmToken) => {
  try {
    const currentToken = await getToken(messaging, {
      vapidKey: process.env.REACT_APP_FIREBASE_NOTIFICATION_VAPID_KEY,
    });

    if (currentToken) {
      console.log("current token for client: ", currentToken);
      setFcmToken(currentToken);
    } else {
      console.log(
        "No registration token available. Request permission to generate one."
      );
    }
  } catch (err) {
    console.log("An error occurred while retrieving token. ", err);
  }
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });

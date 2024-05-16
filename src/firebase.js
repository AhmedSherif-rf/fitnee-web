import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "videochat-8f94b.firebaseapp.com",
  projectId: "videochat-8f94b",
  storageBucket: "videochat-8f94b.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: "484396006856",
};

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);
export const db = getDatabase(firebaseApp);

export const getNotificationToken = async () => {
  try {
    const currentToken = await getToken(messaging, {
      vapidKey: process.env.REACT_APP_FIREBASE_NOTIFICATION_VAPID_KEY,
    });

    if (currentToken) {
      console.log("current token for client: ", currentToken);
      return currentToken;
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

importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyDlaqzq4yUz-ZxWHCn6Yw24uEfwQgvjW9c",
  authDomain: "fitnee-frontend.firebaseapp.com",
  projectId: "fitnee-frontend",
  storageBucket: "fitnee-frontend.appspot.com",
  messagingSenderId: "49244377688",
  appId: "1:49244377688:web:518d04e752da697cf5302d",
  measurementId: "G-TBSC6GBZ7V",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const body = JSON.parse(payload.notification.body);
  const notificationOptions = {
    body: body.msg,
  };

  console.log(body);

  // self.registration.showNotification(notificationTitle,
  //   notificationOptions);
});

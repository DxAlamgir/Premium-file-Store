importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyApq6Rf4cp6IbIIXdhJWaYSfX0HrYVkKKo",
    authDomain: "rgfff-19a9e.firebaseapp.com",
    databaseURL: "https://rgfff-19a9e-default-rtdb.firebaseio.com",
    projectId: "rgfff-19a9e",
    storageBucket: "rgfff-19a9e.firebasestorage.app",
    appId: "1:969291045242:android:0c58df4785239d3e4f1ec3"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    self.registration.showNotification(payload.notification.title, {
        body: payload.notification.body,
        icon: '/favicon.ico'
    });
});
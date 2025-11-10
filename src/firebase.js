// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAH-A5CrcRnI8TzVeW0XCmvCxikOtb3AuI",
  authDomain: "rewardtube-eb9a9.firebaseapp.com",
  projectId: "rewardtube-eb9a9",
  storageBucket: "rewardtube-eb9a9.firebasestorage.app",
  messagingSenderId: "740259156005",
  appId: "1:740259156005:web:0b1c4367d7e97e1095efcc",
  measurementId: "G-RNS796V6QH"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;

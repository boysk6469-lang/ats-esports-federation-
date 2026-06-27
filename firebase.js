// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import {
  getAuth
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyBQ7FAkOnA3aXZ2Cdm4SfngunMNcO97LSw",
  authDomain: "ats-esports-federation.firebaseapp.com",
  projectId: "ats-esports-federation",
  storageBucket: "ats-esports-federation.firebasestorage.app",
  messagingSenderId: "145487628360",
  appId: "1:145487628360:web:4d4cc64ce9c7f8205a307d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Services
const db = getFirestore(app);
const auth = getAuth(app);

// Make available globally
window.db = db;
window.auth = auth;

console.log("✅ Firebase Connected Successfully");

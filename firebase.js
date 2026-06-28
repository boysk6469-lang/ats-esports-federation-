============================
// ATS ESPORTS FEDERATION V6
// firebase.js
// ==========================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import {
  getAuth
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";


// ==========================================
// Firebase Config
// ==========================================

const firebaseConfig = {
  apiKey: "AIzaSyBQ7FAkOnA3aXZ2Cdm4SfngunMNcO97LSw",
  authDomain: "ats-esports-federation.firebaseapp.com",
  projectId: "ats-esports-federation",
  storageBucket: "ats-esports-federation.firebasestorage.app",
  messagingSenderId: "145487628360",
  appId: "1:145487628360:web:4d4cc64ce9c7f8205a307d"
};


// ==========================================
// Initialize Firebase
// ==========================================

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

const storage = getStorage(app);


// ==========================================
// Global Access
// ==========================================

window.db = db;
window.auth = auth;
window.storage = storage;

window.collection = collection;
window.addDoc = addDoc;
window.getDocs = getDocs;
window.doc = doc;
window.updateDoc = updateDoc;
window.deleteDoc = deleteDoc;
window.serverTimestamp = () => serverTimestamp();

window.storageRef = ref;
window.uploadBytes = uploadBytes;
window.getDownloadURL = getDownloadURL;


// ==========================================

console.log("✅ Firebase Connected Successfully");

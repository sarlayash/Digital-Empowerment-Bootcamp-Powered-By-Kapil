// Firebase Initializer for Digital Empowerment Bootcamp Powered By Kapil
const firebaseConfig = {
  apiKey: "AIzaSyDEOdzVzaqKflsuH_NHbklZIQJlg9aAwOA",
  authDomain: "digital-empowerment-bootcamp.firebaseapp.com",
  projectId: "digital-empowerment-bootcamp",
  storageBucket: "digital-empowerment-bootcamp.firebasestorage.app",
  messagingSenderId: "825499771558",
  appId: "1:825499771558:web:621e1417d40c012b678a67",
  measurementId: "G-M2V9CJRE35"
};

// Initialize Firebase App
if (typeof firebase !== 'undefined') {
  firebase.initializeApp(firebaseConfig);
  window.auth = firebase.auth();
  window.db = firebase.firestore();
  try {
    window.analytics = firebase.analytics();
  } catch (e) {
    console.warn("Analytics initialization note:", e);
  }
  console.log("🔥 Firebase initialized successfully for project:", firebaseConfig.projectId);
} else {
  console.warn("Firebase scripts not yet loaded in DOM.");
}

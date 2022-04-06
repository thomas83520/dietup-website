import firebase from "firebase/app";
import "firebase/functions";
import "firebase/analytics";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDWS8oTIDs6dgiGNTjelnn1FcWNZL1Br3o",
  authDomain: "dietapp-prod-9424d.firebaseapp.com",
  databaseURL: "https://dietapp-prod-9424d.firebaseio.com",
  projectId: "dietapp-prod-9424d",
  storageBucket: "dietapp-prod-9424d.appspot.com",
  messagingSenderId: "638444754160",
  appId: "1:638444754160:web:cf9ee1b89b27ac03295e35",
  measurementId: "G-X7CCY2ZZ74",
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init service
const projectAnalytics = firebase.analytics();
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectCloudFunctions = firebase.app().functions("europe-west1");

//timestamp
const timestamp = firebase.firestore.Timestamp;

export {
  projectAnalytics,
  projectCloudFunctions,
  projectFirestore,
  projectAuth,
  timestamp,
};

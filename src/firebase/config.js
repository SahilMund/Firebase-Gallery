import * as firebase from "firebase/app";

//  importing the services
import "firebase/storage"; 
import "firebase/firestore"; 

// firestore : - helps to store the image url's
// store :-  helps to store the images


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBfLx7S4B0Q16GmAZc2nFX6y1UDj0RP4wU",
  authDomain: "fir-gallery-98277.firebaseapp.com",
  databaseURL: "https://fir-gallery-98277.firebaseio.com",
  projectId: "fir-gallery-98277",
  storageBucket: "fir-gallery-98277.appspot.com",
  messagingSenderId: "529870786782",
  appId: "1:529870786782:web:38ba2c42cb92b003f1724f",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//   starting both services i.e. storage and firestore(it is a real time database)
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore ,timestamp};

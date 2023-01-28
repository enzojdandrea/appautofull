import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCiccanvxjNRfd4IZOsdYurcbnKSRdzXEM",
  authDomain: "basedatosautofull.firebaseapp.com",
  projectId: "basedatosautofull",
  storageBucket: "basedatosautofull.appspot.com",
  messagingSenderId: "1056006954245",
  appId: "1:1056006954245:web:9b201e668d74d48b706b6c"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
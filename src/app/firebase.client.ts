import { environment } from "../environments/environment.prod";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const app = initializeApp(environment.firebase);

export const firebaseAuth = getAuth(app);
export const firestore = getFirestore(app);
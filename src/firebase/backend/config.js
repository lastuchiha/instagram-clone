import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAN5Ox6wuTiLAYFyNqd6SiR0GLMfKsUVt4",
    authDomain: "instagram-backend-4be5b.firebaseapp.com",
    projectId: "instagram-backend-4be5b",
    storageBucket: "instagram-backend-4be5b.appspot.com",
    messagingSenderId: "521826206267",
    appId: "1:521826206267:web:64ce12890d90074578121e"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
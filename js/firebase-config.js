import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import {
    addDoc,
    collection,
    getDocs,
    getFirestore,
    query
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBNU3nl1PqrVIx84CwWnQjv9Ny16heJDTM",
    authDomain: "towards-point.firebaseapp.com",
    projectId: "towards-point",
    storageBucket: "towards-point.firebasestorage.app",
    messagingSenderId: "1005775165185",
    appId: "1:1005775165185:web:f340603590bc102b086d00"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
    addDoc,
    auth,
    collection,
    createUserWithEmailAndPassword,
    db,
    getDocs,
    onAuthStateChanged,
    query,
    signInWithEmailAndPassword,
    signOut
};

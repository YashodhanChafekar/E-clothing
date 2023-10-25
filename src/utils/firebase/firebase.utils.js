import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
}
from "firebase/auth"
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
}
from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCOSsE8W7oy_PGhoMOhPCIU8i3jBHF_rhk",
  authDomain: "e-clothing-80cbc.firebaseapp.com",
  projectId: "e-clothing-80cbc",
  storageBucket: "e-clothing-80cbc.appspot.com",
  messagingSenderId: "886297403148",
  appId: "1:886297403148:web:795599ff2bf072b0227329"
};


const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth()

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {

    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapShot = await getDoc(userDocRef);

    if(!userSnapShot.exists()){

        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                    displayName,
                    email,
                    createdAt,
                    ...additionalInfo
                });
        } catch(error){
            console.log("Error While Creating the user.", error.message);
        }
    }

    return userDocRef;
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    console.log(email, password)
    return await signInWithEmailAndPassword(auth, email, password);
  };

export const createAuthUserWithEmailAndPassword = async(email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);

};

export const signOutUser = async() => {
    await signOut(auth);
};

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);

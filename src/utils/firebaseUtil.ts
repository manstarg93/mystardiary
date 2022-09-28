
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup, getAuth, signOut } from "firebase/auth";
import {doc,getDoc, setDoc, getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const envfile = process.env.REACT_APP_FIREBASE_KEY
console.log(envfile)
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY as string,
  authDomain: "stardiary.firebaseapp.com",
  projectId: "stardiary",
  storageBucket: "stardiary.appspot.com",
  messagingSenderId: "235386710448",
  appId: "1:235386710448:web:920665f695e68846e58e75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// type userDiaryObjectArray = {
//   title:string, diaryDescription: string,diaryDate: string
// }[]
export const db = getFirestore()

/// Google Auth User 
const auth = getAuth();

const provider = new GoogleAuthProvider();



export const googleSignInWithPopOp = () => {
   return signInWithPopup(auth, provider)
}

export const signOutOfGoogle = () =>  signOut(auth)

export const createUserFromAuth = async(userData: { 
  
    uid: string,
    displayName: string |null,
    email: string | null}) => {
        if(!userData) return
        const userDocRef =  doc(db, 'users', userData.uid);

    const userSnapshot = await getDoc(userDocRef);
    if(userSnapshot.exists())return

    const {uid,displayName,email} = userData
    try {
        await setDoc(userDocRef,{
            uid,
            displayName,
            email,
            createdAt: new Date()
        })
    } catch (error) {
        
    }

}

export const addDiaryForUser = async(uid:string, userDiary:{title:string, diaryDescription: string,diaryDate: string}[] ) => {


  try {
    await setDoc(doc(db, "userDiary", uid), {
      userDiary,
      });
  } catch (error) {
    
  }

}

export const getDiaryInfo = async(userId: string) => {


    const docRef = doc(db, "userDiary",userId);
    const diarySnapshot = await getDoc(docRef);
    
    if(diarySnapshot.exists()) {
    
      return diarySnapshot.data()
    }
    else{
      return
    }

    
  }
export const getUserInfo = async(userId: string) => {

    const docRef = doc(db, "users",userId);
    await getDoc(docRef).then((docSnap) => {
      return docSnap.data()
    }).catch(error => {
  
    })
  }

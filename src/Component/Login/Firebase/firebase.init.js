import { initializeApp } from "firebase/app";
import firebaseConfig from './firebase.config';

const authenticationInit = () => {
    initializeApp(firebaseConfig);
}

export default authenticationInit;
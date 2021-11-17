import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import authenticationInit from "../Component/Login/Firebase/firebase.init";

authenticationInit();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();

    // signIn using google
    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
            .catch(error => {
                setErr(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    // observe user state changed
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    // logout process
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false))
    }


    // registration process
    const handleRegistration = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setErr('Password must be at least 6 character long');
            return;
        }
        createNewUser(email, password);
    }

    // login with email & password
    const handleLogin = () => {
        return signInWithEmailAndPassword(auth, email, password)
            .catch(error => {
                setErr(error.message);
            })
            .finally(setErr(''));
    }

    // get new user
    const createNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setErr('');
                verifyEmail();
                // set user to DB
                saveUserToDB(email, name, "POST");
                setUserName();
            })
            .catch((error) => {
                setErr(error.message);
            });
    }

    // save user to the DB
    const saveUserToDB = (email, displayName, method) => {
        const user = { email, displayName, method };
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    // Email Verification 
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {

            })
    }

    // update profile 
    const setUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
            .then(result => {
            })
    }

    // get name 
    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    // get email
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    // get password
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    // reset password 
    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(result => {

            })
    }

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])
    return {
        user,
        admin,
        name,
        isLoading,
        signInUsingGoogle,
        saveUserToDB,
        handleNameChange,
        handleEmailChange,
        handleRegistration,
        handlePasswordChange,
        handleLogin,
        handleResetPassword,
        setErr,
        err,
        logOut
    }
}
export default useFirebase;
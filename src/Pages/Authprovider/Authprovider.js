import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../Firebase/Firebase.config';


export const Authcontext = createContext();
const auth = getAuth(app);

const Authprovider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // state tracking
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {

            setUser(currentuser);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        }
    }, [])


    //for google and github signIn
    const providerLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    //for registration
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //for login

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
        console.log(email, password);
    }
    // for logout

    const logout = () => {
        setLoading(true);
        localStorage.removeItem('sweet-token');
        return signOut(auth);
    }



    // for update username
    const updateUserName = (username) => {
        console.log(username);
        updateProfile(auth.currentusers, {
            displayName: username
        })

            .then(() => {
                console.log('display name updated')
            })

            .catch(error => console.error(error))

    }



    const authInfo = { user, loading, providerLogin, logout, createUser, signIn, updateUserName };
    return (
        <div>
            <Authcontext.Provider value={authInfo}>
                {children}
            </Authcontext.Provider>
        </div>
    );
};

export default Authprovider;
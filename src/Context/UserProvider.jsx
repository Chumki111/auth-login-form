import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from '../firebase/firebase.config'


export  const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const UserProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true)


    const createUser = (email,password) =>{
        setLoading(true);
      return createUserWithEmailAndPassword (auth,email,password)
    }
     const signIn = (email,password)=>{
        setLoading(true);
      return signInWithEmailAndPassword(auth,email,password)
     }
     const signInWithGoogle = () =>{
        setLoading(true);
       return signInWithPopup(auth,googleProvider)
     }
     const logOut = () =>{
        setLoading(true)
       return signOut(auth)
       
     }
     useEffect(()=>{
     const unSubscribe = onAuthStateChanged(auth, currentUser=>{
             setUser(currentUser)
             setLoading(false)
             console.log('current user observe',currentUser)
        })
        return () =>{
            unSubscribe();
        }
     },[])
    const authInfo = {user,createUser,signIn,logOut,loading,signInWithGoogle}
    return (
        <AuthContext.Provider value={authInfo}>

        {children}
        </AuthContext.Provider>
    );
};
UserProvider.propTypes = {
    children: PropTypes.node
}

export default UserProvider;

/** @format */

import React, { useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/FirebaseConfig";
import { createContext } from "react";
import { useState } from "react";

const auth = getAuth(app);
// creating and exporting auth context
export const authContext = createContext();
// all provider
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //    sign Up with email and password
  const CreateUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in with email and password
  const SignInEP = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //Email sign out
  const SignOutEP = () => {
    return signOut(auth);
  };
  // sign in with google
  const SignInWithG = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // sign in with github
  const SignInWithGithub = () => {
    return signInWithPopup(auth, githubProvider);
  };
  // provider sign out
  const LogOut = () => {
    return signOut(auth);
  };
  const UpdateUserProfile = (profile) => {
    updateProfile(auth.currentUser, profile);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      console.log("on auth state changed:", currentUser);
    });
    // unmount the user
    return () => {
      unsubscribe();
    };
  }, []);
  const authInfo = {
    user,
    loading,
    SignInWithG,
    SignOutEP,
    SignInEP,
    CreateUser,
    SignInWithGithub,
    LogOut,
    UpdateUserProfile,
  };
  return (
    <div>
      <authContext.Provider value={authInfo}>{children}</authContext.Provider>
    </div>
  );
};

export default AuthContext;

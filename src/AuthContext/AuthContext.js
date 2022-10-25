/** @format */

import React from "react";
import { getAuth, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import app from "../Firebase/FirebaseConfig";
import { createContext } from "react";

const auth = getAuth(app);
// creating and exporting auth context
export const authContext = createContext();
// all provider
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthContext = ({ children }) => {
  const authInfo = {};
  return (
    <div>
      <authContext.Provider value={authInfo}>{children}</authContext.Provider>
    </div>
  );
};

export default AuthContext;

import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth, db } from "../firebase-app/firebase-config";
const AuthContext = createContext();
function AuthProvider(props) {
  const [userinfo, setUserinfo] = useState("");
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUserinfo(user);
    });
  });
  const value = { userinfo, setUserinfo };
  return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>;
}
export { AuthContext, AuthProvider };

import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth, db } from "../firebase-app/firebase-config";
const AuthContext = createContext();
function AuthProvider(props) {
  const [info, setInfo] = useState("");
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setInfo(user.email);
    });
  });
  return <AuthContext.Provider {...props}></AuthContext.Provider>;
}
export { AuthContext, AuthProvider };

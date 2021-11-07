import { useEffect, useState } from "react";
import firebaseInit from "../Firebase/Firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  getIdToken,
} from "firebase/auth";

// init firebase auth
firebaseInit();

const UseFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState("");
  const [error, setError] = useState("");
  const [admin, setAdmin] = useState(false);
  // auth
  const auth = getAuth();

  // use email and password create
  const emailPasswordCreate = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // use email and password create
  const emailPasswordSignin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sign out
  const logOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  // observe hook
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getIdToken(user).then((idToken) => {
          setToken(idToken);
        });
      }
      setIsLoading(false);
    });
  }, [user]);
  // update user
  const updateUser = (name, email) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then((result) => {
        setUser(result);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  };
  // gogle sign in
  const gogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };
  useEffect(() => {
    fetch(`http://localhost:5000/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data?.isAdmin);
      });
  }, [user?.email]);
  return {
    user,
    setUser,
    isLoading,
    token,
    setIsLoading,
    emailPasswordCreate,
    emailPasswordSignin,
    updateUser,
    logOut,
    error,
    setError,
    gogleSignIn,
    admin,
    setAdmin,
  };
};

export default UseFirebase;

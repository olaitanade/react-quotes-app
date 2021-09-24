import { auth } from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const createUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("signed up => "+user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("signed up error => "+errorMessage)
    // ..
  });
}


import { getDatabase, push, ref, set } from "firebase/database";
import { app } from "./FirebaseConfig";

export async function createAccount(username, password, email, name) {
  const db = getDatabase(app);
  const newDoc = push(ref(db, "users"));
  set(newDoc, {
    username: username,
    password: password,
    email: email,
    name: name,
  }).then(() => {
    alert("Added Successfully");
  });   
}

import { get, getDatabase, push, ref, set } from "firebase/database";
import { app } from "../FirebaseConfig";

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

export async function getAccounts() {
  const db = getDatabase(app);
  const dbRef = ref(db, "users");

  const accounts = await get(dbRef);
  if (accounts.exists()) {
    const accountsData = accounts.val();
    const accountsOBJ = Object.keys(accountsData).map((el) => ({
      id: el,
      ...accountsData[el],
    }));
    return accountsOBJ;
  } else {
    return [];
  }
}

// async function fethData(){
//   const response = await fetch('loca');
//   const data = await response.json();
//   console.log(data)
// }

import { get, getDatabase, push, ref, set, update } from "firebase/database";
import { app } from "../../services/FirebaseConfig";

//CLIENT INFORMATION
// CREATE
export async function createAccount(username, password, email, name) {
  const db = getDatabase(app);
  const newDoc = push(ref(db, "products"));
  function generatedID() {
    //create an algo for generating random ID
    console.log("asd");
  }
  const empID = "BEAN-" + generatedID;
  //BEAN-1231231
  set(newDoc, {
    empId: empID,
    username: username,
    password: password,
    email: email,
    name: name,
  }).then(() => {
    alert("Added Successfully");
  });
}

//FOR ADMIN
//READ
export async function getAccounts() {
  const db = getDatabase(app);
  const dbRef = ref(db, "users");
  //ref(database,collection or table)

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

//UPDATE
//users/3
//const newData = {
//username:username
//password:password
//}
//const id =1;
///updateUsers(id,newData);

export async function updateUsers(userId, newData) {
  const db = getDatabase(app);
  const userReference = ref(db, `users/${userId}`);

  try {
    await update(userReference, newData);
    alert("successfully updated");
  } catch (error) {
    console.error("Error updating user", error);
  }
}

//DELETE

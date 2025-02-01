import { useNavigate } from "react-router-dom";
import { app } from "../services/FirebaseConfig";
import { getDatabase, ref, set, push } from "firebase/database";
import { useState } from "react";
import Buttons from "../ui/Buttons";
import { toast } from "react-toastify";

function CreateAccount() {
  const [username, setusername] = useState();
  const [password, setPassword] = useState();

  async function saveData() {
    const db = getDatabase(app);
    const newDoc = push(ref(db, "users"));
    set(newDoc, { username: username, password: password }).then(() => {
      toast.success("Added Successfully");
    });
  }

  async function getData() {
    const response = await fetch("url");
    const data = await response.json();
  }
  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setusername(e.target.value)}
      />
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Buttons handleClick={saveData}>Create Account</Buttons>
    </div>
  );
}

export default CreateAccount;

import { useNavigate } from "react-router-dom";
import CreateAccount from "./CreateAccount";
import Buttons from "../ui/Buttons";
import { useLoginContext } from "../contexts/AccountContext";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getUserFCMToken, auth } from "../services/FirebaseConfig";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function login() {
    {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        console.log("User signin successfully");

        //after succesfull loigin get the users FCM token
        // await getUserFCMToken();
      } catch (error) {
        console.log("Error during login", error);
      }
      navigate("/Cashier");
    }
  }

  return (
    <div>
      Login
      <input
        value={email}
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        value={password}
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      {/* <button onClick={() => navigate("/dashboard")}>Login</button> */}
      <Buttons handleClick={login}>Login</Buttons>
    </div>
  );
}

export default Login;

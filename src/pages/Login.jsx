import { useNavigate } from "react-router-dom";
import CreateAccount from "./CreateAccount";
import Buttons from "../ui/Buttons";
import { useLoginContext } from "../contexts/AccountContext";

function Login() {
  const navigate = useNavigate();

  function login() {
    {
      navigate("/dashboard");
    }
  }

  return (
    <div>
      Login
      {/* <button onClick={() => navigate("/dashboard")}>Login</button> */}
      <Buttons handleClick={login}>Login</Buttons>
    </div>
  );
}

export default Login;

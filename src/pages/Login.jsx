import { useNavigate } from "react-router-dom";
import CreateAccount from "./CreateAccount";
import Buttons from "../ui/Buttons";
import { useLoginContext } from "../services/Context";

function Login() {
  const navigate = useNavigate();

  function login() {
    {
      navigate("/dasboard");
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

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Buttons from "../ui/Buttons";
import { createAccount } from "../services/createAccount";

function CreateAccount() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [name, setName] = useState();

  return (
    <form action="">
      <div className="flex flex-col items-center text-3xl p-2 my-7">
        <label>Create a new account</label>
      </div>
      <div className="flex flex-col items-center bg-gray-500 gap-2 rounded-sm mx-auto my-6 p-3 w-[300px] h-[300px] ">
        <div>
          <label className="mr-[50%] w-[400px]">Name</label>
        </div>
        <input
          type="text"
          value={name}
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <div>
          <label className="mr-[50%]">Username</label>
        </div>

        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className="text-start">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="text-start">Password</label>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Buttons
          type={"button"}
          handleClick={() => createAccount(username, password, email, name)}
        >
          Create Account
        </Buttons>
      </div>
    </form>
  );
}

export default CreateAccount;

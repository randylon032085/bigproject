import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Buttons from "../ui/Buttons";
import { createAccount } from "../services/accounts/Accounts";

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
      <div className="flex flex-col items-center bg-gray-500 gap-3 rounded-sm mx-auto my-6 p-3 w-[300px] h-[300px] ">
        <div className="relative">
          <input
            type="text"
            value={name}
            id="name"
            name="name"
            className=" peer w-full border rounded-xl px-4 py-3.5 bg-gray-50 m-1 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onChange={(e) => setName(e.target.value)}
          />
          <label
            htmlFor={name}
            className={`m-1 absolute left-4 top-3 text-gray-500 transition-all ${
              name
                ? "top-1 text-sm text-blue-600 "
                : "peer-placeholder-shown:top-0 peer-placeholder-shown:text-gray-400 peer-focus:top-3 peer-focus:text-sm peer-focus:text-blue-600"
            }`}
          >
            {/* absolute left-4 top-3 text-gray-500 transition-all top-1 text-sm text-blue-600 */}
            {/* absolute left-4 top-3 text-gray-500 transition-all peer-placeholder-shown:top-0 peer-placeholder-shown:text-gray-400 peer-focus:top-3 peer-focus:text-sm peer-focus:text-blue-600 */}
            Fullname
          </label>
        </div>

        <div className="relative">
          <input
            type="text"
            value={username}
            className="peer w-full border rounded-xl px-4 py-3 bg-gray-50 text-gray-900 peer-focus:text-sm peer-focus:text-blue-600"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label
            htmlFor={username}
            className={`absolute left-4 top-3 text-gray-500 transition-all ${
              username
                ? "top-1 text-sm text-blue-600"
                : "peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:-sm peer-focus:text-blue-600"
            }`}
          >
            Username
          </label>
        </div>

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

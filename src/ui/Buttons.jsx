import { Children } from "react";

function Buttons({ children, handleClick, type }) {
  return (
    <button
      type={type}
      onClick={() => handleClick()}
      className="bg-green-300 w-[178px] rounded-md"
    >
      {children}
    </button>
  );
}

export default Buttons;

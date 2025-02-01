import { Children } from "react";

function Buttons({ children, handleClick }) {
  return <button onClick={() => handleClick()}>{children}</button>;
}

export default Buttons;

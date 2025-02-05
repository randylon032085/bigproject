import { useEffect, useState } from "react";

import { useLoginContext } from "../contexts/AccountContext";

function Users() {
  const { accounts } = useLoginContext();

  console.log(accounts);
  return (
    <>
      {accounts?.map((el) => (
        <>
          <ul key={el?.id}>
            <li>email {el?.email}</li>
          </ul>
        </>
      ))}
      <p>hello</p>
    </>
  );
}

export default Users;

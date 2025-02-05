import { useEffect, useState } from "react";
import { getAccounts } from "../services/accounts/Accounts";
import { useLoginContext } from "../services/Context";

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

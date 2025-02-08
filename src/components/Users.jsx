import { useEffect, useState } from "react";

import { useLoginContext } from "../contexts/AccountContext";
import { updateUsers } from "../services/accounts/Accounts";

function Users() {
  const { accounts } = useLoginContext();
  const [editedUser, setEditedUser] = useState({});
  const [editing, setEditing] = useState(false);

  console.log(accounts);

  function handleChange(e) {
    const { name, value } = e.target;
    setEditedUser((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }

  function handleEdit(id) {
    setEditing(!editing);
    // alert("Edit");
    const userToEdit = accounts.find((el) => el.id === id);
    if (userToEdit) {
      setEditedUser({ ...userToEdit });
      console.log("SELECTED USER", editedUser);
    }
    console.log(userToEdit);
  }

  function handleUpdate() {
    //id,newData
    updateUsers(editedUser.id, editedUser);
    setEditing(!editing);
  }

  function handleDelete() {
    alert("User has been deleted");
  }

  return (
    <>
      <input
        type="text"
        name="name"
        value={editedUser.name || ""}
        onChange={handleChange}
      />
      <table>
        {/* HEAD */}
        <thead>
          <tr>
            {/* <th>No</th> */}
            <th>Username</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        {/* BODY */}
        <tbody>
          {accounts.map((el) => (
            <>
              <tr key={el.id}>
                {/* <td>{el.id}</td> */}
                <td>
                  {editing && editedUser.id === el.id ? (
                    <>
                      <input
                        type="text"
                        name="username"
                        value={editedUser?.username || ""}
                        onChange={handleChange}
                      />
                    </>
                  ) : (
                    <span className="text-red-600">{el.username}</span>
                  )}
                </td>
                <td>
                  {editing && editedUser.id === el.id ? (
                    <>
                      <input
                        type="password"
                        name="password"
                        value={editedUser?.password || ""}
                        onChange={handleChange}
                      />
                    </>
                  ) : (
                    <input type="password" value={el.password} />
                  )}
                </td>
                <td>
                  <button
                    onClick={() =>
                      editing && editedUser.id === el.id
                        ? handleUpdate()
                        : handleEdit(el.id)
                    }
                  >
                    {editing ? "save" : "edit"}
                  </button>
                  <button onClick={() => handleDelete()}>Delete</button>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Users;

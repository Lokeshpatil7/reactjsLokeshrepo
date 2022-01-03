import { useEffect, useState } from "react";
import axios from "axios";

export default () => {
  const [usersList, setUsersList] = useState([]);
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);
  const [userId, setUserId] = useState(0);

  const [editObject, setEditObject] = useState({});
  const [selectedUserId, setSelectedUserId] = useState(-1);
  const [userObject, setUserObject] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",              
  });

  const OnResetEditRow = () => {
    setSelectedUserId(-1);
    setEditObject({
      name: "",
      username: "",
      email: "",
      phone: "",
      website: "",
    });
  };

  const OnUpdateEditRow = () => {
    if (userId > 0) {
      axios
        .put("https://jsonplaceholder.typicode.com/users/" + userId, {
          id: userId,
          ...editObject,
          userId: 1,
        })
        .then((response) => {
          if (response) {
            fetchData();
            alert("updated");
            OnResetEditRow();
          }
        });
    }
  };

  const onEditObjectChangeHandler = (event) => {
    if (event) {
      const { name, value } = event.target;
      setEditObject({
        ...editObject,
        [name]: value,
      });
    }
  };

  const onUserObjectChangehandler = (event) => {
    if (event) {
      const { name, value } = event.target;
      setUserObject({
        ...userObject,
        [name]: value,
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users ")
      .then((response) => {
        console.log(response.data);
        if (response && response.data) {
          setUsersList(response.data);
        }
      });
  };

  // const onNameChange = (event) => {
  //   setName(event.target.value);
  // };

  // const onUserNameChange = (event) => {
  //   setUserName(event.target.value);
  // };

  // const onEmailChange = (event) => {
  //   setEmail(event.target.value);
  // };
  // const onPhoneChange = (event) => {
  //   setPhone(event.target.value);
  // };
  // const onWebsiteChange = (event) => {
  //   setWebsite(event.target.value);
  // };

  const onEdit = (userObject) => {
    console.log(userObject);
    // setIsEditMode(true);
    setName(userObject.name);
    setUserName(userObject.username);
    setEmail(userObject.email);
    setPhone(userObject.phone);
    setWebsite(userObject.website);
    setSelectedUserId(userObject.id);
    setEditObject(userObject);
    setUserId(userObject.id);
  };

  //edit
  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log(name.username);
    axios
      .post("https://jsonplaceholder.typicode.com/users", {
        name,
        username,
        userId: 1,
        email,
        phone,
        website,
      })
      .then((response) => {
        console.log(response);
        alert("Added");

        fetchData();

        setName("");
        setUserName("");
        setEmail("");
        setPhone("");
        setWebsite("");
      });
  };

  //Delete
  const onDeleteHandler = (id) => {
    axios
      .delete("https://jsonplaceholder.typicode.com/users/" + id)
      .then((response) => {
        if (response) {
          fetchData();
          alert("Deleted");
        }
      });
  };
  const onReset = (event) => {
    if (event) {
      event.preventDefault();
    }
    setIsEditMode(false);
    setName("");
    setUserName("");
    setEmail("");
    setPhone("");
    setWebsite("");
  };

  return (
    <>
      <h1>From UserHooks</h1>
      <h2>Users Form</h2>
      <form onSubmit={onFormSubmit}>
        <label>Name :-</label>
        <input
          name="name"
          value={userObject.name}
          onChange={onUserObjectChangehandler}
        />
        <br />
        <label>User Name :-</label>
        <input
          name="username"
          value={userObject.username}
          onChange={onUserObjectChangehandler}
        />{" "}
        <br />
        <label>Email :-</label>
        <input
          name="email"
          value={userObject.email}
          onChange={onUserObjectChangehandler}
        />{" "}
        <br />
        <label>Phone :-</label>
        <input
          name="phone"
          value={userObject.phone}
          onChange={onUserObjectChangehandler}
        />{" "}
        <br />
        <label>Website :-</label>
        <input
          name="website"
          value={userObject.website}
          onChange={onUserObjectChangehandler}
        />
        <br />
        <button type="submit"> Submit</button>
      </form>

      <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>User Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Website</th>
          <th>Options</th>
        </tr>

        <tbody>
          {usersList.map((user, index) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>

                <td>
                  {selectedUserId === user.id ? (
                    <input
                      name="name"
                      value={editObject.name}
                      onChange={onEditObjectChangeHandler}
                    />
                  ) : (
                    user.name
                  )}
                </td>
                <td>
                  {selectedUserId === user.id ? (
                    <input
                      name="username"
                      value={editObject.username}
                      onChange={onEditObjectChangeHandler}
                    />
                  ) : (
                    user.username
                  )}
                </td>
                <td>
                  {selectedUserId === user.id ? (
                    <input
                      name="email"
                      value={editObject.email}
                      onChange={onEditObjectChangeHandler}
                    />
                  ) : (
                    user.email
                  )}
                </td>
                <td>
                  {selectedUserId === user.id ? (
                    <input
                      name="phone"
                      value={editObject.phone}
                      onChange={onEditObjectChangeHandler}
                    />
                  ) : (
                    user.phone
                  )}
                </td>
                <td>
                  {selectedUserId === user.id ? (
                    <input
                      name="website"
                      value={editObject.website}
                      onChange={onEditObjectChangeHandler}
                    />
                  ) : (
                    user.website
                  )}
                </td>
                <td>
                  {selectedUserId === user.id ? (
                    <>
                      <button onClick={OnUpdateEditRow}>Update</button>
                      <br />
                      <button onClick={OnResetEditRow}>Reset</button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => {
                          onDeleteHandler(user.id);
                        }}
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => {
                          onEdit(user);
                        }}
                      >
                        Edit
                      </button>
                    </>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

import { useEffect, useState } from "react";

export default () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isEditMode, setIsEditMode] = useState(false);
  const [postId, setPostId] = useState(0);

  const [editObject, setEditObject] = useState({});
  const [selectedPostId, setSelectedPostId] = useState(-1);
  const [postObject, setPostObject] = useState({
    username: "",
    password: "",
  });

  return (
    <>
      <h1>Admin Login</h1>
      <h1>...</h1>

      <form>
        <div class="row mb-3">
          <label for="inputEmail3" class="col-sm-2 ">
            UserName
          </label>
          <div class="col-sm-3">
            <input type="email" class="form-control" id="inputEmail3" />
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputPassword3" class="col-sm-2 col-form-label">
            Password
          </label>
          <div class="col-sm-3">
            <input type="password" class="form-control" id="inputPassword3" />
          </div>
        </div>

        <button type="submit" class="btn btn-success">
          Sign in
        </button>
      </form>
    </>
  );
};

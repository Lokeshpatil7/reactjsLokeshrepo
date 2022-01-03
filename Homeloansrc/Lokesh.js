import { useEffect, useState } from "react";
import axios from "axios";

export default () => {
  const [postsList, setPostsList] = useState([]);
  const [title, setTitle] = useState("");
  // const [titleEditMode , setTitleEditMode]= useState("");
  // const [bodyEditMode , setBodyEditMode]= useState("");
  const [body, setBody] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);
  const [postId, setPostId] = useState(0);

  const [editObject, setEditObject] = useState({});
  const [selectedPostId, setSelectedPostId] = useState(-1);
  const [postObject, setPostObject] = useState({
    title: "",
    body: "",
  });

  const OnResetEditRow = () => {
    setSelectedPostId(-1);
    setEditObject({
      title: "",
      body: "",
    });
  };

  const OnUpdateEditRow = () => {
    //make API call to update record
    if (postId > 0) {
      axios
        .put("https://jsonplaceholder.typicode.com/posts/" + postId, {
          id: postId,
          // title,
          // body,
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

  const onEditObjectChangehandler = (event) => {
    // const titleOld={
    //     title: "a",
    //     body: "b",
    // };
    // const titleNew={
    //   //  title:titleOld.title,
    //    // body:bodyOld.body,
    //     ...titleOld,
    //     title:"c",
    // };
    if (event) {
      const { name, value } = event.target;
      setEditObject({
        ...editObject,
        [name]: value,
      });
    }
  };

  const onPostObjectChangehandler = (event) => {
    if (event) {
      const { name, value } = event.target;
      setPostObject({
        ...postObject,
        [name]: value,
      });
    }
  };

  useEffect(() => {
    fetchData();
    //code to fetch data from server
  }, []); //use effect array
  const fetchData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts ")
      .then((response) => {
        console.log(response.data);
        if (response && response.data) {
          setPostsList(response.data);
        }
      });
  };
  // const onTitleChange = (event)=>{
  //     setTitle(event.target.value);
  // };

  // const onTitleEditModeChange = (event)=>{
  //     setTitleEditMode(event.target.value);
  // };
  // const onBodyEditModeChange = (event)=>{
  //     setBodyEditMode(event.target.value);
  // };

  // const onBodyChange = (event)=>{
  //     setBody(event.target.value);
  // };

  //Submit
  const onFormSubmit = (event) => {
    event.preventDefault();
    // console.log(title.body);
    if (!isEditMode) {
      axios
        .post("https:  //localhost:8080/cust/getCust/27", {
          //title,
          //  body,
          ...postObject,
          userId: 1,
        })
        .then((response) => {
          console.log(response);
          alert("Added");
          //fetech the data again
          fetchData();
          setPostObject({
            title: "",
            body: "",
          });
          //reset form
          //setTitle("");
          // setBody("");
        });
    } else {
      if (postId > 0) {
        axios
          .put("https://jsonplaceholder.typicode.com/posts/" + postId, {
            id: postId,
            title,
            body,
            userId: 1,
          })
          .then((response) => {
            if (response) {
              fetchData();
              alert("updated");
              onReset();
            }
          });
      }
    }
  };

  //Delete
  const onDeleteHandler = (id) => {
    axios
      .delete("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((response) => {
        if (response) {
          fetchData();
          alert("Deleted");
        }
      });
  };

  //edit
  const onEdit = (postObject) => {
    console.log(postObject);
    //  setIsEditMode(true);
    // setTitleEditMode(postObject.title);
    // setTitle(postObject.title);
    //  setBodyEditMode(postObject.body);
    //  setBody(postObject.body);

    setPostId(postObject.id);
    setEditObject({
      // title:postObject.title,
      // body:postObject.body,
      ...postObject,
    });
    setSelectedPostId(postObject.id);
  };

  const onReset = (event) => {
    if (event) {
      event.preventDefault();
    }
    setIsEditMode(false);
    setTitle("");
    setBody("");
  };

  return (
    <>
      <h1>From HooksSample</h1>
      <h2>Posts Form</h2>
      <form onSubmit={onFormSubmit}>
        <label>Title</label>
        <input
          name="title"
          value={postObject.title}
          onChange={onPostObjectChangehandler}
        />
        <label>Body</label>
        <input
          name="body"
          value={postObject.body}
          onChange={onPostObjectChangehandler}
        />

        <button type="submit"> {isEditMode ? "Update" : "Submit"}</button>
        {isEditMode && <button onClick={onReset}>Reset</button>}
      </form>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {postsList.map((post, id, index) => {
            return (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>
                  {selectedPostId === post.id ? (
                    <input
                      name="title"
                      value={editObject.title}
                      onChange={onEditObjectChangehandler}
                    />
                  ) : (
                    post.title
                  )}
                </td>
                <td>
                  {selectedPostId === post.id ? (
                    <input
                      name="body"
                      value={editObject.body}
                      onChange={onEditObjectChangehandler}
                    />
                  ) : (
                    post.body
                  )}
                </td>
                <td>
                  {selectedPostId === post.id ? (
                    <>
                      <button onClick={OnUpdateEditRow}>Update</button>
                      <br />
                      <button onClick={OnResetEditRow}>Reset</button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => {
                          onDeleteHandler(post.id);
                        }}
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => {
                          onEdit(post);
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

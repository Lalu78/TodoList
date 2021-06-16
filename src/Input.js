import React, { useState, useEffect } from "react";
import { db } from "./firebase";

function Input() {
  const [data, setData] = useState();
  const [post, setPost] = useState([]);

  const onHandleChange = (e) => {
    setData(e.target.value);
  };

  const onHandlePost = (event) => {
    db.collection("Formdata").add({
      firstname: data,
    });
    setPost("");
  };

  useEffect(() => {
    db.collection("Formdata").onSnapshot((snapshot) => {
      setPost(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder="write your text"
        value={data}
        onChange={onHandleChange}
      />
      <button onClick={onHandlePost}> post</button>
      {post.map((e) => (
        <p>{e.firstname} </p>
      ))}
    </div>
  );
}

export default Input;

import React, { useState, useEffect } from "react";
import { db } from "./firebase";

function Showinput() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    db.collection("Formdata").onSnapshot((snapshot) => {
      setPost(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div>
      {post.map((e) => (
        <p>{e.firstname} </p>
      ))}
    </div>
  );
}
export default Showinput;

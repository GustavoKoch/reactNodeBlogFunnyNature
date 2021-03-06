import { useState, useEffect } from "react";
import serverUrl from "../serverUrl";

/* import client from "../contentful/client"; */

const usePost = (id) => {
  const [post, setPost] = useState();
 /*  console.log(id); */

  useEffect(() => {

    if (id) {

    fetch(`${serverUrl}/api/posts/${id}`)

/*     fetch(`${serverUrl}/api/posts/${id}`) */

     
      .then((res) => res.json())
      .then(data=> setPost(data[0]))
        /* console.log(data); */
      
      .catch((e) => console.log(e.message));}
  }, [id]);

  /*   useEffect(() => {
    client.getEntry(id).then((entry) => setPost(entry));
  }, [id]); */

  // console.log(post);

  return post;
};

export default usePost;

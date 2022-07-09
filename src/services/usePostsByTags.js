import { useState, useEffect } from "react";
import serverUrl from "../serverUrl";

import client from "../contentful/client";

const usePostsByTags = (tag) => {
  const [posts, setPosts] = useState();
  /* console.log(tag); */
  useEffect(() => {
    if (tag) {
      fetch(`${serverUrl}/api/posts-tags/${tag}`)     
      .then((res) => res.json())
      .then(data=> {
       /*   console.log(data);  */
       setPosts(data)}) 
      
      .catch((e) => console.log(e.message));
    }}, [tag]);  

 /*  console.log(skip) */;

  return posts;
};

export default usePostsByTags;


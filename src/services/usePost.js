import { useState, useEffect } from "react";

import client from "../contentful/client";

const usePost = (id) => {
  const [post, setPost] = useState();

  useEffect(() => {
    client.getEntry(id).then((entry) => setPost(entry));
  }, [id]);

  // console.log(post);

  return post;
};

export default usePost;

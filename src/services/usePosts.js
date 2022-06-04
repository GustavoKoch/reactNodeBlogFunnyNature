import { useState, useEffect } from "react";

import client from "../contentful/client";

const usePosts = (skip) => {
  const [posts, setPosts] = useState();

  useEffect(() => {
         client.getEntries({ content_type: "blog", limit: 6, skip: skip }).then(data => {console.log(data); setPosts(data); }) 
         // 'fields.titel[match]': 'Japanese'
     /*    client.getEntry("6JskwXzBBLXONlsAUGspWg").then(entry => console.log(entry)) */
  }, [skip]);

  if (!posts) return null;

  console.log(posts);

  return posts;
};

export default usePosts;
import { useState, useEffect } from "react";

import client from "../contentful/client";

const usePostsByAuthor = (skip, limit,author) => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    client
      .getEntries({
        content_type: "blog",limit: limit, skip: skip,
        "fields.author.sys.id": author,
      })
      .then((entry) => setPosts(entry));
  }, [limit, skip,author]);

 /*  console.log(posts); */

  return posts;
};

export default usePostsByAuthor;

/*    client
      .getEntries({
        content_type: "article",
        "fields.author.sys.id": authorId,
      }) */

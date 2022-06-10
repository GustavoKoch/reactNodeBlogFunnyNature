import { useState, useEffect } from "react";

import client from "../contentful/client";

const usePostsByAuthor = (author) => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    client
      .getEntries({
        content_type: "blog",
        "fields.author.sys.id": author,
      })
      .then((entry) => setPosts(entry));
  }, [author]);

 /*  console.log(posts); */

  return posts;
};

export default usePostsByAuthor;

/*    client
      .getEntries({
        content_type: "article",
        "fields.author.sys.id": authorId,
      }) */

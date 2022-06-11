import { useState, useEffect } from "react";

import client from "../contentful/client";

const usePostsByTags = (tags) => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    client
      .getEntries({
        content_type: "blog",
        "metadata.tags.sys.id[in]": tags,
      })
      .then((entry) => setPosts(entry));
  }, [tags]);

 /*  console.log(posts); */

  return posts;
};

export default usePostsByTags;

/*    client
        .getEntries({
          content_type: "blogPost",
          "metadata.tags.sys.id[in]": "tag1,tag2,tag3"
        }) */

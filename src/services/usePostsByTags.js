import { useState, useEffect } from "react";

import client from "../contentful/client";

const usePostsByTags = (skip, limit, tags) => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    client
      .getEntries({
        content_type: "blog", limit: limit, skip: skip,
        "metadata.tags.sys.id[in]": tags,
      })
      .then((entry) => setPosts(entry));
  }, [limit, skip,tags]);

 /*  console.log(skip); */

  return posts;
};

export default usePostsByTags;

/*    client
        .getEntries({
          content_type: "blogPost",
          "metadata.tags.sys.id[in]": "tag1,tag2,tag3"
        }) */

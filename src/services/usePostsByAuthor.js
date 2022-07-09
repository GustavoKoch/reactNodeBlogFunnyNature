import { useState, useEffect } from "react";
import serverUrl from "../serverUrl";


/* import client from "../contentful/client"; */

const usePostsByAuthor = (id) => {
 
  const [posts, setPosts] = useState();
  
  useEffect(() => {
    if (id) {
      fetch(`${serverUrl}/api/posts-authors/${id}`)     

      .then((res) => res.json())
      .then(data=> {
      /*   console.log(data);  */
       setPosts(data)}) 
      
      .catch((e) => console.log(e.message));
    }
   


/*     client
      .getEntries({
        content_type: "blog",limit: limit, skip: skip,
        "fields.author.sys.id": author,
      })
      .then((entry) => setPosts(entry)); */

  }, [id]);

 /*  console.log(posts); */

  return posts;
};

export default usePostsByAuthor;

/*    client
      .getEntries({
        content_type: "article",
        "fields.author.sys.id": authorId,
      }) */

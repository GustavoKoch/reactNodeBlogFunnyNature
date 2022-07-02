import { useState, useEffect } from "react";
import serverUrl from "../serverUrl";

/* import client from "../contentful/client"; */

const usePosts = (skip, limit, word, fieldToSearch) => {
  const [posts, setPosts] = useState();
  const [totalPosts, setTotalPosts] = useState();

  /* const offset = (6 * page) - 6; */
  const page = (limit + skip) / 6;

  let param0 = "";
  if (fieldToSearch == "Description") param0 = "descriptionShort";
  if (fieldToSearch == "Title") param0 = "titel";

  /* Also titel, or descriptionLong,  possible */
  const param1 = "fields." + param0 + "[match]";
  const value1 = word;

  useEffect(() => {
    /*   client.getEntries({ content_type: "blog", limit: limit, skip: skip, [param1]:value1 }).then(data => { setPosts(data); })  */

    /*        fetch("http://localhost:5432/api/posts?page="+page)     
       .then((res) => res.json())
       .then(data=> {setPosts(data)})       
       
       .catch((e) => console.log(e.message)); */

    fetch(`${serverUrl}/api/posts/all`)
      .then((res) => res.json())
      .then((data) => {
        /* console.log(data); */
        setPosts(data);
      })


      .catch((e) => console.log(e.message));
  }, [limit, skip, param1, value1]);

  /*   useEffect(() => {
    fetch("http://localhost:5432/api/posts?page="+page)
     
      .then((res) => res.json())
      .then(data=> setPost(data[0]))
        
      
      .catch((e) => console.log(e.message));
  }, [page]); */

  if (!posts) return null;


  /*   const obj={posts, totalPosts}

  return posts;
};

export default usePosts;

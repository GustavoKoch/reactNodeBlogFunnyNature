import { useState, useEffect } from "react";
import serverUrl from "../serverUrl";

/* import client from "../contentful/client"; */


const usePosts = (word, fieldToSearch) => {

  const [posts, setPosts] = useState();

  /* Also titel, or descriptionLong,  possible */


  useEffect(() => {
    /*   client.getEntries({ content_type: "blog", limit: limit, skip: skip, [param1]:value1 }).then(data => { setPosts(data); })  */

    /*        fetch("http://localhost:5432/api/posts?page="+page)     
       .then((res) => res.json())
       .then(data=> {setPosts(data)})       
       
       .catch((e) => console.log(e.message)); */


       if (fieldToSearch=="Description") {
        /* console.log("Hola"); */
       fetch("http://localhost:3001/api/posts-description?search="+word)     
       .then((res) => res.json())
       .then(data=> {
          console.log(data);
        setPosts(data)})        
       .catch((e) => console.log(e.message));

       }else if (fieldToSearch=="Title") {  

       fetch("http://localhost:3001/api/posts-title?search="+word)     
       .then((res) => res.json())
       .then(data=> {
         /* console.log(data); */
        setPosts(data)})        
       .catch((e) => console.log(e.message));

       }else{
       fetch("http://localhost:3001/api/posts/all")     
       .then((res) => res.json())
       .then(data=> {
         /* console.log(data); */
        setPosts(data)})        
       .catch((e) => console.log(e.message));
       }
     
  }, [ word, fieldToSearch]);



  if (!posts) return null;




  return posts;
};

export default usePosts;

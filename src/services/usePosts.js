import { useState, useEffect } from "react";

import client from "../contentful/client";


const usePosts = (skip, limit, word, fieldToSearch) => {

  const [posts, setPosts] = useState();


 let param0="";
  if (fieldToSearch=="Description")  param0="descriptionShort";
  if (fieldToSearch=="Title")  param0="titel";

  

/*   console.log(fieldToSearch)
  console.log(word); */
  /* Also titel, or descriptionLong,  possible */
  const param1 = 'fields.'+param0+"[match]";
  const value1=word;
 /*  console.log(param1, value1); */

  useEffect(() => {

         
         client.getEntries({ content_type: "blog", limit: limit, skip: skip, [param1]:value1 }).then(data => { setPosts(data); }) 
     /*    client.getEntry("6JskwXzBBLXONlsAUGspWg").then(entry => console.log(entry)) */
  }, [limit, skip,param1, value1]);

  if (!posts) return null;

  /* console.log(posts); */

/*     client.getEntries({ content_type: "blog", limit, skip }).then((data) => {
      // console.log(data);
      setPosts(data);
    });
    
   
  }, [limit, skip]); */


  return posts;
};

export default usePosts;

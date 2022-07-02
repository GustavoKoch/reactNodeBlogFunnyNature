import { useState, useEffect } from "react";

import client from "../contentful/client";

const useAuthors = () => {
  const [authors, setAuthors] = useState(); 




  useEffect(() => {
         
      /*    client.getEntries({ content_type: "author",  }).then(data => { console.log(data);setAuthors(data); })  */
     /*    client.getEntry("6JskwXzBBLXONlsAUGspWg").then(entry => console.log(entry)) */

     fetch("http://localhost:5432/api/authors")     
     .then((res) => res.json())
     .then(data=> {
       /* console.log(data); */
      setAuthors(data)}) 
     
     .catch((e) => console.log(e.message));
  }, []);

  if (!authors) return null;

/*   console.log(authors); */

  return authors;
};

export default useAuthors;

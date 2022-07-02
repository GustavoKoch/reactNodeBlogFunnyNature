import { useState, useEffect } from "react";
import serverUrl from "../serverUrl";

/* import client from "../contentful/client"; */

const useAuthors = () => {
  const [authors, setAuthors] = useState(); 


  useEffect(() => {
         
      /*    client.getEntries({ content_type: "author",  }).then(data => { console.log(data);setAuthors(data); })  */
     /*    client.getEntry("6JskwXzBBLXONlsAUGspWg").then(entry => console.log(entry)) */

     fetch(`${serverUrl}/api/authors`)     
     .then((res) => res.json())
     .then(data=> {
       /* console.log(data);  */
      setAuthors(data)}) 
     
     .catch((e) => console.log(e.message));
  }, []);

  

/*   console.log(authors); */

  return authors;
};

export default useAuthors;

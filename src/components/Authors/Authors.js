import React, { useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import { Card } from "react-bootstrap";
import CardAuthor from"./CardAuthor.js";
/* Importing usePost for fetching the data  */
import useAuthors from "../../services/useAuthors";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Authors() {
  const [skip, setSkip] = useState(0);
  const [word, setWord] = useState();
  const [fieldToSearch, setfieldToSearch] = useState();

  const setSearch = (fieldToSearch, newWord) => {
    setWord(newWord);
    setfieldToSearch(fieldToSearch);
  };

  const allAuthors = [
    { Name: "Mike", id: "7wTo5HuJVICF9jyMYNXpI0" },
    { Name: "André", id: "9HEY3sb5GMK4fCFdzT21P" },
    { Name: "Barbara", id: "4LAGm4ke1kU6ZwjfwPyIDc" },
    { Name: "Gustavo", id: "4PbKrwJt0JWYiUeCA2DXBa" },
  ];

/*   console.log(allAuthors); */
const authors = useAuthors();
if (!authors) return null;
 console.log(authors.items); 




  return (
    <div>
      <NavBar
        searchFunction={(fieldToSearch, newWord) =>
          setSearch(fieldToSearch, newWord)
        }
      />


      {authors.items.map((x, index) => (
   /*       <NavLink to={`/byAuthors/${x.id}`}><h1 key={index}>{x.Name}</h1>;</NavLink>  */
         <CardAuthor key={index} 
            name={x.fields.name}
            email={x.fields.email}
            pic={x.fields.avatar.fields.file}
            desc={x.fields.authorDescription}
            id={x.sys.id}        
        /> 
    ))}

    
    </div>
  );
}

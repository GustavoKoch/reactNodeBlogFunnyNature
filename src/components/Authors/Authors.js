import React, { useState } from "react";

import NavBar from "../NavBar/NavBar";

import CardAuthor from"./CardAuthor.js";
/* Importing usePost for fetching the data  */
import useAuthors from "../../services/useAuthors";
import serverUrl from "../../serverUrl";


import "bootstrap/dist/css/bootstrap.min.css";

export default function Authors() {
  
 
  



  const allAuthors = [
    { Name: "Mike", id: "7wTo5HuJVICF9jyMYNXpI0" },
    { Name: "André", id: "9HEY3sb5GMK4fCFdzT21P" },
    { Name: "Barbara", id: "4LAGm4ke1kU6ZwjfwPyIDc" },
    { Name: "Gustavo", id: "4PbKrwJt0JWYiUeCA2DXBa" },
  ];

/*   console.log(allAuthors); */
const authors = useAuthors();
if (!authors) return null;
 console.log(authors); 

  return (
    <div>
      <NavBar
        
     
      />


      {authors.map((x, index) => (
   /*       <NavLink to={`/byAuthors/${x.id}`}><h1 key={index}>{x.Name}</h1>;</NavLink>  */
         <CardAuthor key={index} 
            name={x.name}
            email={x.email}

            pic={`${serverUrl}/author-images/${x.image_authors}`}

            desc={x.description}
            id={x.id}        
        /> 
    ))}

    
    </div>
  );
}

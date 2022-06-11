import React, { useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

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

  console.log(allAuthors);

  return (
    <div>
      <NavBar
        searchFunction={(fieldToSearch, newWord) =>
          setSearch(fieldToSearch, newWord)
        }
      />

      {allAuthors.map((x, index) => 
        
        <NavLink to={`/byAuthors/${x.id}`}><h1 key={index}>{x.Name}</h1>;</NavLink>
      )}
    </div>
  );
}

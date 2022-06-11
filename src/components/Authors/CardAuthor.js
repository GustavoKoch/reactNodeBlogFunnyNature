

import { Card } from "react-bootstrap";
import { useParams, NavLink } from "react-router-dom";
import React, { useState } from "react";

export default function CardAuthor({name, email, pic, desc, id}) {

  console.log(pic)

  pic=`https:${pic.url}`;
// console.log(name);
// console.log(email);

// console.log(desc);
// console.log(id);

// console.log(pic);



  return (
    <div>
 
      <Card  style={{ width: "18rem" }}>
        <Card.Img variant="top" src={pic} />
        <Card.Body>
          <Card.Title>
            <NavLink to={`/byAuthors/${id}`}>
              <h1>{name}</h1>
            </NavLink>
          </Card.Title>
          <Card.Text>{desc}
            
          </Card.Text>
          {/*  <Button variant="primary">Go somewhere</Button> */}
          <h3>{email}</h3>
        </Card.Body>
      </Card>
      ;
    </div>
  );
}

import { Card } from "react-bootstrap";
import {  NavLink } from "react-router-dom";
import React from "react";

export default function CardAuthor({ name, email, pic, desc, id }) {
  /* console.log(pic);
 */
 /*  pic = `https:${pic.url}`; */

  return (
    <div>
      <Card className="author-card">
        <Card.Img className="author-image" variant="top" src={pic} />
        <Card.Body className="author-body">
          <Card.Title className="author-title">
            <NavLink className="author-name centerName" to={`/api/posts-authors/${id}`}>
              <h2>{name}</h2>
            </NavLink>
          </Card.Title>
          <Card.Text >{desc}</Card.Text>
          {/*  <Button variant="primary">Go somewhere</Button> */}
          <h3 className="author-email">📧 {email}</h3>
        </Card.Body>
      </Card>
    </div>
  );
}

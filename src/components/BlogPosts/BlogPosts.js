import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Card, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import serverUrl from "../../serverUrl"

const BlogPosts = ({
  title,
  image,
  imageAlt,
  descriptionShort,
  descriptionLong,
  date,
  articleId,
  author
}) => {
  console.log(articleId);
  return (
    <Card className="blog-post-card">
      <Card.Body className="blog-post-body">
        <Card.Title className="blog-post-title">{title}</Card.Title>

        <Card.Img variant="top" src={`${serverUrl}/animal-images/${image}`}/>


        <Card.Text className="blog-post-description">
          {descriptionShort}
        </Card.Text>
        <NavLink className="link link-nav" to={`/${articleId}`}>
          <Button variant="primary">See More</Button>
        </NavLink>
        <div className="blog-post-footer">
          <div className="blog-post-author">Written by: {author}</div>
          <div className="blog-post-date">Posted: {date.slice(0, 10).split("-").reverse().join("-")}</div>
        </div>
      </Card.Body>
    </Card>

    // <div className="blog-post-card">
    //   <h1>{title}</h1>
    //   <img src={image} alt={imageAlt}/>
    //   <h3>{descriptionShort}</h3>
    //   <span>{documentToReactComponents(descriptionLong)}</span>
    //   <p>{date}</p>
    // </div>
  );
};

export default BlogPosts;

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Card, Button } from 'react-bootstrap';

const BlogPosts = ({title, image, imageAlt, descriptionShort, descriptionLong, date }) => {
  return (

<Card className="blog-post-card">
  <Card.Body className="blog-post-body">
    <Card.Title className="blog-post-title">{title}</Card.Title>
    <Card.Img variant="top" src={image} />
    <Card.Text className="blog-post-description">{descriptionShort}</Card.Text>
    <Button variant="primary">See More</Button>
    <div className="blog-post-footer">
    <div className="blog-post-author">Written by: Gustavo</div>
    <div className="blog-post-date">Posted: {date}</div>
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

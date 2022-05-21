import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const BlogPosts = ({
  title,
   image,
  descriptionShort,
  /* descriptionLong, */
  date,
}) => {
  return (
    <div>
      <h1>{title}</h1>
{/*  <img src={image.fields.file.url}> */}
      <h3>{descriptionShort}</h3>
      {/* <p>{documentToReactComponents({descriptionLong})}</p> */}
      <p>{date}</p>
    </div>
  );
};

export default BlogPosts;

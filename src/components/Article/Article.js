import "./Article.css";
import { Card } from "react-bootstrap";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactStars from "react-stars";
import { FaBeer, FaTwitter, FaHeart } from "react-icons/fa";
import { MailIcon } from "react-mail-icon";
import React, { useState } from "react";
import TimeAgo from "react-timeago";
import Parser from "html-react-parser";
import { useParams } from "react-router-dom";
import usePost from "../../services/usePost";


export default function Article() {
  const [shouldAnimate, setAnimation] = useState(false);
  const [heart, setHearth] = useState("");
  const [tweeter, setTweeter] = useState("");
  const [beer, setBeer] = useState("");

  const { articleId } = useParams();
  // console.log(posts.items);

  // const post = posts.items.find((art) => art.sys.id == articleId);
   const post = usePost(articleId);

  /* Code for the mail envelope animation */

  if (!post) return null;

  const mailIconStyle = {
    display: "flex",
  };

  

  const {
    titel: title,
    descriptionShort: descshort,
    author2: author2,
    rating: Rating,
  } = post.fields;

  /* --------------------------------   */

  const descLong = documentToReactComponents(post.fields.descriptionLong);
  const authors = post.fields;

  //console.log(authors.author);

  const authorName = (x) => {
    console.log(x);
    let allNames = "";

    x.author.map((authorObj) => {
      if (allNames == "") {
        allNames += authorObj.fields.name;
      } else {
        allNames += ", " + authorObj.fields.name;
      }
    });

    return allNames;
  };

  const allAuthors = authorName(authors);

  const image = post.fields.image.fields.file.url;



  const heartToggle = () => {
    if (heart == "") setHearth("heart");
    else setHearth("");
  };

  const today = new Date();
  const startDate = new Date(post.fields.date);

  /*   const diff=today - new Date(post.fields.date);
  console.log(today);
  console.log(new Date(post.fields.date));
  console.log(diff); */

  const tweeterToggle = () => {
    if (tweeter == "") setTweeter("tweeter");
    else setTweeter("");
  };

  const beerToggle = () => {
    if (beer == "") setBeer("beer");
    else setBeer("");
  };

  return (
    <div class="bigCard">
      <Card class="card" style={{ width: "48rem" }}>
        <Card.Title>
          <h1>{title}</h1>
          <h3>{<TimeAgo date={startDate} />} ...</h3>
        </Card.Title>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Text>{descLong} </Card.Text>

          <div className="video">{Parser(post.fields.video)}</div>
        </Card.Body>

        <div id="container2">
          <span id="author">By : </span> <span>&nbsp;</span>
          {allAuthors}
        </div>
        <div id="container3">
          <div id="Rating">
            <ReactStars
              count={5}
              onChange={null}
              edit={false}
              size={24}
              color2={"#ffd700"}
              value={Rating}
            />
            <span id="ratNum">({Rating})</span>
          </div>
          <div class="icons">
            <h3 className={beer} onClick={beerToggle}>
              {" "}
              <FaBeer />{" "}
            </h3>

            <h3 className={heart} onClick={heartToggle}>
              {" "}
              <FaHeart />
            </h3>
            <h3 className={tweeter} onClick={tweeterToggle}>
              {" "}
              <FaTwitter />{" "}
            </h3>
          </div>
          <div id="mail">
            <MailIcon
              style={mailIconStyle}
              mailBackFoldColor="#2874A6"
              mailTopFoldColor="#2E86C1"
              mailLeftFoldColor="#3498DB"
              mailRightFoldColor="#5DADE2"
              letterBackgroundColor="#FFFFFF"
              letterBorderColor="#1ABC9C"
              letterTextColor="#1ABC9C"
              shouldAnimateOpen={shouldAnimate}
              shouldAnimateDown={shouldAnimate}
              shouldAnimateOnHover
            />
          </div>
        </div>
      </Card>
    </div>
  );
}

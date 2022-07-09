import "./Article.css";
import { Card } from "react-bootstrap";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import ReactStars from "react-stars";
import { FaBeer, FaTwitter, FaHeart } from "react-icons/fa";
import { MailIcon } from "react-mail-icon";
import React, { useState } from "react";
import TimeAgo from "react-timeago";
import Parser from "html-react-parser";
import { useParams } from "react-router-dom";
import { Markup } from 'interweave';
<<<<<<< HEAD
import serverUrl from "../../serverUrl"
=======
>>>>>>> 3d0090d1ab5c267e27fbf7dba5c66f81694d4367

/* Importing usePost for fetching the data  */
import usePost from "../../services/usePost";
import NavBar from "../NavBar/NavBar";

export default function Article() {
  const [shouldAnimate, setAnimation] = useState(false);
  const [heart, setHearth] = useState("");
  const [tweeter, setTweeter] = useState("");
  const [beer, setBeer] = useState("");

  const [skip, setSkip] = useState(0);
  const [word, setWord] = useState();
  const [fieldToSearch, setfieldToSearch] = useState();

  const setSearch = (fieldToSearch, newWord) => {
    setWord(newWord);
    setfieldToSearch(fieldToSearch);
  };

  /* Reading the Id from url and passing it as a parameter to fetch only this article */
  const { articleId } = useParams();
  console.log(articleId);

  const post = usePost(articleId);

  /* Code for the mail envelope animation */
  if (!post) return null;
  const mailIconStyle = {
    display: "flex",
  };

/*   const {
    titel: title,
    descriptionShort: descshort,
    author2: author2,
    rating: Rating,
  } = post.fields; */

  const {
    title: titel,    
    descriptionlong: descLong,
    image_posts:image,
    author: author,
    rating: Rating,
    date:date
  } = post;
/*   console.log(post);
  console.log(post. descriptionlong);
  console.log(descLong); */

  /* --------------------------------   */

/*   const descLong = documentToReactComponents(post.fields.descriptionLong);
  const authors = post.fields; */

  /* Function for listing autors in this card */
/*   const authorName = (x) => {
    // console.log(x);
    let allNames = "";

    x.author.map((authorObj) => {
      if (allNames == "") {
        allNames += authorObj.fields.name;
      } else {
        allNames += ", " + authorObj.fields.name;
      }
    });
    return allNames;
  }; */

  /* const allAuthors = authorName(authors); */
 /*  const image = post.fields.image.fields.file.url; */

  const heartToggle = () => {

    if (heart === "") setHearth("heart");

    else setHearth("");
  };

  const today = new Date();
 /*  const startDate = new Date(post.fields.date); */
 const startDate = new Date(date);

  const tweeterToggle = () => {

    if (tweeter === "") setTweeter("tweeter");

    else setTweeter("");
  };

  const beerToggle = () => {

    if (beer === "") setBeer("beer");

    else setBeer("");
  };

  return (
    <>
      <NavBar
        searchFunction={(fieldToSearch, newWord) =>
          setSearch(fieldToSearch, newWord)
        }
      />
      <div className="bigCard">
        <Card className="card" style={{ width: "48rem" }}>
          <Card.Title>
            <h1>{titel}</h1>
            <h4>{<TimeAgo date={date} />} ...</h4>
          </Card.Title>

          <Card.Img variant="top"  src={`${serverUrl}/animal-images/${image}`}/>

          <Card.Body>
            <Card.Text><Markup content={descLong} noHtml /> </Card.Text>

            <div className="video">
            <iframe width="560" height="315" src={post.video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </Card.Body>

          <div id="container2">
            <span id="author">By : </span> <span>&nbsp;</span>
            {author}
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
            <div className="icons">
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
    </>
  );
}

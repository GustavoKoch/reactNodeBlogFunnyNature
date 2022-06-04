import React, { useState, useEffect } from "react";
import "./Home.css";
import "../NavBar/NavBar.css";
import "../BlogPosts/BlogPosts.css";
import NavBar from "../NavBar/NavBar";
import client from "../../contentful/client";
import BlogPosts from "../BlogPosts/BlogPosts";
import Article from "../Article/Article";
import usePosts from "../../services/usePosts";

function Home() {
  
  const [story, setStory] = useState();

  // const [tags, setTag] = useState("story");
  const [hitsPage, setHitsPage] = useState("50");
  const [skip, setSkip] = useState(0)

  const posts = usePosts(skip);

  const searchWord = (word) => {};

  const numOfResults = (num) => {
    /*   setHitsPage(num); */
  };

  /*   const changePage = (num) => {
    if (num + page < 1) return;
    setPage(num + page);
  }; */

  /*  useEffect(() => {
  // client.getEntry("6JskwXzBBLXONlsAUGspWg").then(entry => console.log(entry))
  client.getEntries({ content_type: "blog" }).then(data => setStory(data))

 }, []) */

  /*  useEffect(() => {


 }, []) */

  if (!posts) return null;

  console.log(posts.items);
  console.log(posts.items[1].sys.id);

  return (
    <div className="Home">
      <NavBar />
      {posts.items.map((article, index) => (
        <BlogPosts
          key={index}
          title={article.fields.titel}
          image={article.fields.image.fields.file.url}
          imageAlt={article.fields.image.fields.description}
          descriptionShort={article.fields.descriptionShort}
          descriptionLong={article.fields.descriptionLong}
          date={article.fields.date}
          articleId={article.sys.id}
        />
      ))}

      {/* <h1>{firstStory.fields.titel}</h1>
      {documentToReactComponents(firstStory.fields.descriptionLong)} */}
      {/*       {news &&
          news.hits
            .filter((story) => story.url !== null)
            .map((story, index) => (
              <StoryCard key={index} story={story} storyNum={index} />
            ))}  */}

      {/*  {<Article story={firstStory}/> } */}
    </div>
  );
}

export default Home;

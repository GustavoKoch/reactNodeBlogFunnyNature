import React, { useState, useEffect } from "react";
import "./Home.css";
import "../NavBar/NavBar.css";
import "../BlogPosts/BlogPosts.css";
import NavBar from "../NavBar/NavBar";
import BlogPosts from "../BlogPosts/BlogPosts";
import usePosts from "../../services/usePosts";

function Home() {
  const [skip, setSkip] = useState(0);
  const [word, setWord] = useState();
  const [fieldToSearch, setfieldToSearch] = useState();

  const setSearch = (fieldToSearch, newWord) => {
    setWord(newWord);
    setfieldToSearch(fieldToSearch);
  };

/*  console.log(word); */
  
  const posts = usePosts(skip, word, fieldToSearch);

  const numOfResults = (num) => {
    /*   setHitsPage(num); */
  };

  /*  useEffect(() => {
  // client.getEntry("6JskwXzBBLXONlsAUGspWg").then(entry => console.log(entry))
  client.getEntries({ content_type: "blog" }).then(data => setStory(data))

 }, []) */

  if (!posts) return null;

  /*   console.log(posts.items);
  console.log(posts.items[1].sys.id); */

  return (
    <div className="Home">
      <NavBar searchFunction={(fieldToSearch, newWord) => setSearch(fieldToSearch, newWord)} />
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

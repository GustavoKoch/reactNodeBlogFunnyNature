import React, { useState, useEffect } from "react";
import "./Home.css";
import "../NavBar/NavBar.css";
import "../BlogPosts/BlogPosts.css";
import NavBar from "../NavBar/NavBar";

import BlogPosts from "../BlogPosts/BlogPosts";
import usePosts from "../../services/usePosts";
import usePostsByTags from "../../services/usePostsByTags";
import usePostsByAuthor from "../../services/usePostsByAuthor";
import { useParams } from "react-router-dom";

function Home() {
  const [skip, setSkip] = useState(0);
  const [word, setWord] = useState();
  const [fieldToSearch, setfieldToSearch] = useState();

  const setSearch = (fieldToSearch, newWord) => {
    setWord(newWord);
    setfieldToSearch(fieldToSearch);
  };

/*  console.log(word); */
  
  let posts = usePosts(skip, word, fieldToSearch); 
  


    /* Reading the AuthorId or the tag from url and passing it as a parameter to fetch only articles for the specified author or tag */
    const {authorId } = useParams();
    const {tag} = useParams();
    const postsByAuthor = usePostsByAuthor(authorId)
    const postsByTags = usePostsByTags(tag);
    
    console.log (authorId);
    console.log (tag);
/*     console.log (postsByAuthor); */
    console.log (postsByTags);


  if (authorId){posts = postsByAuthor;};
  if (tag){posts = postsByTags;};

  if (!posts) return null;

  console.log(posts);

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


    </div>
  );
}

export default Home;

import React, { useState, useEffect } from "react";
import "../BlogPosts/BlogPosts.css";
import "./Home.css";
import "../NavBar/NavBar.css";
import "../Footer/Footer.css";
import NavBar from "../NavBar/NavBar";

import Footer from "../Footer/Footer";
import client from "../../contentful/client";

import BlogPosts from "../BlogPosts/BlogPosts";
import usePosts from "../../services/usePosts";

import usePostsByTags from "../../services/usePostsByTags";
import usePostsByAuthor from "../../services/usePostsByAuthor";
import { useParams } from "react-router-dom";
import BlogPagination from "../Pagination/Pagination";

function Home() {
  const [skip, setSkip] = useState(0);
  const [word, setWord] = useState();
  const [fieldToSearch, setfieldToSearch] = useState();

 
  const setSearch = (fieldToSearch, newWord) => {
    setWord(newWord);
    setfieldToSearch(fieldToSearch);
  };

  const limit = 6;

/*  console.log(word); */
  
  let posts = usePosts(skip,limit, word, fieldToSearch); 
  


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
  
/*   const posts = usePosts(skip, limit); */



  const handlePrevPage = () => {
    const prevSet = skip - limit;
    const currentPage = skip / limit;
    if (0 >= currentPage) return;
    setSkip(prevSet);
  };

  const handleNextPage = () => {
    // if you know what's the max number of posts
    // if skip + limit > maxNumberOfPosts; return;
    const nextSet = skip + limit;
    if (nextSet >= posts.total) return;
    setSkip(nextSet);
  };

  const handleOnPage = (pageNumber) => {
    const skipSet = (pageNumber - 1) * limit;
    setSkip(skipSet);
  };


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

      <BlogPagination
        onPrevPage={handlePrevPage}
        onNextPage={handleNextPage}
        onPage={handleOnPage}
        total={posts.total}
        limit={limit}
        skip={skip}
      />
      <Footer />

    </div>
  );
}

export default Home;

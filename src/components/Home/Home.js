import React, { useState, useEffect } from "react";
import "../BlogPosts/BlogPosts.css";
import "./Home.css";
import "../NavBar/NavBar.css";
import "../Footer/Footer.css";
import "../Authors/Authors.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
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

/* For reseting through onlcik Home navBar */
  const handleResetSearch = () => {
    setWord();
    setfieldToSearch();
    setSkip(0);
  }

   
  const allPosts = usePosts(skip, limit, word, fieldToSearch); 
  let posts=allPosts;
  


   /*  console.log(posts); */

    /* Reading the AuthorId or the tag from url and passing it as a parameter to fetch only articles for the specified author or tag */
    const {authorId } = useParams();
    const {tag} = useParams();
    const postsByAuthor = usePostsByAuthor(skip,limit,authorId)
    const postsByTags = usePostsByTags(skip,limit,tag);


    let nameAuthor;
    let adjSuper;
  if (authorId){posts = postsByAuthor;


 /*    const allAuthors = [
      { Name: "Mike", id: "7wTo5HuJVICF9jyMYNXpI0" },
      { Name: "André", id: "9HEY3sb5GMK4fCFdzT21P" },
      { Name: "Barbara", id: "4LAGm4ke1kU6ZwjfwPyIDc" },
      { Name: "Gustavo", id: "4PbKrwJt0JWYiUeCA2DXBa" },
    ]; */    
    const allAuthors = [
      { Name: "Mike", id: "1" },
      { Name: "André", id: "2" },
      { Name: "Barbara", id: "4" },
      { Name: "Gustavo", id: "3" },
    ];

      nameAuthor = allAuthors.find(element => element.id ==authorId).Name;
      /* console.log(nameAuthor); */  
  };
  if (tag){posts = postsByTags;
  
    const superlatives = [
      { adj: "cutest", id: "cute" },
      { adj: "most beautiful", id: "bill" },
      { adj: "ugliest", id: "ugly" },
      { adj: "scariest", id: "scary" },
      { adj: "most toxic", id: "toxic" }
    ];
    adjSuper = superlatives.find(element => element.id ==tag).adj;
   /*    console.log(adjSuper); */
  };

  if (!posts) return null;
  if (!allPosts) return null;
  
  posts= allPosts.slice(skip, skip+6);
  console.log(posts); 

  /* console.log(posts); */

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
      <NavBar searchFunction={(fieldToSearch, newWord) => setSearch(fieldToSearch, newWord)} onResetSearch={handleResetSearch} />
      {nameAuthor&&<h2 className="Subtitle">Here the precious animals from <span className="authorName">{nameAuthor}</span></h2>}
      {tag&&<h2 className="Subtitle">These are the <span>{adjSuper}</span> animals of nature</h2>}
      {word&&<h2 className="Subtitle">These are the results for <span className="word">"{word}"</span></h2>}

      {posts.map((article, index) => (
        <BlogPosts
          key={index}
          title={article.title}
          /* image={article.image_posts} */
          /* imageAlt={article.image_posts} */
          descriptionShort={article.descriptionshort}
          descriptionLong={article.descriptionlong}
          date={article.date}
          articleId={article.post_num}
          author={article.author}
        />
      ))}

      <BlogPagination
        onPrevPage={handlePrevPage}
        onNextPage={handleNextPage}
        onPage={handleOnPage}
        total={allPosts.length}
        limit={limit}
        skip={skip}
      />
      <Footer />
    </div>
  );
}

export default Home;

import React, { useState, useEffect } from "react";
import "./Home.css";
import "../NavBar/NavBar.css";
import "../Footer/Footer.css";
import "../BlogPosts/BlogPosts.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import client from "../../contentful/client";
import BlogPosts from "../BlogPosts/BlogPosts";
import Article from "../Article/Article";
import usePosts from "../../services/usePosts";
import BlogPagination from "../Pagination/Pagination";

const limit = 6;

function Home() {
  const [skip, setSkip] = useState(0);
  const posts = usePosts(skip, limit);

  if (!posts) return null;

  // console.log(posts.items);
  // console.log(posts.items[1].sys.id);

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

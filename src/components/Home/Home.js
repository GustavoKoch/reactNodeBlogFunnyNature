import React, { useState, useEffect } from "react";
import "./Home.css"
import "../NavBar/NavBar.css";
import "../BlogPosts/BlogPosts.css";
import NavBar from "../NavBar/NavBar";
import client from "../../contentful/client"
import BlogPosts from "../BlogPosts/BlogPosts"
import Article from "../Article/Article";




//  import BarLoader from "react-spinners/BarLoader";
//import ClipLoader from "react-spinners/ClipLoader";

function Home() {
  const [story, setStory] = useState();
/*   const [wordQuery, setWordQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [totalpages, setTotalPages] = useState(); */

  // const [tags, setTag] = useState("story");
  const [hitsPage, setHitsPage] = useState("50");

  const searchWord = (word) => {
  /*   setWordQuery(word); */
  };

  const numOfResults = (num) => {
  /*   setHitsPage(num); */
  };

/*   const changePage = (num) => {
    if (num + page < 1) return;
    setPage(num + page);
  }; */

 useEffect(() => {
  // client.getEntry("6JskwXzBBLXONlsAUGspWg").then(entry => console.log(entry))
  client.getEntries({ content_type: "blog" }).then(data => setStory(data))

 }, [])

  /*useEffect(() => {
    setIsLoading(true);

    const urlSearch = new URL(Url);
    urlSearch.searchParams.set("query", wordQuery);
    urlSearch.searchParams.set("restrictSearchableAttributes", "url");
    urlSearch.searchParams.set("tags", "story");
    urlSearch.searchParams.set("hitsPerPage", hitsPage);
    urlSearch.searchParams.set("page", page);

    //console.log("Hello URL:"+ urlSearch);

    fetch(urlSearch)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `An error has occured while fetching the data. Status code: ${response.status}`
          );
        }
        return response.json();
      })
      .then((data) => {
        setNews(data);
        //console.log(data)
        setTotalPages(data.nbPages);

        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsError(true);
        setIsLoading(false);
      });
  }, [wordQuery, hitsPage, page]);

  // https://www.npmjs.com/package/react-paginate

  // npm install --save react-spinners

  // let array = [];

  if (isError) {
    return (
      <div className="Home">
        <h1>Error loading page, please refresh your page and try again</h1>
      </div>
    );
  } else if (isLoading) {
    return (
      <div className="spinner">
       
        <ClipLoader color="#ff6600" size={350} speed={20} />
      </div>
    );
  } else { */

  if (!story) return null

console.log(story.items[0])
const firstStory = story.items[2]

    return (
      <div className="Home">
          <NavBar />
          {story.items.map((article, index) =>
          <BlogPosts key={index} title={article.fields.titel} image={article.fields.image.fields.file.url} imageAlt={article.fields.image.fields.description} descriptionShort={article.fields.descriptionShort} descriptionLong={article.fields.descriptionLong} date={article.fields.date}/>)}
      
      {/* <h1>{firstStory.fields.titel}</h1>
      {documentToReactComponents(firstStory.fields.descriptionLong)} */}
  {/*       {news &&
          news.hits
            .filter((story) => story.url !== null)
            .map((story, index) => (
              <StoryCard key={index} story={story} storyNum={index} />
            ))}  */}

    {/* <Article/> */}
      </div>
    );
  }


export default Home;

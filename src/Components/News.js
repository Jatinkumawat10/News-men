import React, { useEffect, useState } from "react";
import Newsitem from "./newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setarticles] = useState([]);
  const [page, setpage] = useState(1);
  const [loading, setloading] = useState(true);
  const [totalResults, settotalResults] = useState(0);
  console.log(process.env.REACT_APP_API_KEY);
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  document.title = ` ${capitalizeFirstLetter(props.category)}`;

  const newfun = async () => {
    props.setprogress(10);
    const url = ` https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${process.env.REACT_APP_API_KEY}&page=${page}&pageSize=${props.pageSize}`;
    setloading(true);

    let data = await fetch(url);
    props.setprogress(30);
    let parseddata = await data.json();
    props.setprogress(60);
    setarticles(parseddata.articles);
    settotalResults(parseddata.totalResults);
    setloading(parseddata.loading);

    props.setprogress(100);
  };
  useEffect(() => {
    newfun();
  }, []);

  const fetchMoreData = async () => {
    const url = ` https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${process.env.REACT_APP_API_KEY}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setpage(page + 1);

    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(parseddata);
    console.log(parseddata);
    setarticles(articles.concat(parseddata.articles));
    settotalResults(parseddata.totalResults);
    // console.log("hello");
    props.setprogress(100);
  };

  // const categoryColors = {
  //   health: "bg-info",
  //   sports: "bg-success",
  //   technology: "bg-info",
  //   business: "bg-danger",
  //   entertainment: "bg-success",
  // };
  // const categoryColor = categoryColors[props.category] || "bg-primary";
  console.log(props.mode);
  return (
    <div
      style={{
        backgroundColor: props.mode === "light" ? "#ced4da" : "#343a40",
        marginTop: "-7px",
      }}
    >
      <h2
        className={`heading mt-8 text-center mb-2 text-${
          props.mode === "dark" ? "light" : "dark"
        }`}
        style={{
          fontSize: "3rem",
          fontWeight: "800",
          margin: "63px 50px 30px 25px",
        }}
      >
        <strong>News-Men: {props.category} Top Headlines</strong>
      </h2>

      <div className="new">{loading && <Spinner />}</div>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div
          className="container "
          style={{
            maxWidth: "1170px",
            paddingLeft: "30px",
            minHeight: "1000px",
          }}
        >
          <div className="row ">
            {articles.map((element) => {
              return (
                <div className="col  " key={element.url}>
                  <Newsitem
                    title={element.title ? element.title.slice(0, 25) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 85)
                        : ""
                    }
                    imageurl={element.urlToImage}
                    newsurl={element.url}
                    date={element.publishedAt}
                    author={element.author}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 1,
  category: "sports",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News;

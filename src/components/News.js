import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]/* Initial value of state*/)
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
 
  const updateNews = async () => {
    props.changeProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3e181924374b4955b4018130d947707b&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    props.changeProgress(30);
    let data = await fetch(url);
    let parsedData = await data.json();
    props.changeProgress(60);
    setArticles(parsedData.articles);
    setLoading(false);
    setTotalResults(parsedData.totalResults);
    props.changeProgress(100);
  }

  useEffect(() => {
    document.title = `News Today - ${props.category}`;
    updateNews();
  }, []) // This does same thing as componentDidMount()


  /* async componentDidMount() { // This runs after render
    this.updateNews();
  }*/


  const handlePrevClick = async () => {
    setPage(page - 1);
    updateNews();
  }

  const handleNextClick = async () => {
    setPage(page + 1);
    updateNews();
  }

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3e181924374b4955b4018130d947707b&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setLoading(false);
    setTotalResults(parsedData.totalResults);
  };

  return (
    <div className="container my-2">
      <h1 className="text-center" style={{ margin: "30px", marginTop: "80px"}}>Top {props.category} Headlines</h1>
      {loading && <Spinner />/* Spinner is only visible when statement before && is true*/}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return <div className="col-md-4 my-3" key={element.url}/* Each element must return a unique key. Here url is the unique key*/>
                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author ? element.author : "Unknown"} date={element.publishedAt} source={element.source.name} />
              </div>
            })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  )
}


News.defaultProps = {
  pageSize: 9,
  country: "in",
  category: "general"
}

News.propTypes = {
  pageSize: PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string,
}

export default News
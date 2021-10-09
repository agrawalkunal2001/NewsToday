import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  constructor() { // This runs before render
    super();
    this.state = { // State is used when data is changes dynamically
      articles1: [],
      loading: false,
      page: 1
    }
  }

  async componentDidMount() { // This runs after render
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=3e181924374b4955b4018130d947707b&page=1&pageSize=15";
    let data = await fetch(url); // Using async-await because it return a promise
    let parsedData = await data.json();
    this.setState({ articles1: parsedData.articles, totalResults: parsedData.totalResults });
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=3e181924374b4955b4018130d947707b&page=${this.state.page - 1}&pageSize=15`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles1: parsedData.articles,
      page: this.state.page - 1 // After fetching data, set state
    });
  }

  handleNextClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults/15)) {} // Math.ceil gives smallest integer greater than decimal number
    else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=3e181924374b4955b4018130d947707b&page=${this.state.page + 1}&pageSize=15`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles1: parsedData.articles,
        page: this.state.page + 1 // After fetching data, set state
      });
    }
  }

  render() {
    return (
      <div className="container my-3">
        <h2>Top Headlines</h2>
        <div className="row">
          {this.state.articles1.map((element) => {
            return <div className="col-md-4 my-3" key={element.url}/* Each element must return a unique key. Here url is the unique key*/>
              <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
            </div>
          })}
        </div>
        <div className="container my-2 d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" onClick={this.handlePrevClick} class="btn btn-dark">&#8592; Previous</button>
          <button type="button" onClick={this.handleNextClick} class="btn btn-dark">Next &#8594;</button>
        </div>
      </div>
    )
  }
}

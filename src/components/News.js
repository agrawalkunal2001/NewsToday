import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export default class News extends Component {
  static defaultProps = {
    pageSize: 9,
    country: "in",
    category: "general"
  }

  static propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string,
  }

  constructor(props) { // This runs before render
    super(props);
    this.state = { // State is used when data is changes dynamically
      articles1: [],
      loading: false,
      page: 1
    }
    document.title = `News Today - ${this.props.category}`;
  }

  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3e181924374b4955b4018130d947707b&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles1: parsedData.articles,
      loading: false
    });
  }


  async componentDidMount() { // This runs after render
    this.updateNews();
  }


  handlePrevClick = async () => {
    this.setState({
      page: this.state.page - 1,
    });
    this.updateNews();
  }

  handleNextClick = async () => {
    this.setState({
      page: this.state.page + 1,
    });
    this.updateNews();
  }

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{ margin: "30px" }}>Top {this.props.category} Headlines</h1>
        {this.state.loading && <Spinner />/* Spinner is only visible when statement before && is true*/}
        <div className="row">
          {!this.state.loading && this.state.articles1.map((element) => {
            return <div className="col-md-4 my-3" key={element.url}/* Each element must return a unique key. Here url is the unique key*/>
              <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author ? element.author : "Unknown"} date={element.publishedAt} source={element.source.name} />
            </div>
          })}
        </div>
        <div className="container my-2 d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" onClick={this.handlePrevClick} className="btn btn-dark">&#8592; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}/* Math.ceil gives smallest integer greater than decimal number */ type="button" onClick={this.handleNextClick} className="btn btn-dark">Next &#8594;</button>
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    constructor(){ // This runs before render
        super();
        this.state={ // State is used when data is changes dynamically
            articles1: [],
            loading: false
        }
    }

    async componentDidMount(){ // This runs after render
      let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=3e181924374b4955b4018130d947707b";
      let data=await fetch(url); // Using async-await because it return a promise
      let parsedData=await data.json();
      this.setState({articles1: parsedData.articles});
    }

    render() {
        return (
            <div className="container my-3">
                <h2>Top Headlines</h2>
                <div className="row">
                {this.state.articles1.map((element) => {
                  return   <div className="col-md-4 my-3" key={element.url}/* Each element must return a unique key. Here url is the unique key*/>
                  <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url}/>
              </div>
                })}
                </div>
            </div>
        )
    }
}

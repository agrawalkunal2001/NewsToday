import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props; // this.props is an object. Title and description will be pulled from it.

        return (
            <div>
                <div className="card">
                    <span class="position-absolute top-0 translate-middle badge rounded-pill bg-primary" style={{left: "50%", zIndex: 1}}>
                        {source}
                    </span>
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{title}...</h5>
                        <p class="card-text">{description}...</p>
                        <p className="card-text"><small className="tetx-muted">By {author} on {new Date(date).toUTCString()}</small></p>
                        <a href={newsUrl} target="_blank" /* target="_blank" opens news in a new tab*/ class="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

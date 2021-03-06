import React from 'react'

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;

    return (
        <div>
            <div className="card">
                <div style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    position: "absolute",
                    right: "0"
                }}>
                    <span className="badge rounded-pill bg-primary">{source}</span>
                </div>
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

export default NewsItem
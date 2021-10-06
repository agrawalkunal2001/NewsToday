import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let {title, description} = this.props; // this.props is an object. Title and description will be pulled from it.

        return (
            <div>
                <div className="card" style={{width: "18rem"}}/* One bracket for js and other for an object*/>
                    <img src="https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/QPGYYHTAOUI6XILXO5S7FGUVEQ.jpg&w=1440" className="card-img-top" alt="..."/>
                    <div class ="card-body">
                    <h5 class ="card-title">{title}</h5>
                    <p class ="card-text">{description}</p>
                    <a href="#" class ="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        )
    }
}

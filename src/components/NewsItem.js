import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className="my-3">
                <div className="card " >
                    <div style={{display:'flex', justifyContent:'flex-end',position:'absolute', right:'0'}}>
                    <span className="position-relative top-0 translate-middle badge rounded-pill bg-danger" style={{left: '50%', zIndex: '1'}}> {source} </span></div>
                    <img src={!imageUrl ? "https://www.sciencenews.org/wp-content/uploads/2021/02/022421_mt_number-generator_feat.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body" style={{backgroundColor:"rgb(239, 239, 239)"}}>
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toLocaleString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
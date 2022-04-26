import React, { Component } from 'react'
import { Link } from "react-router-dom";

export class NavBar extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-danger p-1">
                    <div className="container-fluid">
                        <img src="https://img.icons8.com/fluency/48/000000/news.png" style={{ height: "2rem", maxWidth: "50%" }} />
                        <Link className="navbar-brand" to="/">DailyNews</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ fontSize: 15 }}>
                                <li className="nav-item"><Link className="nav-link" aria-current="page" to="/">HOME</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/business">BUSINESS</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/health">HEALTH</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/science">SCIENCE</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/technology">TECHNOLOGY</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/entertainment">ENTERTAINMENT</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/sports">SPORTS</Link></li>
                            </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        </div>
                           <a className='d-flex mx-1' href="https://github.com/saideepakreddy0308"> <img className="text-light" src="https://img.icons8.com/material-outlined/24/000000/github.png"/ ></a>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar
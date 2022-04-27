import React, { Component } from 'react'
import { Link } from "react-router-dom";

export class NavBar extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-danger p-1">
                    <div className="container-fluid">
                        <img src="https://img.icons8.com/fluency/48/000000/news.png" style={{ height: "2rem", maxWidth: "50%" }} />
                        <Link className="navbar-brand" to="/">DailyNews <sup className='text-info'>IN</sup></Link>
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
                                <li className="nav-item dropdown" >
          <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Countries
          </a>
          <ul className="dropdown-menu bg-dark text-light" aria-labelledby="navbarDropdown" style={{ fontSize: 15 }}>
            {/* <li  className="dropdown-item " ><Link className="dropdown-link text-muted text-decoration-none" to="./in">India</Link></li> */}
            <li  className="dropdown-item " ><Link className="dropdown-link text-muted text-decoration-none" to="/us">United States</Link></li>
            <li  className="dropdown-item " ><Link className="dropdown-link text-muted text-decoration-none" to="/gb">United Kingdom</Link></li>
            <li  className="dropdown-item " ><Link className="dropdown-link text-muted text-decoration-none" to="/ae">United Arab Emirates</Link></li>
            <li  className="dropdown-item " ><Link className="dropdown-link text-muted text-decoration-none" to="/ar">Argentina</Link></li>
            <li  className="dropdown-item " ><Link className="dropdown-link text-muted text-decoration-none" to="/at">Austria</Link></li>
            <li  className="dropdown-item " ><Link className="dropdown-link text-muted text-decoration-none" to="/au">Australia</Link></li>
            <li  className="dropdown-item " ><Link className="dropdown-link text-muted text-decoration-none" to="/be">Belgium</Link></li>
            <li  className="dropdown-item " ><Link className="dropdown-link text-muted text-decoration-none" to="/bg">Bulgaria</Link></li>
            <li  className="dropdown-item " ><Link className="dropdown-link text-muted text-decoration-none" to="/br">Brazil</Link></li>
            <li  className="dropdown-item " ><Link className="dropdown-link text-muted text-decoration-none" to="/ca">Canada</Link></li>
            <li  className="dropdown-item " ><Link className="dropdown-link text-muted text-decoration-none" to="/ch">Switzerland</Link></li>
            <li  className="dropdown-item " ><Link className="dropdown-link text-muted text-decoration-none" to="/cn">China</Link></li>
            <li  className="dropdown-item " ><Link className="dropdown-link text-muted text-decoration-none" to="/co">Colombia</Link></li>
            <li  className="dropdown-item " ><Link className="dropdown-link text-muted text-decoration-none" to="/cu">Cuba</Link></li>
            <li  className="dropdown-item " ><Link className="dropdown-link text-muted text-decoration-none" to="/cz">Czech Republic</Link></li>
            <li  className="dropdown-item " ><Link className="dropdown-link text-muted text-decoration-none" to="/de">Germany</Link></li>
            <li  className="dropdown-item " ><Link className="dropdown-link text-muted text-decoration-none" to="/eg">Egypt</Link></li>
            <li  className="dropdown-item " ><Link className="dropdown-link text-muted text-decoration-none" to="/fr">France</Link></li>
            <li  className="dropdown-item " ><Link className="dropdown-link text-muted text-decoration-none" to="/gr">Greece</Link></li>
            <li  className="dropdown-item " ><Link className="dropdown-link text-muted text-decoration-none" to="/hk">Hong Kong</Link></li>
            <li  className="dropdown-item " ><Link className="dropdown-link text-muted text-decoration-none" to="/hu">Hungary</Link></li>
            <li  className="dropdown-item " ><Link className="dropdown-link text-muted text-decoration-none" to="/id">Indonesia</Link></li>
            <li  className="dropdown-item " ><Link className="dropdown-link text-muted text-decoration-none" to="/ie">Ireland</Link></li>
            <li  className="dropdown-item " ><Link className="dropdown-link text-muted text-decoration-none" to="/il">Israel</Link></li>
            <li  className="dropdown-item " ><Link className="dropdown-link text-muted text-decoration-none" to="/it">Italy</Link></li>
            <li  className="dropdown-item " ><Link className="dropdown-link text-muted text-decoration-none" to="/jp">Japan</Link></li>
            <li  className="dropdown-item " ><Link className="dropdown-link text-muted text-decoration-none" to="/kr">South Korea</Link></li>
            <li  className="dropdown-item " ><Link className="dropdown-link text-muted text-decoration-none" to="/lt">Lithuania</Link></li>
            <li  className="dropdown-item " ><Link className="dropdown-link text-muted text-decoration-none" to="/lv">Latvia</Link></li>
            <li  className="dropdown-item " ><Link className="dropdown-link text-muted text-decoration-none" to="/ma">Morocco</Link></li>
            <li  className="dropdown-item " ><Link className="dropdown-link text-muted text-decoration-none" to="/mx">Mexico</Link></li>
            <li  className="dropdown-item " ><Link className="dropdown-link text-muted text-decoration-none" to="/my">Malaysia</Link></li>
            <li  className="dropdown-item " ><Link className="dropdown-link text-muted text-decoration-none" to="/ng">Nigeria</Link></li>
            <li  className="dropdown-item " ><Link className="dropdown-link text-muted text-decoration-none" to="/nl">Netherlands</Link></li>
            <li  className="dropdown-item " ><Link className="dropdown-link text-muted text-decoration-none" to="/no">Norway</Link></li>
            <li  className="dropdown-item " ><Link className="dropdown-link text-muted text-decoration-none" to="/nz">New Zealand</Link></li>
            <li  className="dropdown-item " ><Link className="dropdown-link text-muted text-decoration-none" to="/ph">Philippines</Link></li>
            <li  className="dropdown-item " ><Link className="dropdown-link text-muted text-decoration-none" to="/pl">Poland</Link></li>
            <li  className="dropdown-item " ><Link className="dropdown-link text-muted text-decoration-none" to="/pt">Portugal</Link></li>
            <li  className="dropdown-item " ><Link className="dropdown-link text-muted text-decoration-none" to="/ro">Romonia</Link></li>
            <li  className="dropdown-item " ><Link className="dropdown-link text-muted text-decoration-none" to="/rs">Serbia</Link></li>
            <li  className="dropdown-item " ><Link className="dropdown-link text-muted text-decoration-none" to="/ru">Russia</Link></li>
            <li  className="dropdown-item " ><Link className="dropdown-link text-muted text-decoration-none" to="/sa">Saudi Arabia</Link></li>
            <li  className="dropdown-item " ><Link className="dropdown-link text-muted text-decoration-none" to="/se">Sweden</Link></li>
            <li  className="dropdown-item " ><Link className="dropdown-link text-muted text-decoration-none" to="/sg">Singapore</Link></li>
            <li  className="dropdown-item " ><Link className="dropdown-link text-muted text-decoration-none" to="/si">Slovenia</Link></li>
            <li  className="dropdown-item " ><Link className="dropdown-link text-muted text-decoration-none" to="/sk">Slovakia</Link></li>
            <li  className="dropdown-item " ><Link className="dropdown-link text-muted text-decoration-none" to="/za">South Africa</Link></li>
            <li  className="dropdown-item " ><Link className="dropdown-link text-muted text-decoration-none" to="/th">Thailand</Link></li>
            <li  className="dropdown-item " ><Link className="dropdown-link text-muted text-decoration-none" to="/tr">Turkey</Link></li>
            <li  className="dropdown-item " ><Link className="dropdown-link text-muted text-decoration-none" to="/tw">Taiwan</Link></li>
            <li  className="dropdown-item " ><Link className="dropdown-link text-muted text-decoration-none" to="/ua">Ukraine</Link></li>
            <li  className="dropdown-item " ><Link className="dropdown-link text-muted text-decoration-none" to="/ve">Venezuela</Link></li>

          </ul>
        </li>
                            </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        </div>
                           {/* <a className='d-flex mx-1' href="https://github.com/saideepakreddy0308"> <img className="text-light" src="https://img.icons8.com/material-outlined/24/000000/github.png"/ ></a> */}
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar
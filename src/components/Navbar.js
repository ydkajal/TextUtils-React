import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';
  


export default function Navbar(props){
    return(
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/about">{props.TextAbout}</Link>
                    </li>
                </ul>
                {/* <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-primary" type="submit">Search</button>
                </form> */}
                <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>  
                  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
                </div>

                </div>
            </div>
        </nav>
    )
}

//define types of props
Navbar.propTypes = {
    // title : PropTypes.string.isRequired,   //you can make any prop required to be send
    title : PropTypes.string,
    TextAbout : PropTypes.string
}

// set default props in case props are not passed
Navbar.defaultProps = {
    title : 'Set Title Here',
    TextAbout : 'About'
}
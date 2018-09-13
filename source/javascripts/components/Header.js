"use strict"

import React from "react"
import { IndexLink, Link } from "react-router"

export default class Header extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
			  <button className="btn btn-light">中文版本</button>
		      <Link className="navbar-brand js-scroll-trigger" to="about">
		        <span className="d-block d-lg-none">WeiYing Lee</span>
		        
		        <span className="d-none d-lg-block">
		          <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="../../images/profile.jpg" alt=""/>
		        </span>
		      </Link>
		      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		        <span className="navbar-toggler-icon"></span>
		      </button>
		      <div className="collapse navbar-collapse" id="navbarSupportedContent">
		        <ul className="navbar-nav">
		          <li className="nav-item">
		            <Link className="nav-link js-scroll-trigger" to="about">About Me</Link>
		          </li>
		          <li className="nav-item">
		            <Link className="nav-link js-scroll-trigger" to="education">Education</Link>
		          </li>
		          <li className="nav-item">
		            <Link className="nav-link js-scroll-trigger" to="experience">Experience</Link>
		          </li>
		          <li className="nav-item">
		            <Link className="nav-link js-scroll-trigger" to="projects">Projects</Link>
		          </li>
		          <li className="nav-item">
		            <Link className="nav-link js-scroll-trigger" to="skills">Skills</Link>
		          </li>
		          <li className="nav-item">
		            <Link className="nav-link js-scroll-trigger" to="certificates">Certificates</Link>
		          </li>
		        </ul>
		      </div>
		    </nav>
		)
	}
}

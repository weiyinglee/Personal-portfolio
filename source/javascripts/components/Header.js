"use strict"

import React from "react"
import { IndexLink, Link } from "react-router"

import { header } from "../../data"

export default class Header extends React.Component {
	
	constructor() {
		super()
		this.state = {
			isChinese: false
		}
	}

	changeLanguage() {
		this.setState({
			isChinese: !this.state.isChinese
		})
	}

	render() {

		const ch = this.state.isChinese

		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
			  <button className="btn btn-light" onClick={this.changeLanguage.bind(this)}>{ch ? "English Version" : "中文版本"}</button>
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
		        {
		        	header.map((data, index) => {
		        		return (
				          <li className="nav-item" key={index}>
				            <Link className="nav-link js-scroll-trigger" to={data.link}>{data.page}</Link>
				          </li>		        			
		        		)
		        	})

		        }
		        </ul>
		      </div>
		    </nav>
		)
	}
}

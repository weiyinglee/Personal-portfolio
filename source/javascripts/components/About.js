"use strict"

import React from "react"
import  { about } from "../../data"

export default class About extends React.Component {
	render() {
		return (
			<section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
		        <div className="my-auto">
		          <h1 className="mb-0">{about.first_name} 
		            <span className="text-primary"> {about.last_name}</span>
		          </h1>
		          <div className="subheading mb-5">
		          	<div>{about.home_address}</div>
		          	<div>{about.phone_number}</div>
		            <a href={`mailto: ${about.email_address}`}>{about.email_address}</a>
		          </div>
		          <p className="lead mb-5">{about.description}</p>
		          <h4>Also follow me on: </h4>
		          <div className="social-icons">
		            <a href="https://www.linkedin.com/in/weiyinglee/">
		              <i className="fab fa-linkedin-in"></i>
		            </a>
		            <a href="https://www.github.com/weiyinglee">
		              <i className="fab fa-github"></i>
		            </a>
		            <a href="https://www.facebook.com/weiyinglee">
		              <i className="fab fa-facebook-f"></i>
		            </a>		            
		            <a href="https://www.instagram.com/ericleee1009">
		              <i className="fab fa-instagram"></i>
		            </a>
		          </div>
		        </div>
		    </section>
		)
	}
}
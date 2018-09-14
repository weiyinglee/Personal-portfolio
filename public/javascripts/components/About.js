"use strict"

import React from "react"
import cookie from "react-cookies"
import  { about as about_en } from "../../data"
import { about as about_ch } from "../../data_ch"

export default class About extends React.Component {
	render() {
		const isChinese = cookie.load("isChinese")
		const data = isChinese ? about_ch : about_en
		return (
			<section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
		        <div className="my-auto">
		          <h1 className="mb-0">{data.first_name} 
		            <span className="text-primary"> {data.last_name}</span>
		          </h1>
		          <div className="subheading mb-5">
		          	<div>{data.home_address}</div>
		          	<div>{data.phone_number}</div>
		            <a href={`mailto: ${data.email_address}`}>{data.email_address}</a>
		          </div>
		          <p className="lead mb-5">{data.description}</p>
		          <h4>{isChinese ? "多多關注我" : "Also follow me on"}: </h4>
		          <div className="social-icons">
		            <a href="https://www.linkedin.com/in/weiyinglee/" target="_blank">
		              <i className="fab fa-linkedin-in" title="Linkedin"></i>
		            </a>
		            <a href="https://www.github.com/weiyinglee" target="_blank">
		              <i className="fab fa-github" title="GitHub"></i>
		            </a>
		            <a href="https://www.facebook.com/weiyinglee" target="_blank">
		              <i className="fab fa-facebook-f" title="Facebook"></i>
		            </a>		            
		            <a href="https://www.instagram.com/ericleee1009" target="_blank">
		              <i className="fab fa-instagram" title="Instagram"></i>
		            </a>
		          </div>
		        </div>
		    </section>
		)
	}
}
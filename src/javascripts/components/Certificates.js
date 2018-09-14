"use strict"

import React from "react"
import cookie from "react-cookies"
import { certification as certification_en } from "../../data"
import { certification as certification_ch } from "../../data_ch"

export default class Certificates extends React.Component {
	render() {
		const isChinese = cookie.load("isChinese")
		const dataSet = isChinese ? certification_ch : certification_en
		return (
      		<section className="resume-section p-3 p-lg-5 d-flex flex-column" id="awards">
		        <div className="my-auto">
		          	<h2 className="mb-5">{isChinese ? "我的證照" : "Certifications" }</h2>
			          	<ul className="fa-ul mb-0">
			          	{
			          		dataSet.map((data, index) => {
			          			return (
						          <div className="resume-item d-flex flex-column flex-md-row mb-5" key={index}>
						            <div className="resume-content mr-auto">
						              <div className="subheading">{data.name}</div>
						              <img height="100" width="100" src={require(`../../images/${data.picture}`)}/>
						            </div>
						            <div className="resume-date text-md-right">
						              <span className="text-primary">{data.time}</span>
						            </div>
						      	  </div>		          				
			          			)
			          		})
			          	}	            
				        </ul>
		        </div>
		      </section>
		)
	}
}
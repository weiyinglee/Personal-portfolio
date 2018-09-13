"use strict"

import React from "react"
import { experience } from "../../data"

export default class Experience extends React.Component {
	render() {
		return (
		    <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
		        <div className="my-auto">
		          <h2 className="mb-5">Experience</h2>
		          	{
			          experience.map((data, index) => {
			          	return (
				          <div className="resume-item d-flex flex-column flex-md-row mb-5" key={index}>
				            <div className="resume-content mr-auto">
				              <h3 className="mb-0">{data.title}</h3>
				              <div className="subheading mb-3">{data.company_name}</div>
				              <p>{data.description}</p>
				            </div>
				            <div className="resume-date text-md-right">
				              <span className="text-primary">{data.time}</span>
				            </div>
				      	  </div>
			          	)		          
			          })
		      		}
		        </div>
		    </section>
		)
	}
}
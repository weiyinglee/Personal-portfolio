"use strict"

import React from "react"
import { projects } from "../../data"

export default class Projects extends React.Component {
	render() {
		return (
		    <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="project">
		        <div className="my-auto">
		          <h2 className="mb-5">Projects</h2>
		          	{
			          projects.map((data, index) => {
			          	return (
				          <div className="resume-item d-flex flex-column flex-md-row mb-5" key={index}>
				            <div className="resume-content mr-auto">
				              <h3 className="mb-0">{data.name}</h3>
				              <div className="subheading mb-3">{data.tools}</div>
				              <p>{data.description}</p>
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
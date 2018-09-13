"use strict"

import React from "react"
import { certification } from "../../data"

export default class Certificates extends React.Component {
	render() {
		return (
      		<section class="resume-section p-3 p-lg-5 d-flex flex-column" id="awards">
		        <div class="my-auto">
		          	<h2 class="mb-5">Awards &amp; Certifications</h2>
			          	<ul class="fa-ul mb-0">
			          	{
			          		certification.map((data, index) => {
			          			return (
						          <div className="resume-item d-flex flex-column flex-md-row mb-5" key={index}>
						            <div className="resume-content mr-auto">
						              <div className="subheading">{data.name}</div>
						              <img height="100" width="100" src={`../../${data.picture}`}/>
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
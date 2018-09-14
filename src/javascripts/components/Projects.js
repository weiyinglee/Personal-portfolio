"use strict"

import React from "react"
import cookie from "react-cookies"
import { projects as projects_en } from "../../data"
import { projects as projects_ch } from "../../data_ch"

export default class Projects extends React.Component {
	render() {
		const isChinese = cookie.load("isChinese")
		const dataSet = isChinese ? projects_ch : projects_en
		return (
		    <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="project">
		        <div className="my-auto">
		          <h2 className="mb-5">{isChinese ? "我的作品" : "Projects"}</h2>
		          	{
			          dataSet.map((data, index) => {
			          	return (
				          <div className="resume-item d-flex flex-column flex-md-row mb-5" key={index}>
				            <div className="resume-content mr-auto">
				              <h3 className="mb-0">{data.name}</h3>
				              <div className="subheading mb-3">{data.tools}</div>
				              <p>{data.description}</p>
				              <img className="img-fluid mx-auto" src={`../../../public/${data.picture}`}/>
				            </div>
				            <div className="resume-date text-md-right">
				              
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
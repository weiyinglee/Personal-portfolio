"use strict"

import React from "react"
import cookie from "react-cookies"
import { experience as experience_en } from "../../data"
import { experience as experience_ch} from "../../data_ch"

export default class Experience extends React.Component {
	render() {
		const isChinese = cookie.load("isChinese")
		const dataSet = isChinese ? experience_ch : experience_en
		return (
		    <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
		        <div className="my-auto">
		          <h2 className="mb-5">{ isChinese ? "工作經驗" : "Experience"}</h2>
		          	{
			          dataSet.map((data, index) => {
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
"use strict"

import React from "react"
import cookie from "react-cookies"
import { education as education_en} from "../../data"
import { education as education_ch} from "../../data_ch"

export default class Education extends React.Component {
	render() {
		const isChinese = cookie.load("isChinese")
		const dataSet = isChinese ? education_ch : education_en
		return (
			<section className="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
		        <div className="my-auto">
		          <h2 className="mb-5">{isChinese ? "我的學歷" : "Education"}</h2>
		          {
			          dataSet.map((data, index) => {
			          	return (
				          <div className="resume-item d-flex flex-column flex-md-row mb-5" key={index}>
				            <div className="resume-content mr-auto">
				              <h3 className="mb-0">{data.school_name}</h3>
				              <div className="subheading mb-3">{data.degree}</div>
				              <div>{data.major}</div>
				              <p>GPA: {data.gpa}</p>
				              <h4 className="subheading">Relative Course: </h4>
				              <p>{data.course}</p>
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
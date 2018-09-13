"use strict"

import React from "react"
import { skills } from "../../data"

export default class Skills extends React.Component {
	render() {
		return (
		    <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
		        <div className="my-auto">
		          <h2 className="mb-5">Skills</h2>

		          <div className="subheading mb-3">Programming Languages</div>
		          <ul className="list-inline dev-icons">
		          {
		          	skills.programming_language.map((data, index) => {
		          		return (
				            <li className="list-inline-item" key={index}>
				              <i className={data.icon} title={data.name}></i>
				            </li>
		          		)
		          	})
		          }
		          </ul>

		          <div className="subheading mb-3">Web Design</div>
		          <ul className="list-inline dev-icons">
		          {
		          	skills.web_design.map((data, index) => {
		          		return (
				            <li className="list-inline-item" key={index}>
				              <i className={data.icon} title={data.name}></i>
				            </li>
		          		)
		          	})
		          }
		          </ul>		          

		          <div className="subheading mb-3">DataBase</div>
		          <ul className="list-inline dev-icons">
		          {
		          	skills.database.map((data, index) => {
		          		return (
				            <li className="list-inline-item" key={index}>
				              <i className={data.icon} title={data.name}></i>
				            </li>
		          		)
		          	})
		          }
		          </ul>

		          <div className="subheading mb-3">Tools</div>
		          <ul className="list-inline dev-icons">
		          {
		          	skills.tool.map((data, index) => {
		          		return (
				            <li className="list-inline-item" key={index}>
				              <i className={data.icon} title={data.name}></i>
				            </li>
		          		)
		          	})
		          }
		          </ul>
	
		        </div>
		    </section>
		)
	}
}
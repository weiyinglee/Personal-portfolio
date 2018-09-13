"use strict"

import React from "react"
import cookie from "react-cookies"
import { skills as skills_en } from "../../data"
import { skills as skills_ch } from "../../data_ch"

export default class Skills extends React.Component {
	render() {
		const isChinese = cookie.load("isChinese")
		const dataSet = isChinese ? skills_ch : skills_en
		return (
		    <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
		        <div className="my-auto">
		          <h2 className="mb-5">{ isChinese ? "技能工具" : "Skills"}</h2>

		          <div className="subheading mb-3">{ isChinese ? "程式語言" : "Programming Languages"}</div>
		          <ul className="list-inline dev-icons">
		          {
		          	dataSet.programming_language.map((data, index) => {
		          		return (
				            <li className="list-inline-item" key={index}>
				              <i className={data.icon} title={data.name}></i>
				            </li>
		          		)
		          	})
		          }
		          </ul>

		          <div className="subheading mb-3">{ isChinese ? "網頁設計" : "Web Design"}</div>
		          <ul className="list-inline dev-icons">
		          {
		          	dataSet.web_design.map((data, index) => {
		          		return (
				            <li className="list-inline-item" key={index}>
				              <i className={data.icon} title={data.name}></i>
				            </li>
		          		)
		          	})
		          }
		          </ul>		          

		          <div className="subheading mb-3">{ isChinese ? "資料庫" : "DataBase"}</div>
		          <ul className="list-inline dev-icons">
		          {
		          	dataSet.database.map((data, index) => {
		          		return (
				            <li className="list-inline-item" key={index}>
				              <i className={data.icon} title={data.name}></i>
				            </li>
		          		)
		          	})
		          }
		          </ul>

		          <div className="subheading mb-3">{ isChinese ? "其他工具" : "Tools"}</div>
		          <ul className="list-inline dev-icons">
		          {
		          	dataSet.tool.map((data, index) => {
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